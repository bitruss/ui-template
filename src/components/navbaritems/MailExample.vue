<template>
  <b-nav-item-dropdown variant="link" right>
    <template #button-content>
      <feather-icon size="21" icon="MailIcon" />
    </template>

    <b-dropdown-item>
      <span class="ml-50">Email from Google</span>
    </b-dropdown-item>
    <b-dropdown-item>
      <span class="ml-50">Email from AWS</span>
    </b-dropdown-item>
  </b-nav-item-dropdown>
</template>

<script>
import { BNavItemDropdown, BDropdownItem } from "bootstrap-vue";

export default {
  components: {
    BNavItemDropdown,
    BDropdownItem,
  },
};
</script>

