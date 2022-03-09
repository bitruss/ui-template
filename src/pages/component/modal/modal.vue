<template>
  <div class="row">
    <basic />
    <size />
    <color />
    <footers />
    <confirm />
    <forms />
  </div>
</template>

<script>
import Basic from "./basic.vue";
import Size from "./size.vue";
import Color from "./color.vue";
import Footers from "./footers.vue";
import Confirm from "./confirm.vue";
import Forms from "./forms.vue";


export default {
  components: {
    Basic,
    Size,
    Color,
    Footers,
    Confirm,
    Forms
  },
};
</script>