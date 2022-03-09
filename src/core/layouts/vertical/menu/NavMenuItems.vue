<template>
  <ul class="navigation">
    <template v-for="item in this.$store.state.auth.access.router">
      <Header :key="item.header" :name="item.header" v-if="!item.menu_hidden_" />
      <template v-for="obj in item.items">
        <component
          v-if="!item.menu_hidden_"
          :is="obj.children ? 'nav-menu-group' : 'nav-menu-link'"
          :key="obj.name"
          :item="obj"
        />
      </template>
    </template>
  </ul>
</template>

<script>
import Header from "./Header.vue";
import NavMenuLink from "./NavMenuLink.vue";
import NavMenuGroup from "./NavMenuGroup.vue";

export default {
  components: {
    Header,
    NavMenuLink,
    NavMenuGroup,
  },
  methods: {}
};
</script>