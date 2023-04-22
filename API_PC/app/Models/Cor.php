<?php
 
namespace App\Models;
 
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\Factory;
use Database\Factories\CorFactory;
class Cor extends Model
{
    protected static function factory(): Factory
    {
        return CorFactory::new();
    }
    protected $table = 'cor';
    protected $fillable = ['cor'];
    const CREATED_AT = 'criado_em';
    const UPDATED_AT = 'alterado_em';
}