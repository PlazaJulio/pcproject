<?php
 
namespace App\Models;
 
use Illuminate\Database\Eloquent\Model;
 
class EstadoCivil extends Model
{
    protected $table = 'estado_civil';
    protected $fillable = ['estado', 'usuario_id'];
    const CREATED_AT = 'criado_em';
    const UPDATED_AT = 'alterado_em';
}