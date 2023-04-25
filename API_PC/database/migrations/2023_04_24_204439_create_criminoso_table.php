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
            $table->string('rg');
            $table->string('cpf');
            $table->string('naturalidade');
            $table->string('nacionalidade');

            $table->unsignedBigInteger('estado_civil_id');
            $table->foreign('estado_civil_id')->references('id')->on('estado_civil');
            $table->unsignedBigInteger('grau_de_escolaridade_id');
            $table->foreign('grau_de_escolaridade_id')->references('id')->on('grau_de_escolaridade');

            $table->string('local_de_trabalho');
            $table->string('profissao');

            $table->unsignedBigInteger('genero_id');
            $table->foreign('genero_id')->references('id')->on('genero');
            $table->unsignedBigInteger('endereco_id');
            $table->foreign('endereco_id')->references('id')->on('endereco');
            $table->unsignedBigInteger('aparencia_id');
            $table->foreign('aparencia_id')->references('id')->on('aparencia');
            
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