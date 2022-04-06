<template>
  <div class="row">
    <basic />
    <actions />
    <divider />
  </div>
</template>

<script>
import Basic from "./basic.vue";
import Actions from "./actions.vue";
import Divider from "./divider.vue";


export default {
  components: {
    Basic,
    Actions,
    Divider
  },
};
</script>