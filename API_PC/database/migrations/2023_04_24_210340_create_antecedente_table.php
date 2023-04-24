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
        Schema::create('antecedente', function (Blueprint $table) {
            $table->id();
            $table->string('local');
            $table->date('data');
            $table->time('hora');
            $table->string('descricao');

            $table->unsignedBigInteger('acusacao_id');
            $table->foreign('acusacao_id')->references('id')->on('acusacao');
            $table->unsignedBigInteger('criminoso_id');
            $table->foreign('criminoso_id')->references('id')->on('criminoso');

            $table->timestamp('criado_em')->useCurrent();
            $table->timestamp('alterado_em')->useCurrentOnUpdate()->nullable(true);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('antecedente');
    }
};
