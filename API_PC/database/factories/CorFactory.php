<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class CorFactory extends Factory
{
    public function definition()
    {
        return [
            'cor' => $this->faker->name
        ];
    }
}
