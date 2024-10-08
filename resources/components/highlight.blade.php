@props([
    'todo' => ''
])

@if (config('magic-todo.enabled'))
    @if ($slot->isNotEmpty())
        <span {{ $attributes->merge([
            'class' => 'magic-todo',
            'data-todo' => addslashes(nl2br($todo))
        ]) }}>
            {{ $slot }}
        </span>
    @else
        <span {{ $attributes->merge([
            'class' => 'magic-todo-mark',
            'data-todo' => addslashes(nl2br($todo))
        ]) }}>
            {{-- https://buninux.com/freebies --}}
            <svg width="100%" height="100%" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 12H9v-.148c0-.876.306-1.499 1-1.852.385-.195 1-.568 1-1a1.001 1.001 0 00-2 0H7c0-1.654 1.346-3 3-3s3 1 3 3-2 2.165-2 3zm-2 3h2v-2H9v2z" fill="currentColor"/>
                <path d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1116 0 8 8 0 01-16 0z" fill="currentColor"/>
            </svg>
        </span>
    @endif
@else
    {{ $slot }}
@endif
