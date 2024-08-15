<?php

namespace Leuverink\Dotoo;

class HtmlCommentsPrecompiler
{
    public static function execute(string $view): string
    {
        // $view = static::compileWrappedHtmlTodos($view);
        // $view = static::compileSingleHtmlTodos($view);

        return $view;
    }

    protected static function compileSingleHtmlTodos($view) {}
}
