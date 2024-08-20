<?php

namespace Leuverink\MagicTodo;

use Leuverink\AssetInjector\Contracts\AssetInjector;

class InjectAssets implements AssetInjector
{
    public function identifier(): string
    {
        return 'MAGIC_TODO';
    }

    public function enabled(): bool
    {
        return true;
    }

    /** Injects a inline style tag containing MagicTodo's CSS inside every full-page response */
    public function inject(): string
    {
        // Inject the assets in the response
        $js = file_get_contents(__DIR__ . '/../build/magic-todo.js');
        $css = file_get_contents(__DIR__ . '/../build/magic-todo.css');

        return <<< HTML
        <script type="module">{$js}</script>
        <style>{$css}</style>
        HTML;
    }
}
