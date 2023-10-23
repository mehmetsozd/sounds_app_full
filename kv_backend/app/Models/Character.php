<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Character extends Model
{
    use HasFactory;
    protected $hidden = ['created_at', 'updated_at'];
    protected $table = 'characters';
    public $timestamps = false;

    protected $fillable = [
        'category_id',
        'name',
        'description',
        'picture',
    ];

    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id');
    }

    public function getPictureAttribute(): string
    {
        return env("APP_URL").'/'.env("PICTURE_PATH").'/'.$this->attributes['picture'];
    }
}
