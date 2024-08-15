# Dotoo

[![codestyle](https://github.com/gwleuverink/dotoo/actions/workflows/codestyle.yml/badge.svg)](https://github.com/gwleuverink/dotoo/actions/workflows/codestyle.yml)
[![tests](https://github.com/gwleuverink/dotoo/actions/workflows/tests.yml/badge.svg)](https://github.com/gwleuverink/dotoo/actions/workflows/tests.yml)

Magically turn HTML & Blade comments into visual hints on your frontend

## Installation

```bash
composer require leuverink/dotoo
```

## Features

- Supports both HTML & Blade comments
- TODO mark for single & multiline comments
- Wrap elements inside a block level todo mark
- Customize open & close keywords

<img src="/resources/images/inline-comment.jpg" alt="inline-comment" width="540px" />
<img src="/resources/images/inline-comment-result.jpg" alt="inline-comment-result" width="540px" />

<br />

<img src="/resources/images/block-comment.jpg" alt="inline-comment" width="540px" />
<img src="/resources/images/block-comment-result.jpg" alt="inline-comment-result" width="540px" />

Alternatively, you may also directly use the highlight component in your markup. This way you get full control over attributes and slots. Check it out:

```blade
<!-- Render a questionmark with tooltip -->
<x-dotoo::highlight todo="Hello World" />

<!-- Wrap an element using the main slot -->
<x-dotoo::highlight todo="Hello World">
    Foo bar
</x-dotoo::highlight>
```

## Configuration

```php
[
    'enabled' => env('DOTOO_ENABLED', app()->isLocal()),
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
