<?php

namespace App\Http\Controllers;

use App\Models\EstadoCivil;

class EstadoCivilController extends Controller
{
    public function __construct()
    {
        //
    }
    
    public function mostrarPorId($id)
    {
        return EstadoCivil::findOrFail($id);
    }

    public function mostrarTodos()
    {
        return EstadoCivil::all();
    }
}
