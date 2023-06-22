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
                           'local_de_trabalho',
                           'porte_fisico',
                           'cor_dos_olhos',
                           'tipo_de_cabelo',
                           'profissao',
                           'excluido',
                           'usuario_id'];
    const CREATED_AT = 'criado_em';
    const UPDATED_AT = 'alterado_em';
}