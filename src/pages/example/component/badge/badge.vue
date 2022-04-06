<template>
  <div class="row">
    <basic />
    <pill />
    <icon />
    <links />
  </div>
</template>

<script>
import Basic from "./basic.vue";
import Pill from "./pill.vue"; 
import Icon from "./icon.vue"; 
import Links from "./links.vue"; 

export default {
  components: {
    Basic,
    Pill,
    Icon,
    Links
  },
};
</script>