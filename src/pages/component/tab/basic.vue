<template>
<div class="col-12">
    <b-card class="p-3 mb-4">
        <b-tabs >
            <b-tab active title="Home">
                <!-- two div wrapper is important for small device overflow -->
                <div style="max-width: 100%; overflow-x: scroll">
                    <div style="min-width: 800px">
                        <prism-editor class="pt-3 pb-4" data-prismjs-copy="Copy the JavaScript snippet!" v-model="code" :highlight="highlighter" line-numbers readonly></prism-editor>
                    </div>
                </div>
            </b-tab>
            <b-tab title="Service">
                <b-card-text>
                    Biscuit macaroon sugar plum sesame snaps oat cake halvah fruitcake
                    pudding cotton candy. Cheesecake tart wafer soufflé. Chocolate
                    marzipan donut pie soufflé dragée cheesecake. Gummi bears dessert
                    croissant chocolate jujubes fruitcake. Pie cupcake halvah.
                </b-card-text>
                <b-card-text>Tiramisu carrot cake marzipan sugar plum powder marzipan sugar
                    plum bonbon powder. Macaroon jujubes ice cream sugar plum lollipop
                    wafer caramels. Cheesecake chocolate tart cake gingerbread
                    fruitcake cake candy jelly-o. Candy cookie lollipop. Wafer lemon
                    drops chocolate cake gummi bears.</b-card-text>
            </b-tab>
            <b-tab title="Disabled" disabled>
                <b-card-text> Carrot cake dragée chocolate. </b-card-text>
            </b-tab>
            <b-tab title="Account">
                <b-card-text>
                    Chocolate croissant cupcake croissant jelly donut. Cheesecake
                    toffee apple pie chocolate bar biscuit tart croissant. Lemon drops
                    danish cookie. Oat cake macaroon icing tart lollipop cookie sweet
                    bear claw.
                </b-card-text>
                <b-card-text>
                    Carrot cake dragée chocolate. Lemon drops ice cream wafer gummies
                    dragée. Chocolate bar liquorice cheesecake cookie chupa chups
                    marshmallow oat cake biscuit. Dessert toffee fruitcake ice cream
                    powder tootsie roll cake.
                </b-card-text>
            </b-tab>
        </b-tabs>
    </b-card>
</div>
</template>

<script>
import {
    BRow,
    BCol,
    BFormGroup,
    BCardText,
    BCard,
    BTab,
    BTabs,
} from "bootstrap-vue";

import {
    PrismEditor
} from "vue-prism-editor";
import {
    highlight,
    languages
} from "prismjs/components/prism-core";

import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";

export default {
    components: {
        BRow,
        BCol,
        BFormGroup,
        BCardText,
        BCard,
        BTab,
        BTabs,
        PrismEditor,
    },
    data: () => ({
        code: `var x, y, z;  // Declare 3 variables
x = 5;    // Assign the value 5 to x
y = 6;    // Assign the value 6 to y
z = x + y;  // Assign the sum of x and y to z

document.getElementById("demo").innerHTML =
"The value of z is " + z + ".";`,
    }),
    methods: {
        highlighter(code) {
            return highlight(code, languages.js);
        },
    },
};
</script>
