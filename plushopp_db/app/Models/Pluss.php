<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Pluss extends Model
{
    protected $table = 'pluss';

    public $timestamps = false;

    protected $fillable = ['nev', 'szuletesidatum', 'pluss_tipus_id'];

    public function tipus(): BelongsTo
    {
        return $this->belongsTo(PlussTipus::class, 'pluss_tipus_id');
    }
}
