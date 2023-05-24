<?php

namespace App\Http\Controllers;
use App\Models\GrauDeEscolaridade;
use Illuminate\Http\Request;
use Exception;
class GrauDeEscolaridadeController extends Controller
{
    public function __construct()
    {
        //
    }
    
    public function mostrarPorId($id)
    {
        return GrauDeEscolaridade::findOrFail($id);
    }

    public function mostrarTodos()
    {
        return GrauDeEscolaridade::where('excluido', false);
    }

    public function inserir(Request $request)
    {   
        try{
            return GrauDeEscolaridade::create([
                "grau" => $request->grau,
                "usuario_id" => auth()->user()->id,
                "excluido" => false
            ]);
        }catch(Exception){
            return response("Requisição feita de maneira incorreta", 400);
        }
    }

    public function deletar($id)
    {
        $dadoExcluido = GrauDeEscolaridade::findOrFail($id);
        $dadoExcluido->update(["excluido" => true]);
        return $dadoExcluido;
    }

    public function alterar($id, Request $request)
    {
        $dadoASerAlterado = GrauDeEscolaridade::findOrFail($id);
        foreach ($request->except('_token') as $chave => $valor){
            $dadoASerAlterado->update([$chave => $valor]);
        }
        return $dadoASerAlterado;
    }
}
