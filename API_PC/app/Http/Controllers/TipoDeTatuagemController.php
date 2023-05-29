<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\TipoDeTatuagem;
use Exception;

class TipoDeTatuagemController extends Controller
{
    public function mostrarPorId($id)
    {
        return TipoDeTatuagem::where('id', $id)->where('excluido', false)->firstOr(
            function() {
                return response("", 404);
        });
    }

    public function mostrarTodos()
    {
        return TipoDeTatuagem::all()->where('excluido', false);
    }

    public function inserir(Request $request)
    {   
        try{
            return TipoDeTatuagem::create([
                "tipo" => $request->tipo,
                "usuario_id" => auth()->user()->id,
                "excluido" => false
            ]);
        }catch(Exception){
            return response("Requisição feita de maneira incorreta", 400);
        }
    }

    public function deletar($id)
    {
        $dadoExcluido = TipoDeTatuagem::findOrFail($id);
        $dadoExcluido->update(["excluido" => true]);
        return $dadoExcluido;
    }

    public function alterar($id, Request $request)
    {
        $dadoASerAlterado = TipoDeTatuagem::findOrFail($id);
        foreach ($request->except('_token') as $chave => $valor){
           if($chave == "excluido" || $chave == "usuairo_id")
           {
                continue;
           }
            $dadoASerAlterado->update([$chave => $valor]);
        }
        $dadoASerAlterado->update(["usuario_id" => auth()->user()->id]);
        return $dadoASerAlterado;
    }
    
}
