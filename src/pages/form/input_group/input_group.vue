<template>
  <div class="row">
    <basic />
    <size />
    <icon />
    <buttons />
    <dropdown />
  </div>
</template>

<script>
import Basic from "./basic.vue";
import Size from "./size.vue";
import Buttons from "./buttons.vue";
import Dropdown from "./dropdown.vue";
import Icon from "./icon.vue";

export default {
  components: {
    Basic,
    Size,
    Buttons,
    Dropdown,
    Icon,
  },
};
</script>