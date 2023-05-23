<?php
 
namespace App\Models;
 
use Illuminate\Database\Eloquent\Model;
 
class Genero extends Model
{
    protected $table = 'genero';
    protected $fillable = ['genero', 'usuario_id', 'excluido'];
    const CREATED_AT = 'criado_em';
    const UPDATED_AT = 'alterado_em';
}