<?php

namespace App\Http\Controllers;

use App\Models\Cor;

class CorController extends Controller
{
    public function __construct()
    {
        //
    }
    
    public function mostrarPorId($id)
    {
        return Cor::findOrFail($id);
    }

    public function mostrarTodos()
    {
        return Cor::all();
    }
}
