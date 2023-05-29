<?php

namespace App\Http\Controllers;

namespace App\Http\Controllers;
use Illuminate\Http\Response;
use Illuminate\Http\Request;
use Exception;
use App\Models\Cor;

class CorController extends Controller
{
    public function __construct()
    {
        //
    }
    
    public function mostrarPorId($id)
    {
        return Cor::where('id', $id)->where('excluido', false)->firstOr(
            function() {
                return response("", 404);
        });
    }

    public function mostrarTodos()
    {
        return Cor::all()->where('excluido', false);
    }

    public function inserir(Request $request)
    {   
        try{
            return Cor::create([
                "cor" => $request->cor,
                "usuario_id" => auth()->user()->id,
                "excluido" => false
            ]);
        }catch(Exception){
            return response("", 400);
        }
    }

    public function deletar($id)
    {
        $dadoExcluido = Cor::findOrFail($id);
        $dadoExcluido->update(["excluido" => true]);
        $dadoExcluido->update(["usuario_id" =>  auth()->user()->id]);
        return $dadoExcluido;
    }

    public function alterar($id, Request $request)
    {
        $dadoASerAlterado = Cor::findOrFail($id);
        foreach ($request->except('_token') as $chave => $valor){
           if($chave == "excluido" || $chave == "usuario_id")
           {
                continue;
           }
            $dadoASerAlterado->update([$chave => $valor]);
        }
        $dadoASerAlterado->update(["usuario_id" => auth()->user()->id]);
        return $dadoASerAlterado;
    }
}
