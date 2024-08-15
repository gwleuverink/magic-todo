<?php

namespace Leuverink\MagicTodo;

use Illuminate\Support\Facades\Blade;
use Illuminate\Support\Facades\Event;
use Illuminate\Foundation\Http\Events\RequestHandled;
use Illuminate\Support\ServiceProvider as BaseServiceProvider;

class ServiceProvider extends BaseServiceProvider
{
    public function boot()
    {
        $this->publishes([
            __DIR__ . '/../config/magic-todo.php' => base_path('config/magic-todo.php'),
        ], 'magic-todo');

        $this->loadViewsFrom(
            __DIR__ . '/../resources', 'magic-todo'
        );

        $this->injectAssets();
    }

    public function register()
    {
        $this->mergeConfigFrom(
            __DIR__ . '/../config/magic-todo.php', 'magic-todo'
        );

        $this->registerBladePrecompilers();
    }

    protected function injectAssets()
    {
        Event::listen(
            RequestHandled::class,
            InjectAssets::class,
        );
    }

    protected function registerBladePrecompilers()
    {
        // The BladeCompiler compiles component tags & comments before any precompilers run.
        // Because of this we can't use the precompiler or extend functionality.
        // We hook into prepareStringsForCompilationUsing instead.

        Blade::prepareStringsForCompilationUsing(function ($view) {
            return CommentsPrecompiler::execute($view);
        });
    }
}
