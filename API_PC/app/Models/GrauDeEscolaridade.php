<?php
 
namespace App\Models;
 
use Illuminate\Database\Eloquent\Model;
 
class GrauDeEscolaridade extends Model
{
    protected $table = 'grau_de_escolaridade';
    protected $fillable = ['grau', 'usuario_id'];
    const CREATED_AT = 'criado_em';
    const UPDATED_AT = 'alterado_em';
}