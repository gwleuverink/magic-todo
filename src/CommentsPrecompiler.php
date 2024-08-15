<?php

namespace Leuverink\Dotoo;

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
        $keyword = config('dotoo.open');
        $pattern = "/{$openComment}\s*{$keyword}(.+?){$closeComment}/s";

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
            $view = str_replace($fullComment, $dotooComponent, $view);
        }

        return $view;
    }

    protected static function compileWrappedBladeTodos($view, $openComment, $closeComment)
    {
        $openKeyword = config('dotoo.open');
        $closeKeyword = config('dotoo.close');

        // (?:{$openComment}\s*{$openKeyword}\s*.*?{$closeComment}\s*)*  # Non-capturing group to skip any previous TODO comments
        // {$openComment}\s*{$openKeyword}\s*(.*?)\s*{$closeComment}     # Capture the content of the relevant TODO comment
        // ((?:(?!<!--\s*{$openKeyword}).)*?)                            # Capture content up to ENDTODO, non-greedy
        // {$openComment}\s*{$closeKeyword}\s*{$closeComment}            # Match ENDTODO comment

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
            $todoComment = trim($match[2]);  // Just the text inside the TODO comment
            $content = trim($match[3]);  // The content between TODO and ENDTODO

            $dotooComponent = <<< BLADE
            <x-dotoo::highlight todo="{$todoComment}">
                {$content}
            </x-dotoo:highlight>
            BLADE;

            // Replace the comment Dotoo component
            $view = str_replace($todoBlock, $dotooComponent, $view);
        }

        return $view;

        // // Replace the matched content
        // $replacement = function ($matches) {
        //     $todoComment = trim($matches[1]);  // Just the text inside the TODO comment
        //     $content = trim($matches[2]);  // The content between TODO and ENDTODO

        //     return <<< BLADE
        //     <x-dotoo::highlight todo="{$todoComment}">
        //         {$content}
        //     </x-dotoo:highlight>
        //     BLADE;
        // };

        // return preg_replace_callback($pattern, $replacement, $view);
    }
}
