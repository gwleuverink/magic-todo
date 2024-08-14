<?php

namespace Leuverink\Dotoo;

use Illuminate\Support\Facades\Event;
use Illuminate\Foundation\Http\Events\RequestHandled;
use Illuminate\Support\ServiceProvider as BaseServiceProvider;

class ServiceProvider extends BaseServiceProvider
{
    public function boot()
    {
        $this->publishes([
            __DIR__ . '/../config/dotoo.php' => base_path('config/dotoo.php'),
        ], 'dotoo');

        $this->loadViewsFrom(
            __DIR__ . '/../resources', 'dotoo'
        );

        $this->injectAssets();
    }

    public function register()
    {
        $this->mergeConfigFrom(
            __DIR__ . '/../config/dotoo.php', 'dotoo'
        );
    }

    protected function injectAssets()
    {
        Event::listen(
            RequestHandled::class,
            InjectAssets::class,
        );
    }
}
