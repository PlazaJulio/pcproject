<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('criminoso', function (Blueprint $table) {
            $table->id();
            $table->string('nome');
            $table->string('alcunha');
            $table->string('telefone');
            $table->string('pai');
            $table->string('mae');
            $table->date('data_de_nascimento');
            $table->boolean('obito');
            $table->boolean('foragido');
            $table->string('rg')->unique();
            $table->string('cpf')->unique();
            $table->string('naturalidade');
            $table->string('nacionalidade');
            $table->string('local_de_trabalho');
            $table->string('profissao');
            $table->string('estado_civil')->nullable('true');
            $table->string('grau_de_escolaridade')->nullable('true');
            $table->string('genero');
            $table->float('altura');
            $table->string('etnia');
            $table->string('porte_fisico');
            $table->string('cor_dos_olhos');
            $table->string('cor_da_pele');
            $table->string('cor_do_cabelo');
            $table->string('tipo_de_cabelo');
            $table->text('foto_perfil_esquerdo');
            $table->text('foto_perfil_direito');
            $table->text('foto_frente');
            $table->boolean('excluido');
            
            $table->unsignedBigInteger('endereco_id');
            $table->foreign('endereco_id')->references('id')->on('endereco');

            $table->unsignedBigInteger('usuario_id');
            $table->foreign('usuario_id')->references('id')->on('usuario');

            $table->timestamp('criado_em')->useCurrent();
            $table->timestamp('alterado_em')->useCurrentOnUpdate()->nullable(true);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('criminoso');
    }
};
