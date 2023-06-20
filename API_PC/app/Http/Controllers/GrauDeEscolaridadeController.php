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
        return GrauDeEscolaridade::where('id', $id)->where('excluido', false)->firstOr(
            function() {
                return response("", 404);
        });
    }

    public function mostrarTodos()
    {
        return GrauDeEscolaridade::all()->where('excluido', false);
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
        try{
            $dadoExcluido = GrauDeEscolaridade::where("excluido", false)->findOrFail($id);
            $dadoExcluido->update(["excluido" => true]);
            $dadoExcluido->update(["usuario_id" =>  auth()->user()->id]);
            return $dadoExcluido;
        }catch(Exception){
            return response("", 404);
        }
    }

    public function alterar($id, Request $request)
    {
        try{
            $dadoASerAlterado = GrauDeEscolaridade::where('excluido', false)->findOrFail($id);
            foreach ($request->except('_token') as $chave => $valor){
                if($chave == "excluido" || $chave == "usuario_id")
                {
                    continue;
                }
                $dadoASerAlterado->update([$chave => $valor]);
            }
            $dadoASerAlterado->update(["usuario_id" => auth()->user()->id]);
            return $dadoASerAlterado;
        }catch(Exception){
            return response("", 404);
        }
    }
}
