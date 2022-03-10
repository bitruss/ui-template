<template>
  <div class="row"> 
    <icon />
    <basic />
    <lazy />
  </div>
</template>

<script>
import Basic from "./basic.vue";
import Icon from "./icon.vue";
import Lazy from "./lazy.vue";


export default {
  components: {
    Basic,
    Icon,
    Lazy
  },
};
</script>