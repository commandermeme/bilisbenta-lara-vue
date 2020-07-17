<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Notifications\OtpVerifyNotification;
use Notification;
use Auth;
use Carbon\Carbon;
use App\SignupAttempt;
use App\User;
use App\UserInfo;


class AuthController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            'email' => 'required|unique:users|email|string|max:255',
            'password' => 'required|string|min:8',
        ]);

        $otp = new SignupAttempt;
        $otp->email = $request->email;
        $otp->password = Hash::make($request->password);
        $otp->otp = mt_rand(100000, 999999);

        if ($otp->save()) {
            Notification::route('mail', $otp->email)->notify(new OtpVerifyNotification($otp->otp));

            return response()->json([
                'success' => true,
                'message' => 'Successfully send OTP to your email.',
                'otp' => $otp->otp,
                'email' => $otp->email,
                'password' => $otp->password,
                'status_code' => 201,
            ], 201);
        }
        else {
            return response()->json([
                'success' => false,
                'message' => 'Unable to send OTP.',
                'status_code' => 500,
            ], 500);
        }
    }

    public function verifyOtp(Request $request)
    {
        if ($request->otp == $request->otp_verify) {
            $register = new User;
            $register->email = $request->email;
            $register->password = $request->password;
            $register->otp = $request->otp;
            $register->save();

            if ($register->save()) {
                $info = new UserInfo;
                $info->user_id = $register->id;
                $info->save();
            }

            return response()->json([
                'success' => true,
                'message' => 'Successfully register. You can now login.',
                'status_code' => 201,
            ], 201);
        }
        else {
            return response()->json([
                'success' => false,
                'message' => 'Incorrect OTP Verification Code.',
                'status_code' => 500,
            ], 500);
        }
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email|string|max:255',
            'password' => 'required|string|min:8',
        ]);

        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            $user = Auth::user();

            $tokenData = $user->createToken($user->email .'_'. now(), [$user->role]);

            return response()->json([
                'success' => true,
                'user' => $user,
                'access_token' => $tokenData->accessToken,
                'token_type' => 'Bearer',
                'token_scope' => $tokenData->token->scopes,
                'status_code' => 200,
            ], 200);


        }
        else {
            return response()->json([
                'success' => false,
                'message' => 'Unauthorized to access.',
                'status_code' => 401,
            ], 401);
        }
    }

    public function logout(Request $request)
    {
        $request->user()->token()->revoke();

        return response()->json([
            'success' => true,
            'message' => 'Successfully logout',
            'status_code' => 200,
        ], 200);
    }
}
