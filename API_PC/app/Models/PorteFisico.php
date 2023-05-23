<?php
 
namespace App\Models;
 
use Illuminate\Database\Eloquent\Model;
 
class PorteFisico extends Model
{
    protected $table = 'porte_fisico';
    protected $fillable = ['porte', 'usuario_id', 'excluido'];
    const CREATED_AT = 'criado_em';
    const UPDATED_AT = 'alterado_em';
}