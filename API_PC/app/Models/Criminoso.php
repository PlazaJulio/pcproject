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
                           'estado_civil',
                           'grau_de_escolaridade',
                           'local_de_trabalho',
                           'profissao',
                           'genero',
                           'altura',
                           'etnia',
                           'foto_perfil_esquerdo',
                           'foto_perfil_direito',
                           'foto_frente',
                           'cor_da_pele',
                           'endereco_id',
                           'aparencia_id',
                           'excluido',
                           'usuario_id'];
    const CREATED_AT = 'criado_em';
    const UPDATED_AT = 'alterado_em';
}