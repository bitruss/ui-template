<template>
  <div class="row">
    <basic />
    <icon />
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