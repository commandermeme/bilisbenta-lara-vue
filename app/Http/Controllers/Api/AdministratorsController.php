<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AdministratorsController extends Controller
{
    public function index()
    {
        return response()->json([
            'message' => 'Welcome Administator',
        ], 200);
    }
}
