<?php

use Illuminate\Support\Facades\Blade;

it('compiles Blade TODO comments', function () {
    $html = Blade::render('{{-- |TODO: Foo Bar baz --}}');

    expect($html)
        ->not->toContain('{{-- TODO')
        ->toContain('<span class="magic-todo-mark" data-todo="Foo Bar baz">');
});

it('compiles multiline Blade TODO comments', function () {
    $html = Blade::render(<<< 'BLADE'
    {{--
        |TODO: Foo Bar baz
        Dipsum dolor sit amet
    --}}
    BLADE);

    expect($html)
        ->not->toContain('{{-- TODO')
        ->toContain(<<< 'HTML'
        <span class="magic-todo-mark" data-todo="Foo Bar baz&lt;br /&gt;
            Dipsum dolor sit amet">
        HTML);
});

it('compiles quotes in Blade TODO comments', function () {
    $html = Blade::render(<<< 'BLADE'
    {{-- |TODO: Foo "Bar" baz --}}
    BLADE);

    expect($html)
        ->not->toContain('{{-- TODO')
        ->toContain('<span class="magic-todo-mark" data-todo="Foo &amp;quot;Bar&amp;quot; baz">');
});

it('compiles empty Blade TODO comments', function () {
    $html = Blade::render(<<< 'BLADE'
    {{-- |TODO: --}}
    BLADE);

    expect($html)
        ->not->toContain('{{-- TODO')
        ->toContain(<<< 'HTML'
        <span class="magic-todo-mark" data-todo="">
        HTML);
});

it('compiles wrappped Blade TODO comments', function () {
    $html = Blade::render(<<< 'BLADE'
    {{-- |TODO: Fooz --}}
      this should be wrapped
    {{-- |ENDTODO --}}
    BLADE);

    expect($html)
        ->not->toContain('{{-- TODO')
        ->toContain(<<< 'HTML'
        <span class="magic-todo" data-todo="Fooz">
                    this should be wrapped
                </span>
        HTML);
});

it('keeps surrounding html intact', function () {
    $html = Blade::render(<<< 'BLADE'
    Foozbal
    {{-- |TODO: --}}
    Guacamole
    BLADE);

    expect($html)
        ->toContain(<<< 'HTML'
        Foozbal
        <span class="magic-todo-mark" data-todo="">
        HTML)
        ->toContain(<<< 'HTML'
                </span>
            Guacamole
        HTML);
});

it('trims : from tooltip', function () {
    $html = Blade::render('{{-- |TODO:: Foo Bar baz : --}}');

    expect($html)
        ->not->toContain('{{-- TODO')
        ->toContain('<span class="magic-todo-mark" data-todo="Foo Bar baz">');
});
