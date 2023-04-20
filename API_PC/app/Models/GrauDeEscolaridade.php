<?php
 
namespace App\Models;
 
use Illuminate\Database\Eloquent\Model;
 
class GrauDeEscolaridade extends Model
{
    protected $table = 'estado_civil';
    protected $fillable = ['grau'];
    const CREATED_AT = 'criado_em';
    const UPDATED_AT = 'alterado_em';
}