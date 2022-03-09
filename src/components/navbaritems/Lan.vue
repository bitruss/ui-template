<template>
  <b-nav-item-dropdown variant="link"   right>
    <template #button-content>
      <feather-icon size="21" icon="GlobeIcon" />
    </template>
 
    <b-dropdown-item @click="changeLan('en')">
      <span class="ml-50">English</span>
    </b-dropdown-item>
    <b-dropdown-item @click="changeLan('cn')">
      <span class="ml-50">Chinese</span>
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
  methods:{
    changeLan(lan){
        this.$i18n.locale = lan;
    }
  }
};
</script>

