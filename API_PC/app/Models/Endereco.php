<?php
 
namespace App\Models;
 
use Illuminate\Database\Eloquent\Model;
 
class Endereco extends Model
{
    protected $table = 'endereco';
    protected $fillable = ['cep','rua','bairro','numero','complemento'];
    const CREATED_AT = 'criado_em';
    const UPDATED_AT = 'alterado_em';
}