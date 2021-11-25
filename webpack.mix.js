const mix = require('laravel-mix')

mix.sass('style.scss', './')
    .options({
        processCssUrls: false,
        postCss: [
            require('tailwindcss'),
        ]
    });