<?php
 
namespace App\Models;
 
use Illuminate\Database\Eloquent\Model;
 
class Acusacao extends Model
{
    protected $table = 'acusacao';
    protected $fillable = ['tipo'];
    const CREATED_AT = 'criado_em';
    const UPDATED_AT = 'alterado_em';
}