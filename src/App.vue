<template>
    <div id="app">
        <router-view></router-view>
        <foot></foot>
    </div>
</template>

<script>
    import foot from './components/public/footer'

    export default {
        name: 'App',
        components: {
            foot
        },
    }
</script>

<style lang="scss">
    html, body, div, span,
    applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, font, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    dd, dl, dt, li, ol, ul,
    fieldset, form, label, legend, select,
    table, caption, tbody, tfoot, thead, tr, th, td, input, button, i, span {
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
    }

    ul, li {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    .clearfix:after {
        content: '';
        display: block;
        clear: both;
    }

    .clearfix {
        zoom: 1;
    }


</style>
