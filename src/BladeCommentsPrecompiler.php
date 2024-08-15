<?php

namespace Leuverink\Dotoo;

class BladeCommentsPrecompiler
{
    public static function execute(string $view): string
    {
        // dd($view);
        // $view = static::compileWrappedBladeTodos($view);
        $view = static::compileSingleBladeTodos($view);

        return $view;
    }

    protected static function compileSingleBladeTodos($view)
    {
        // Regular expression to match TODO comments
        $openComment = config('dotoo.open');
        $pattern = "/{{--\s*{$openComment}(.+?)--}}/s";

        // Find all matches
        preg_match_all($pattern, $view, $matches, PREG_SET_ORDER);

        // Process each match
        foreach ($matches as $match) {
            $fullComment = $match[0];  // Full comment including {{-- and --}}
            $commentBody = trim($match[1]);  // Comment body without {{-- TODO: and --}}

            $dotooComponent = <<< BLADE
            <x-dotoo::highlight todo="{$commentBody}" />
            BLADE;

            // Replace the comment Dotoo component
            $updatedComment = '<!-- TODO: [PROCESSED] ' . $commentBody . ' -->';
            $view = str_replace($fullComment, $dotooComponent, $view);
        }

        return $view;
    }
}
