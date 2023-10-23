<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;
    protected $hidden = ['created_at', 'updated_at'];
    public $timestamps = false;
    protected $table = 'categories';


    protected $fillable = [
        'name',
        'picture',
    ];

    public function getPictureAttribute(): string
    {
        return env("APP_URL").'/'.env("PICTURE_PATH").'/'.$this->attributes['picture'];
    }

}
