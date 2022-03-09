<template>
  <div class="row">
    <basic />
    <text_ />
    <badge />
    <badgep />
  </div>
</template>

<script>
import Basic from "./basic.vue";
import Text_ from "./text.vue";
import Badge from "./badge.vue";
import Badgep from "./badge_p.vue";


export default {
  components: {
    Basic,
    Text_,
    Badge,
    Badgep
  },
};
</script>
 