<?php

// NOTE: This functionality has been extracted into a package
// These tests serve for integration testing purposes
// leuverink/asset-injector

it('injects assets into head tag', function () {
    Route::get('test-inject-in-response', fn () => '<html><head></head></html>');

    $this->get('test-inject-in-response')
        ->assertOk()
        ->assertSee('<!--[MAGIC_TODO]-->', false);
});

it('injects assets into html body when no head tag is present', function () {
    Route::get('test-inject-in-response', fn () => '<html></html>');

    $this->get('test-inject-in-response')
        ->assertOk()
        ->assertSee('<!--[MAGIC_TODO]-->', false);
});

it('doesnt inject assets into responses without a closing html tag', function () {
    Route::get('test-inject-in-response', fn () => 'OK');

    $this->get('test-inject-in-response')
        ->assertOk()
        ->assertDontSee('<!--[MAGIC_TODO]-->', false);
});
