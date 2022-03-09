<template>
  <b-row>
    <b-col cols="12">
      <b-card header="code highlight">
        <!-- two div wrapper is important for small device overflow -->
        <div style="max-width: 100%; overflow-x: scroll" class="m-2 mt-3">
          <div style="min-width: 800px">
            <prism-editor
              class="pt-3 pb-4"
              data-prismjs-copy="Copy the JavaScript snippet!"
              v-model="code"
              :highlight="highlighter"
              line-numbers
              readonly
            ></prism-editor>
          </div>
        </div>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
import { PrismEditor } from "vue-prism-editor";
import { highlight, languages } from "prismjs/components/prism-core";

import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";

import { BCard, BCol, BRow } from "bootstrap-vue";

export default {
  components: {
    BRow,
    BCard,
    BCol,
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

<style>
</style>
