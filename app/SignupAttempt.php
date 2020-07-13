<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SignupAttempt extends Model
{
    protected $fillable = [
        'email', 'password', 'otp',
    ];
}
