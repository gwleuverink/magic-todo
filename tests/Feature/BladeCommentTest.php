<?php

use Illuminate\Support\Facades\Blade;

it('compiles blade TODO comments', function () {
    $html = Blade::render(<<< 'BLADE'
    sneeze
    {{-- TODO: Foo Bar baz --}}
    breeze
    BLADE);

    expect($html)
        ->not->toContain('{{-- TODO')
        ->toContain('<span class="dotoo-mark" data-todo="Foo Bar baz">');
});

it('compiles multiline blade TODO comments', function () {
    $html = Blade::render(<<< 'BLADE'
    sneeze
    {{--
        TODO: Foo Bar baz
        Dipsum dolor sit amet
    --}}
    breeze
    BLADE);

    expect($html)
        ->not->toContain('{{-- TODO')
        ->toContain(<<< 'HTML'
        <span class="dotoo-mark" data-todo="Foo Bar baz&lt;br /&gt;
            Dipsum dolor sit amet">
        HTML);
});
