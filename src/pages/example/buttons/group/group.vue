<template>
  <div class="row">
      <basic/>
      <size/>
      <toolbar/>
  </div>
</template>

<script>
 
import Basic from "./basic.vue";
import Size from "./size.vue";
import Toolbar from "./toolbar.vue";

export default {
  components: {
      Basic,
      Size,
      Toolbar
  },
};
</script>