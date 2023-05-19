<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Irregular extends Model
{
    use HasFactory;

    // Table name in database
    protected $table = 'irregular';

    // The fields fillable
    protected $fillable = ['base', 'past', 'participle', 'description'];

    
}
