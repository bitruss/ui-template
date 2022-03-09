<template>
  <li class="nav-item link" :class="{ active: item.active }" v-if="!item.menu_hidden_" >
    <b-link v-bind="blinkp(item)" class="d-flex align-items-center"  >
      <feather-icon :icon="item.icon || 'CircleIcon'" />
      <span class="menu-title text-truncate">{{ item.name }} </span>
    </b-link>
  </li>
</template>

<script>


import { BLink, BBadge } from "bootstrap-vue";

export default {
  components: {
    BLink,
    BBadge,
  },
 
  methods: {
    blinkp(item) {
      if (
        item.path.toLowerCase().includes("http://") ||
        item.path.toLowerCase().includes("https://")
      ) {
        return { href:item.path,target:"_blank"}
      } else {
        return { to: item.path };
      }
    },
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>
