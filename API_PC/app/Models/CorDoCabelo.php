<?php
 
namespace App\Models;
 
use Illuminate\Database\Eloquent\Model;
 
class CorDoCabelo extends Model
{
    protected $table = 'cor_do_cabelo';
    protected $fillable = ['cor'];
    const CREATED_AT = 'criado_em';
    const UPDATED_AT = 'alterado_em';
}