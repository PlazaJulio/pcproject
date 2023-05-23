<?php
 
namespace App\Models;
 
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\Factory;
use Database\Factories\CriminosoFactory;
 
class Criminoso extends Model
{   

    protected static function factory(): Factory
    {
        return CriminosoFactory::new();
    }

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
                           'aparencia_id',
                           'excluido'];
    const CREATED_AT = 'criado_em';
    const UPDATED_AT = 'alterado_em';
}