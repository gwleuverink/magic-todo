<?php

namespace Tests;

use Illuminate\Support\Facades\View;
use Orchestra\Testbench\Concerns\WithWorkbench;
use Orchestra\Testbench\TestCase as BaseTestCase;

abstract class TestCase extends BaseTestCase
{
    use WithWorkbench;

    protected function setUp(): void
    {
        parent::setUp();

        View::addLocation(__DIR__ . '/views');
    }
}
