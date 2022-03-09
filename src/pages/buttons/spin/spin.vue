<template>
  <div class="row">
      <basic/>
      <max/>
      <color/>
      <inline/> 
  </div>
</template>

<script>
 
import Basic from "./basic.vue";
import Max from "./max.vue";
import Inline from "./inline.vue";
import Color from "./color.vue";
 

export default {
  components: {
      Basic,
      Max,
      Inline,
      Color
  },
};
</script>