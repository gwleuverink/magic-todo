# Magic todo

[![codestyle](https://github.com/gwleuverink/magic-todo/actions/workflows/codestyle.yml/badge.svg)](https://github.com/gwleuverink/magic-todo/actions/workflows/codestyle.yml)
[![tests](https://github.com/gwleuverink/magic-todo/actions/workflows/tests.yml/badge.svg)](https://github.com/gwleuverink/magic-todo/actions/workflows/tests.yml)

Magically turn HTML comments into interactive hints in your Laravel Blade frontend.

## Installation

```bash
composer require leuverink/magic-todo
```

## Usage

Magic TODO's work just like any other TODO comment in a Blade file. By default you opt in to rendering the component by prepending a pipe `|` symbol to your comment.

```html
<!-- |TODO: This button is not yet implemented -->
<button class="px-2 py-1 border border-gray-600 border-solid rounded">
  Some action
</button>
```

<img src="/resources/images/inline-comment-result.jpg" alt="inline-comment-result" width="540px" />

You may also wrap markup inside of a TODO in order to emphasize a block.

```html
<!-- |TODO: This button is not yet implemented -->
<button class="px-2 py-1 border border-gray-600 border-solid rounded">
  Some action
</button>
<!-- |ENDTODO -->
```

<img src="/resources/images/block-comment-result.jpg" alt="inline-comment-result" width="540px" />

Blade comments are also supported and work the same:

```blade
{{-- |TODO: This button is not yet implemented --}}
```

### Modifying the TODO keywords

By default magic todo's are opt in. Meaning you'll have to append a pipe `|` token. You are free to modify this behaviour any way you like by by publishing the package config and edit the `magic-todo.open` & `magic-todo.close` keywords.

If you change `magic-todo.open` to `TODO`, Every TODO comment in your template will be highlighted.

### Usage without comments

Alternatively, you may also directly use the highlight component in your markup. This way you get full control over attributes and slots. Check it out:

```blade
<!-- Render a questionmark with tooltip -->
<x-magic-todo::highlight todo="Hello World" />

<!-- Wrap an element using the main slot -->
<x-magic-todo::highlight todo="Hello World">
    Foo bar
</x-magic-todo::highlight>

<x-magic-todo::highlight>
    <x-slot:todo>
        <div>
            Do anything you like in here
        </div>
    </x-slot:todo>
</x-magic-todo::highlight>
```

## Configuration

```php
[
    'enabled' => env('MAGIC_TODO_ENABLED', app()->isLocal()),
    'open' => 'TODO:',
    'close' => 'ENDTODO',
];
```

## Development

```bash
composer lint # run all linters
composer fix # run all fixers

composer analyze # run static analysis
composer baseline # generate static analysis baseline

composer test # run test suite
composer build # bundle all assets
```

## Ideas

Here are some other features I have in mind if there is any interest in this package:

- [ ] List all todo's via artisan command (both in comments & direct component usage)
- [ ] Add syntax for only rendering in certain environments (e.g. only dev / dev + staging)
- [ ] Support NOTE & FIXME comments with different styling
- [ ] Add better theme/styling support
