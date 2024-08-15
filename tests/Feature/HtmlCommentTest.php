<?php

use Illuminate\Support\Facades\Blade;

it('compiles HTML TODO comments', function () {
    $html = Blade::render('<!-- |TODO: Foo Bar baz -->');

    expect($html)
        ->not->toContain('<!-- TODO')
        ->toContain('<span class="dotoo-mark" data-todo="Foo Bar baz">');
});

it('compiles multiline HTML TODO comments', function () {
    $html = Blade::render(<<< 'BLADE'
    <!--
        |TODO: Foo Bar baz
        Dipsum dolor sit amet
    -->
    BLADE);

    expect($html)
        ->not->toContain('TODO')
        ->toContain(<<< 'HTML'
        <span class="dotoo-mark" data-todo="Foo Bar baz&lt;br /&gt;
            Dipsum dolor sit amet">
        HTML);
});

it('compiles empty HTML TODO comments', function () {
    $html = Blade::render('<!-- |TODO: -->');

    expect($html)
        ->not->toContain('<!-- TODO')
        ->toContain(<<< 'HTML'
        <span class="dotoo-mark" data-todo="">
        HTML);
});

it('compiles wrappped HTML TODO comments', function () {
    $html = Blade::render(<<< 'BLADE'
    <!-- |TODO: Fooz -->
      this should be wrapped
    <!-- |ENDTODO -->
    BLADE);

    expect($html)
        ->not->toContain('<!-- TODO')
        ->toContain(<<< 'HTML'
        <span class="dotoo" data-todo="Fooz">
                    this should be wrapped
                </span>
        HTML);
});

it('keeps surrounding html intact', function () {
    $html = Blade::render(<<< 'BLADE'
    Foozbal
    <!-- |TODO: -->
    Guacamole
    BLADE);

    expect($html)
        ->toContain(<<< 'HTML'
        Foozbal
        <span class="dotoo-mark" data-todo="">
        HTML)
        ->toContain(<<< 'HTML'
                </span>
            Guacamole
        HTML);
});

it('trims : from tooltip', function () {
    $html = Blade::render('<!-- |TODO:: Foo Bar baz : -->');

    expect($html)
        ->not->toContain('<!-- TODO')
        ->toContain('<span class="dotoo-mark" data-todo="Foo Bar baz">');
});
