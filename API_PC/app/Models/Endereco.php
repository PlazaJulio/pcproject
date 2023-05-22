<?php
 
namespace App\Models;
 
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\Factory;
use Database\Factories\EnderecoFactory;

class Endereco extends Model
{
    protected $table = 'endereco';
    protected $fillable = ['cep','rua','bairro','numero','complemento', 'usuario_id'];
    const CREATED_AT = 'criado_em';
    const UPDATED_AT = 'alterado_em';

    protected static function newfactory(): Factory
    {
        return EnderecoFactory::new();
    }
}