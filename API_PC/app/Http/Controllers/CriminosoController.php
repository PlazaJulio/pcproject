<?php

namespace App\Http\Controllers;
use Illuminate\Http\Response;
use Illuminate\Http\Request;
use App\Models\Criminoso;
use App\Helpers\Converter;

use Exception;

class CriminosoController extends Controller
{
    
    public function __construct()
    {
        //
    }

    private static function jaFezJoinComTabelaAparencia(&$jaFezJoin, $criminosos){
        if(!$jaFezJoin){
            $criminosos->join("aparencia", "criminoso.aparencia_id", "=", "aparencia.id");
            $jaFezJoin = true;
        }
    }
    public function mostrarDadosComFiltroDinamico(Request $request)
    {
        $criminosos = Criminoso::query();
        $jaFezJoin = false;
        foreach ($request->except('_token') as $chave => $valor){
            if($chave == "usuario_id"){
                continue;
            }
            else if($chave == "excluido"){
                continue;
            }
            else if($chave == "nome" || $chave == "alcunha" || $chave == "pai" || $chave == "mae"){
                $criminosos->where($chave, "LIKE", "%". $valor ."%");
            }
            else if ($chave == "idade_minima" || $chave == "idade_maxima"){
                $this->jaFezJoinComTabelaAparencia($jaFezJoin, $criminosos);
                if($request->idade_minima != null && $request->idade_maxima != null){
                    $maiorData = Converter::idadeEmDataDeNascimentoMax($request->idade_minima);
                    $menorData = Converter::idadeEmDataDeNascimentoMin($request->idade_maxima);
                    $criminosos = $criminosos->whereBetween('data_de_nascimento', [$menorData, $maiorData]);
                }
                continue;
            }
            else if ($chave == "etnia") { 
                $this->jaFezJoinComTabelaAparencia($jaFezJoin, $criminosos);
                $criminosos->where("aparencia." . $chave, $valor);
            } 
            else if ($chave == "altura_min" || $chave == "altura_max") {
                $this->jaFezJoinComTabelaAparencia($jaFezJoin, $criminosos);
                if ($request->altura_max != null && $request->altura_min != null) {
                    $criminosos->whereBetween("aparencia.altura", [$request->altura_min, $request->altura_max]);
                }
                continue;
            }
            else if ($chave == "cor_id" || $chave == "cor_do_cabelo_id" || $chave == "tipo_de_cabelo_id" ||
            $chave == "cor_dos_olhos_id" || $chave == "porte_fisico_id"){
                $this->jaFezJoinComTabelaAparencia($jaFezJoin, $criminosos);
                $criminosos->where("aparencia.".$chave, $valor);
            }
            else{
                $criminosos->where($chave, $valor);
            }
        }
        $criminosos->where("criminoso.excluido", false);
        return $criminosos->get();
    }

    public function mostrarPorId($id)
    {
        return Criminoso::where('id', $id)->where('excluido', false)->firstOr(
            function() {
                return response("", 404);
        });
    }

    public function mostrarTodos()
    {
        return Criminoso::all()->where('excluido', false);
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
                "estado_civil" => $request->estado_civil,
                "grau_de_escolaridade" => $request->grau_de_escolaridade,
                "genero" => $request->genero,
                "altura" => $request->altura,
                "etnia" => $request->etnia,
                "porte_fisico" => $request->porte_fisico,
                "cor_dos_olhos" => $request->cor_dos_olhos,
                "cor_da_pele" => $request->cor_da_pele,
                "cor_do_cabelo" => $request->cor_do_cabelo,
                "tipo_de_cabelo" => $request->tipo_de_cabelo,
                "foto_perfil_esquerdo" => $request->foto_perfil_esquerdo,
                "foto_perfil_direito" => $request->foto_perfil_direito,
                "foto_frente" => $request->foto_frente,
                "endereco_id" => $request->endereco_id,
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
            $dadoExcluido = Criminoso::where('excluido', false)->findOrFail($id);
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
           $dadoASerAlterado = Criminoso::where('excluido', false)->findOrFail($id); //Alteracao
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

