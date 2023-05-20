<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Game extends Model
{
    use HasFactory;

    // Table name in database
    protected $table = 'game';

    // The fields fillable
    protected $fillable = ['title', 'image'];
}
