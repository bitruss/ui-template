<template>
  <div class="row">
    <basic />
    <prediction />
    <area_ />
  </div>
</template>

<script>
import Basic from "./basic.vue";
import Prediction from "./prediction";
import Area_ from "./area";


export default {
  components: {
    Basic,
    Prediction,
    Area_
  },
};
</script>