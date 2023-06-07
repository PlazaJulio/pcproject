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
        return Genero::where('id', $id)->where('excluido', false)->firstOr(
            function() {
                return response("", 404);
        });
    }

    public function mostrarTodos()
    {
        return Genero::all()->where('excluido', false);
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
        try{
            $dadoExcluido = Genero::where('excluido', false)->findOrFail($id);
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
           $dadoASerAlterado = Genero::where('excluido', false)->findOrFail($id); // Alteracao
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