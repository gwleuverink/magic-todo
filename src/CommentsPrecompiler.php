<?php

namespace Leuverink\MagicTodo;

class CommentsPrecompiler
{
    public static function execute(string $view): string
    {
        $view = static::compileWrappedBladeTodos($view, '{{--', '--}}');
        $view = static::compileWrappedBladeTodos($view, '<!--', '-->');

        $view = static::compileTodosMark($view, '{{--', '--}}');
        $view = static::compileTodosMark($view, '<!--', '-->');

        return $view;
    }

    protected static function compileTodosMark($view, $openComment, $closeComment)
    {
        // Regular expression to match TODO comments
        $keyword = preg_quote(config('magic-todo.open'));
        $pattern = "/{$openComment}\s*{$keyword}(.+?){$closeComment}/s";

        // Find all matches
        preg_match_all($pattern, $view, $matches, PREG_SET_ORDER);

        // Process each match
        foreach ($matches as $match) {
            $fullComment = $match[0];  // Full comment including {{-- and --}}
            $commentBody = htmlspecialchars(self::trimColons($match[1]));  // Comment body without {{-- TODO: and --}}

            $magicTodoComponent = <<< BLADE
            <x-magic-todo::highlight todo="{$commentBody}" />
            BLADE;

            // Replace the comment MagicTodo component
            $view = str_replace($fullComment, $magicTodoComponent, $view);
        }

        return $view;
    }

    protected static function compileWrappedBladeTodos($view, $openComment, $closeComment)
    {
        $openKeyword = preg_quote(config('magic-todo.open'));
        $closeKeyword = preg_quote(config('magic-todo.close'));

        // Regular expression to match content between TODO and ENDTODO comments
        $pattern = "/
            (?:{$openComment}\s*{$openKeyword}(?:(?!{$closeKeyword}).)*{$closeComment}\s*)*  # Skip unmatched TODO comments
            ({$openComment}\s*{$openKeyword}\s*(.*?)\s*{$closeComment}                       # Capture the entire TODO comment
            ((?:(?!{$openComment}\s*{$openKeyword}).)*?)                                     # Capture content up to ENDTODO, non-greedy
            {$openComment}\s*{$closeKeyword}\s*{$closeComment})                              # Match ENDTODO comment
        /xs";

        // Find all matches
        preg_match_all($pattern, $view, $matches, PREG_SET_ORDER);

        // Process each match
        foreach ($matches as $match) {

            $todoBlock = trim($match[1]); // Everything between TODO & ENDTODO including the wrapping comments
            $todoComment = htmlspecialchars(self::trimColons($match[2]));  // Just the text inside the TODO comment
            $content = trim($match[3]);  // The content between TODO and ENDTODO

            $magicTodoComponent = <<< BLADE
            <x-magic-todo::highlight todo="{$todoComment}">
                {$content}
            </x-magic-todo:highlight>
            BLADE;

            // Replace the comment MagicTodo component
            $view = str_replace($todoBlock, $magicTodoComponent, $view);
        }

        return $view;
    }

    private static function trimColons($string)
    {
        // Trim all colons and spaces from the beginning and end of $string
        return preg_replace('/^[:\s]+|[:\s]+$/u', '', $string);
    }
}
