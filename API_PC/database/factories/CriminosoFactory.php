<?php

namespace Database\Factories;

use App\Models\Criminoso;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

class CriminosoFactory extends Factory
{
    
    protected $model = Criminoso::class;

    public function definition()
    {
        
        $listaDatasNsci = ["2000-05-22", "2005-04-21", "2001-03-04", "2003-12-12"];
        $listaobito_foragido = [true, false];
        $listaCpf = ["249.058.768-42", "716.582.776-51", "716.582.776-51", "858.431.915-83"];
        $listaRg = ["80.776.309-3", "95.983.118-6", "38.692.546-7", "65.700.374-8"];
        $listaLocalTra = ["Padaria", "Buteco do Ze", "Amigao", "FarmaciaMarilia"];
        $listaTrabalho = ["Carpinteiro", "Pedreiro", "Pinto", "Vendedor"];
        
        return [
            'nome' => $this->faker->name,
            'alcunha' => $this->faker->userName,
            'telefone' => $this->faker->phoneNumber,
            'pai' => $this->faker->name,
            'mae' => $this->faker->name,
            'data_de_nascimento' => $this->faker->randomElement($listaDatasNsci),
            'obito' => $this->faker->randomElement($listaobito_foragido),
            'foragido' => $this->faker->randomElement($listaobito_foragido),
            'rg' => $this->faker->unique->postcode(),
            'cpf' => $this->faker->unique->postcode(),
            'naturalidade' => $this->faker->state,
            'nacionalidade' => $this->faker->country,
            'local_de_trabalho' => $this->faker->randomElement($listaLocalTra),
            'profissao' => $this->faker->randomElement($listaTrabalho),
            'porte_fisico' => $this->faker->word(),
            'cor_dos_olhos' => $this->faker->word(),
            'endereco_id' => random_int(1, 10),
            'usuario_id' => 1,
            'excluido' => false
        ];
    }
}