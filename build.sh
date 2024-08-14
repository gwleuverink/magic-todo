#!/usr/bin/env sh

ESBUILD="./node_modules/.bin/esbuild"

npm ci

$ESBUILD ./resources/dotoo.js --outdir=./build/ --target=chrome58,firefox57,safari11,edge16 --format=esm --bundle --minify
