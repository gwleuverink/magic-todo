# Magic todo

[![codestyle](https://github.com/gwleuverink/magic-todo/actions/workflows/codestyle.yml/badge.svg)](https://github.com/gwleuverink/magic-todo/actions/workflows/codestyle.yml)
[![tests](https://github.com/gwleuverink/magic-todo/actions/workflows/tests.yml/badge.svg)](https://github.com/gwleuverink/magic-todo/actions/workflows/tests.yml)

Magically turn HTML comments into interactive hints in your Laravel Blade frontend.

## Installation

```bash
composer require leuverink/magic-todo
```

## Usage

Magic Todo turns your standard TODO comments in Blade files into interactive elements. By default, you can activate this feature by adding a pipe `|` symbol at the beginning of your comment.

```html
<!-- |TODO: This button is not yet implemented -->
<button class="px-2 py-1 border border-gray-600 border-solid rounded">
  Some action
</button>
```

<img src="/resources/images/inline-comment-result.jpg" alt="inline-comment-result" width="540px" />

You can also highlight entire blocks of code:

```html
<!-- |TODO: This button is not yet implemented -->
<button class="px-2 py-1 border border-gray-600 border-solid rounded">
  Some action
</button>
<!-- |ENDTODO -->
```

<img src="/resources/images/block-comment-result.jpg" alt="inline-comment-result" width="540px" />

Blade comments are supported as well:

```blade
{{-- |TODO: This button is not yet implemented --}}
```

### Modifying TODO Keywords

You can modify the default behavior by publishing the package config and editing the `magic-todo.open` & `magic-todo.close` keywords. For instance, changing `magic-todo.open` to `TODO` will highlight every todo comment in your templates.

If you change `magic-todo.open` to `TODO`, Every TODO comment in your template will be highlighted.

### Direct Component Usage

For more control, you can use the highlight component directly in your markup:

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

- [ ] Artisan command to list all todos (both in comments & direct component usage)
- [ ] Syntax for rendering in specific environments (e.g., only dev / dev + staging)
- [ ] Support for NOTE & FIXME comments with different styling
- [ ] Replace @mentions with clickable GitHub avatars
- [ ] Add better theme/styling support

## License

This package is open-source software licensed under the MIT license.
