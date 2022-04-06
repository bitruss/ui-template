<template>
  <div class="col-12">
    <h5 class="mb-3 mt-5">#Horizontal</h5>
    <b-list-group horizontal="md">
      <b-list-group-item active>Chocolate cake</b-list-group-item>
      <b-list-group-item>Cookie pie</b-list-group-item>
      <b-list-group-item>Cheesecake</b-list-group-item>
      <b-list-group-item>Cotton candy</b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import { BListGroup, BListGroupItem } from "bootstrap-vue";

export default {
  components: {
    BListGroup,
    BListGroupItem,
  },
};
</script>
