<?php
 
namespace App\Models;
 
use Illuminate\Database\Eloquent\Model;
 
class Usuario extends Model
{
    protected $table = 'usuario';
    protected $fillable = ['usuario', 'nome'];
    protected $hidden = ['senha'];
    const CREATED_AT = 'criado_em';
    const UPDATED_AT = 'alterado_em';
}