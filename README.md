# Blade Hints

[![codestyle](https://github.com/gwleuverink/blade-hints/actions/workflows/codestyle.yml/badge.svg)](https://github.com/gwleuverink/blade-hints/actions/workflows/codestyle.yml)
[![tests](https://github.com/gwleuverink/blade-hints/actions/workflows/tests.yml/badge.svg)](https://github.com/gwleuverink/blade-hints/actions/workflows/tests.yml)

Easily spot authorization checks in Laravel

<img src="/resources/images/screenshot.jpg" alt="screenshot" width="260px" />

## Features

Mark usages of a variety of different Blade directives on the page, so you can spot missing authorization/auth/env checks

Supported directives:

- `@can`, `@cannot`, `@canany`
- `@env`, `@production`
- `@auth`, `@guest`

<!-- TODO: Display any authorization & authentication middlewares applied page (or any auth/policy check before blade renders), so you can easily spot if the current route doesn't apply appropriate guards -->

## Installation

```bash
composer require leuverink/blade-hints
```

## Configuration

```php
[
    'enabled' => env('BLADE_HINTS_ENABLED', app()->isLocal()),

    'authorization_directives' => true,
    'authorization_if_color' => '#fca5a5', // red-300
    'authorization_else_color' => '#d8b4fe', // purple-300

    'authentication_directives' => true,
    'authentication_if_color' => '#fca5a5', // red-300
    'authentication_else_color' => '#d8b4fe', // purple-300

    'environment_directives' => true,
    'environment_if_color' => '#fca5a5', // red-300

    'guest_directives' => true,
    'guest_if_color' => '#fca5a5', // red-300
]
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
