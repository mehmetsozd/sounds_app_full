<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sound extends Model
{
    use HasFactory;
    protected $hidden = ['created_at', 'updated_at'];
    protected $table = 'sounds';
    public $timestamps = false;

    protected $fillable = [
        'characters_id',
        'name',
        'sound',
    ];

    public function character()
    {
        return $this->belongsTo(Character::class, 'characters_id');
    }

    public function getSoundAttribute($value)
    {
        return env('APP_URL').'/' .env('SOUND_PATH').'/' . $value;
    }

}
