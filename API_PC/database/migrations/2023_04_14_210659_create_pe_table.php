<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('pe', function (Blueprint $table) {
            $table->id();
            $table->boolean("esquerdo");
            $table->boolean("cicatriz");
            $table->boolean("tatuagem");
            $table->string("tipoDeTatuagem")->nullable(true);
            $table->timestamp('criado_em')->useCurrent();
            $table->timestamp('alterado_em')->useCurrent()->useCurrentOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pe');
    }
};
