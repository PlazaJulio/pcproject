<?php
 
namespace App\Models;
 
use Illuminate\Database\Eloquent\Model;
 
class TipoDeTatuagem extends Model
{
    protected $table = 'endereco';
    protected $fillable = ['tipo'];
    const CREATED_AT = 'criado_em';
    const UPDATED_AT = 'alterado_em';
}