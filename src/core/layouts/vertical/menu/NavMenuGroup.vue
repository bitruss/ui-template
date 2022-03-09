<template>
  <li class="nav-item group" :class="{ open: item.active }" v-if="!item.menu_hidden_">
    <b-link
      class="d-flex align-items-center"
      @click="toggleGroup(item.groupid)"
    >
      <feather-icon :icon="item.icon || 'CircleIcon'" />
      <span class="menu-title text-truncate">{{ item.name }}</span>
    </b-link>
    <b-collapse v-model="item.active" class="menu-content" tag="ul">
      <component
        v-for="child in item.children"
        :key="child.name"
        :item="child"
        :is="child.children ? 'nav-menu-group' : 'nav-menu-link'"
      />
    </b-collapse>
  </li>
</template>

<script>
import { BLink, BBadge, BCollapse } from "bootstrap-vue";
import NavMenuLink from "./NavMenuLink.vue";

export default {
  name:'nav-menu-group', //required for self-reference
  components: {
    NavMenuLink,
    BLink,
    BBadge,
    BCollapse,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    toggleGroup(groupid) {
      this.$store.commit("auth/TOGGLE_ACCESS_GROUPID", groupid);
    },
  },
};
</script>
