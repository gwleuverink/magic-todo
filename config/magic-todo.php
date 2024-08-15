<?php

return [
    'enabled' => env('MAGIC_TODO_ENABLED', app()->isLocal()),
    'open' => '|TODO',
    'close' => '|ENDTODO',
];
