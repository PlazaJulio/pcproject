<?php
 
namespace App\Models;
 
use Illuminate\Database\Eloquent\Model;
 
class Criminoso extends Model
{
    protected $table = 'criminoso';
    protected $fillable = ['nome',
                           'alcunha',
                           'telefone',
                           'pai',
                           'mae',
                           'data_de_nascimento',
                           'obito',
                           'foragido',
                           'rg',
                           'cpf',
                           'naturalidade',
                           'nacionalidade',
                           'estado_civil_id',
                           'grau_de_escolaridade_id',
                           'local_de_trabalho',
                           'profissao',
                           'genero_id',
                           'endereco_id',
                           'aparencia_id'];
    const CREATED_AT = 'criado_em';
    const UPDATED_AT = 'alterado_em';
}