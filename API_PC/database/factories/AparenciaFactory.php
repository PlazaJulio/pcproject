<?php

namespace Database\Factories;

use App\Models\Aparencia;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

class AparenciaFactory extends Factory
{
    
    protected $model = Aparencia::class;

    public function definition()
    {
        return [
            'altura' => round(rand(1, 2) + (mt_rand() / mt_getrandmax()), 2),
            'etnia' => Str::random(5),
            'cor_id' => random_int(1, 5),
            'cor_do_cabelo_id' => random_int(1, 6),
            'tipo_de_cabelo_id' => random_int(1, 9),
            'cor_dos_olhos_id' => random_int(1, 6),
            'porte_fisico_id' => random_int(1, 5),
            'foto_de_perfil_esquerdo' => Str::random(5),
            'foto_de_perfil_direito' => Str::random(5),
            'foto_de_frente' => Str::random(5),
            "usuario_id" => 1,
            'excluido' => false
        ];
    }
}