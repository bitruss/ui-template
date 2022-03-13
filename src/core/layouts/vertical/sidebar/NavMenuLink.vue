<template>
<li class="nav-item link" :class="{ active: item.active }" v-if="!item.menu_hidden_">
    <b-link v-bind="blinkp(item)" class="d-flex align-items-center" @click="clicklink">
        <feather-icon :icon="item.icon || 'CircleIcon'" />
        <span class="menu-title text-truncate">{{ item.name }} </span>
    </b-link>
</li>
</template>

<script>
import {
    BLink,
    BBadge
} from "bootstrap-vue";

export default {
    components: {
        BLink,
        BBadge,
    },

    created() {
        if (this.$route.path == this.item.path) {
            this.$store.commit("ui/UPDATE_NAV_MENU_HIDDEN", true);
            this.$store.commit("auth/UPDATE_ACCESS_ACTIVE_PATH", this.item.path);
        }
    },

    methods: {
        blinkp(item) {
            if (
                item.path.toLowerCase().includes("http://") ||
                item.path.toLowerCase().includes("https://")
            ) {
                return {
                    href: item.path,
                    target: "_blank"
                }
            } else {
                return {
                    to: item.path
                };
            }
        },
        clicklink() {
            this.$store.commit("ui/UPDATE_NAV_MENU_HIDDEN", true);
            this.$store.commit("auth/UPDATE_ACCESS_ACTIVE_PATH", this.item.path);
        }
    },
    props: {
        item: {
            type: Object,
            required: true,
        },
    },
};
</script>
