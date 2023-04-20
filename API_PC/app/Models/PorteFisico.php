<?php
 
namespace App\Models;
 
use Illuminate\Database\Eloquent\Model;
 
class PorteFisico extends Model
{
    protected $table = 'endereco';
    protected $fillable = ['porte'];
    const CREATED_AT = 'criado_em';
    const UPDATED_AT = 'alterado_em';
}