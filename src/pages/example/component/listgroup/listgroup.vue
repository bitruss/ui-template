<template>
  <div class="row">
    <basic />
    <icon/>
    <badge/>
    <links/>
    <horizontal />
    <custom />
  </div>
</template>

<script>
import Basic from "./basic.vue";
import Icon from "./icon.vue";
import Badge from "./badge.vue";
import Links from "./links.vue";
import Horizontal from "./horizontal.vue";
import Custom from "./custom.vue";

export default {
  components: {
    Basic,
    Icon,
    Badge,
    Links,
    Horizontal,
    Custom
  },
};
</script>