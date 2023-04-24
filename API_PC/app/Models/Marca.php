<?php
 
namespace App\Models;
 
use Illuminate\Database\Eloquent\Model;
 
class Marca extends Model
{
    protected $table = 'marca';
    protected $fillable = ['cicatriz_ou_tatuagem', 'descricao', 'parte_do_corpo', 'foto', 'tipo', 'aparencia_id'];
    const CREATED_AT = 'criado_em';
    const UPDATED_AT = 'alterado_em';
}