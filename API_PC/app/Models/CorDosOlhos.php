<?php
 
namespace App\Models;
 
use Illuminate\Database\Eloquent\Model;
 
class CorDosOlhos extends Model
{
    protected $table = 'cor_dos_olhos';
    protected $fillable = ['cor', 'usuario_id', 'excluido'];
    const CREATED_AT = 'criado_em';
    const UPDATED_AT = 'alterado_em';
}