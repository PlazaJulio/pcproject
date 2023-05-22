<?php
 
namespace App\Models;
 
use Illuminate\Database\Eloquent\Model;

class Cor extends Model
{
    protected $table = 'cor';
    protected $fillable = ['cor', 'usuario_id'];
    const CREATED_AT = 'criado_em';
    const UPDATED_AT = 'alterado_em';
}