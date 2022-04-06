
<template>
<div class="row">
   <basic/>
   <color/>
   <size />
</div>
</template>

<script>
import Basic from "./basic.vue";
import Color from "./color.vue";
import Size from "./size.vue";

export default {
  components: {
   Basic,
   Color,
   Size
  }
};
</script>