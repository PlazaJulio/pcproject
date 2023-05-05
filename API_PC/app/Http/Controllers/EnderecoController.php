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
        return Endereco::findOrFail($id);
    }

    public function mostrarTodos()
    {
        return Endereco::all();
    }

    public function inserir(Request $request)
    {   
        try{
            return Endereco::create([
                "cep" => $request->cep,
                "rua" => $request->rua,
                "bairro" => $request->bairro,
                "numero" => $request->numero,
                "complemento" => $request->complemento
            ]);
        }catch(Exception){
            return response("Requisição feita de maneira incorreta", 400);
        }
    }

    public function deletar($id)
    {
        $dadoExcluido = Endereco::findOrFail($id);
        $dadoExcluido->delete();
        return $dadoExcluido;
    }

    public function alterar($id, Request $request)
    {
        $dadoASerAlterado = Endereco::findOrFail($id);
        foreach ($request->except('_token') as $chave => $valor){
            $dadoASerAlterado->update([$chave => $valor]);
        }
        return $dadoASerAlterado;
    }
    
}