<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class PlussTipus extends Model
{
    protected $table = 'pluss_tipus';

    public $timestamps = false;

    protected $fillable = ['tipus'];

    public function pluss(): HasMany
    {
        return $this->hasMany(Pluss::class, 'pluss_tipus_id');
    }
}
