<?php

namespace App\Http\Controllers;

use App\Models\Cor;
use Illuminate\Http\Response;
use Illuminate\Http\Request;
use Exception;

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
