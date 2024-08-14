<?php

namespace Leuverink\Dotoo;

use Illuminate\Foundation\Http\Events\RequestHandled;

class InjectAssets
{
    /** Injects a inline style tag containing Dotoo's CSS inside every full-page response */
    public function __invoke(RequestHandled $handled)
    {
        // No need to inject anything when Dotoo is disabled
        if (! config('dotoo.enabled')) {
            return;
        }

        if (! $handled->response->isSuccessful()) {
            return;
        }

        $html = $handled->response->getContent();

        // Skip if request doesn't return a full page
        if (! str_contains($html, '</html>')) {
            return;
        }

        // Skip if core was included before
        if (str_contains($html, '<!--[DOTOO-ASSETS]-->')) {
            return;
        }

        // Keep a copy of the original response
        $originalContent = $handled->response->original;

        // Inject the assets in the response
        $js = file_get_contents(__DIR__ . '/../build/dotoo.js');
        $css = file_get_contents(__DIR__ . '/../build/dotoo.css');

        $handled->response->setContent(
            $this->injectAssets($html, <<< HTML
            <!--[DOTOO-ASSETS]-->
            <script type="module">{$js}</script>
            <style>{$css}</style>
            <!--[ENDDOTOO]-->
            HTML)
        );

        $handled->response->original = $originalContent;
    }

    /** Injects Dotoo assets into given html string (taken from Livewire's injection mechanism) */
    protected function injectAssets(string $html, string $core): string
    {
        $html = str($html);

        if ($html->test('/<\s*\/\s*head\s*>/i')) {
            return $html
                ->replaceMatches('/(<\s*\\s*head\s*>)/i', '$1' . $core)
                ->toString();
        }

        return $html
            ->replaceMatches('/(<\s*html(?:\s[^>])*>)/i', '$1' . $core)
            ->toString();
    }
}
