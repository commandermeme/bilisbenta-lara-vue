<?php

use App\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    public function run()
    {
        User::create([
            'email' => 'admin@test.com',
            'password' => Hash::make('admin'),
            'role' => 'administrator',
            'updated_at' => NULL,
            'created_at' => NULL
        ]);
        User::create([
            'email' => 'user@test.com',
            'password' => Hash::make('secret'),
            'role' => 'reseller',
            'updated_at' => NULL,
            'created_at' => NULL
        ]);
    }
}
