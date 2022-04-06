<template>
  <div class="row">
    <basic/>
    <border/>
    <round/>
    <icon/>
    <size/>
    <links/>
  </div>
</template>

<script>
import Basic from "./basic.vue";
import Border from "./border.vue";
import Round from "./round.vue";
import Icon from "./icon.vue";
import Size from "./size.vue";
import Links from "./links.vue";


export default {
  components: {
    Basic,
    Border,
    Round,
    Icon,
    Size,
    Links
  },
};
</script>