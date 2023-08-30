<?php

namespace App\Http\Controllers;
use Illuminate\Http\Response;
use Illuminate\Http\Request;
use App\Models\Endereco;
use Exception;

class EnderecoController extends Controller
{
    public function mostrarPorId($id)
    {
        return Endereco::where('id', $id)->where('excluido', false)->firstOr(
            function() {
                return response("", 404);
        });
    }

    public function mostrarTodos(Request $request)
    {
        $limite = $request->limite ? $request->limite : 10;
        $deslocar = $request->deslocar ? $request->deslocar : 0;
        $numero_de_dados_totais = Endereco::count();
        return response()->json(["numero_de_dados_totais" => $numero_de_dados_totais, "deslocar"=>$deslocar,"limite"=>$limite,"resultado" => Endereco::offset($deslocar)->limit($limite)->where('excluido', false)->orderBy("id")->get()]);
    }

    public function inserir(Request $request)
    {   
        try{
            return Endereco::create([
                "cep" => $request->cep,
                "rua" => $request->rua,
                "bairro" => $request->bairro,
                "numero" => $request->numero,
                "complemento" => $request->complemento,
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
            $dadoExcluido = Endereco::where('excluido', false)->findOrFail($id);
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
           $dadoASerAlterado = Endereco::where('excluido', false)->findOrFail($id); // Alteracao
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
