<?php
 
namespace App\Models;
 
use Illuminate\Database\Eloquent\Model;
 
class Antecedente extends Model
{
    protected $table = 'antecedente';
    protected $fillable = ['local','data','hora','descricao','acusacao_id','criminoso_id'];
    const CREATED_AT = 'criado_em';
    const UPDATED_AT = 'alterado_em';
}