<?php
 
namespace App\Models;
 
use Illuminate\Database\Eloquent\Model;
 
class Genero extends Model
{
    protected $table = 'estado_civil';
    protected $fillable = ['genero'];
    const CREATED_AT = 'criado_em';
    const UPDATED_AT = 'alterado_em';
}