<?php
 
namespace App\Models;
 
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\Factory;
use Database\Factories\AparenciaFactory;

 
class Aparencia extends Model
{

    protected static function factory(): Factory
    {
        return AparenciaFactory::new();
    }

    protected $table = 'aparencia';
    protected $fillable = ['altura', 
                           'etnia', 
                           'cor_id', 
                           'cor_do_cabelo_id', 
                           'tipo_de_cabelo_id', 
                           'cor_dos_olhos_id',
                           'porte_fisico_id',
                           'foto_de_perfil_esquerdo', 
                           'foto_de_perfil_direito', 
                           'foto_de_frente',
                           'usuario_id',
                           'excluido'];
                           
    const CREATED_AT = 'criado_em';
    const UPDATED_AT = 'alterado_em';
}