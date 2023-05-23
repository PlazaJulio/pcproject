<?php

namespace App\Http\Controllers;
use Illuminate\Http\Response;
use Illuminate\Http\Request;
use App\Models\Criminoso;

use Exception;

class CriminosoController extends Controller
{
    
    public function __construct()
    {
        //
    }
    public function mostrarPorId($id)
    {
        return Criminoso::findOrFail($id);
    }

    public function mostrarTodos()
    {
        return Criminoso::all();
    }

    public function inserir(Request $request)
    {   
        try{
            return Criminoso::create([
                "nome" => $request->nome,
                "alcunha" => $request->alcunha,
                "telefone" => $request->telefone,
                "pai" => $request->pai,
                "mae" => $request->mae,
                "data_de_nascimento" => $request->data_de_nascimento,
                "obito" => $request->obito,
                "foragido" => $request->foragido,
                "rg" => $request->rg,
                "cpf" => $request->cpf,
                "naturalidade" => $request->naturalidade,
                "nacionalidade" => $request->nacionalidade,
                "local_de_trabalho" => $request->local_de_trabalho,
                "profissao" => $request->profissao,
                "estado_civil_id" => $request->estado_civil_id,
                "grau_de_escolaridade_id" => $request->grau_de_escolaridade_id,
                "genero_id" => $request->genero_id,
                "endereco_id" => $request->endereco_id,
                "aparencia_id" => $request->aparencia_id,
                "excluido" => false,
                "usuario_id" => $request->usuario_id
                
            ]);
        }catch(Exception){
            return response("Requisição feita de maneira incorreta", 400);
        }
    }

    public function deletar($id)
    {
        $dadoExcluido = Criminoso::findOrFail($id);
        $dadoExcluido->delete();
        return $dadoExcluido;
    }

    public function alterar($id, Request $request)
    {
        $dadoASerAlterado = Criminoso::findOrFail($id);
        foreach ($request->except('_token') as $chave => $valor){
            $dadoASerAlterado->update([$chave => $valor]);
        }
        return $dadoASerAlterado;
    }
    
}

