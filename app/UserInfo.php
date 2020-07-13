<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserInfo extends Model
{
    protected $fillable = [
        'fname', 'lname', 'mobile', 'country', 'province', 'city', 'brgy',
    ];
}
