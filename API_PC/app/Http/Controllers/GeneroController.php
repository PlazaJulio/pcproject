<?php

namespace App\Http\Controllers;


namespace App\Http\Controllers;
use Illuminate\Http\Response;
use Illuminate\Http\Request;
use Exception;
use App\Models\Genero;

class GeneroController extends Controller
{
    public function __construct()
    {
        //
    }
    
    public function mostrarPorId($id)
    {
        return Genero::findOrFail($id);
    }

    public function mostrarTodos()
    {
        return Genero::all();
    }

    public function inserir(Request $request)
    {   
        try{
            return Genero::create([
                "genero" => $request->genero,
                "usuario_id" => auth()->user()->id,
                "excluido" => false
            ]);
        }catch(Exception){
            return response("Requisição feita de maneira incorreta", 400);
        }
    }

    public function deletar($id)
    {
        $dadoExcluido = Genero::findOrFail($id);
        $dadoExcluido->delete();
        return $dadoExcluido;
    }

    public function alterar($id, Request $request)
    {
        $dadoASerAlterado = Genero::findOrFail($id);
        foreach ($request->except('_token') as $chave => $valor){
            $dadoASerAlterado->update([$chave => $valor]);
        }
        return $dadoASerAlterado;
    }
}
