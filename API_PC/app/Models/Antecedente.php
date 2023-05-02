<?php
 
namespace App\Models;
 
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\Factory;
use Database\Factories\AntecedenteFactory;
 
class Antecedente extends Model
{
    
    protected static function factory(): Factory
    {
        return AntecedenteFactory::new();
    }

    protected $table = 'antecedente';
    protected $fillable = ['local','data','hora','descricao','acusacao_id','criminoso_id'];
    const CREATED_AT = 'criado_em';
    const UPDATED_AT = 'alterado_em';
}