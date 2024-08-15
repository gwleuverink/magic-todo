<?php

return [
    'enabled' => env('DOTOO_ENABLED', app()->isLocal()),
    'open' => '|TODO',
    'close' => '|ENDTODO',
];
