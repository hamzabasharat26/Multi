<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SystemCredential extends Model
{
    protected $fillable = [
        'role',
        'username',
        'password',
        'display_name',
    ];

    protected $hidden = [
        'password',
    ];
}
