<?php
 
namespace App\Models;
 
use Illuminate\Database\Eloquent\Model;
 
class CorDosOlhos extends Model
{
    protected $table = 'endereco';
    protected $fillable = ['cor'];
    const CREATED_AT = 'criado_em';
    const UPDATED_AT = 'alterado_em';
}