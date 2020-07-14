<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;
use App\UserInfo;

class SubscribersController extends Controller
{
    public function index()
    {
        return response()->json([
            'message' => 'Welcome Subscriber!',
        ], 200);
    }

    public function profile()
    {
        $user = Auth::user();
        $subscriberId = $user->id;
        $subscriber = UserInfo::where('user_id', $subscriberId)->get();
        $subscriberProfile = $subscriber[0];
        return response()->json([
            'success' => true,
            'subscriber' => $subscriberProfile,
            'status_code' => 200
        ], 200);
    }

    public function profileupdate(Request $request)
    {
        $user = Auth::user();
        $subscriberId = $user->id;
        $subscriber = UserInfo::where('user_id', $subscriberId);
        
        if ($subscriber->update($request->all())) {
            return response()->json([
                'success' => true,
                'message' => 'Successfully updated.',
                'status_code' => 200
            ], 200);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Unable to update, Please try again.',
                'status_code' => 500
            ], 500);
        }
    }
}
