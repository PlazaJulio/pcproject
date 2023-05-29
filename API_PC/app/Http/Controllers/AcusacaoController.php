<?php

namespace App\Http\Controllers;
use Illuminate\Http\Response;
use Illuminate\Http\Request;
use App\Models\Acusacao;
use Exception;

class AcusacaoController extends Controller
{
    
    public function __construct()
    {
        //
    }
    public function mostrarPorId($id)
    {
        return Acusacao::where('id', $id)->where('excluido', false)->firstOr(
            function() {
                return response("", 404);
        });
    }

    public function mostrarTodos()
    {
        return Acusacao::all()->where('excluido', false);
    }

    public function inserir(Request $request)
    {   
        try{
            return Acusacao::create([
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
        $dadoExcluido = Acusacao::findOrFail($id);
        $dadoExcluido->update(["excluido" => true]);
        $dadoExcluido->update(["usuario_id" =>  auth()->user()->id]);
        return $dadoExcluido;
    }

    public function alterar($id, Request $request)
    {
        $dadoASerAlterado = Acusacao::findOrFail($id);
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
