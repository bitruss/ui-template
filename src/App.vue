<template>
<div id="app" class="h-100">
    <component :is="path_layout">
        <template v-slot:navbar-items>
            <navbar-items />
        </template>
        <router-view />
    </component>
</div>
</template>

<script>
import access_config from "./config/config.js";
import Vertical from "@/core/layouts/vertical/Layout.vue";
import Full from "@/core/layouts/full/Layout.vue";
import NavbarItems from "@/components/navbaritems/NavbarItems.vue";

export default {
    computed: {
        path_layout() {
            if (
                !this.$route.meta.auth ||
                (this.$route.meta.auth &&
                    this.$route.meta.auth(
                        this.$store.state.auth.my_web_token,
                        this.$store.state.auth.my_roles,
                        this.$store.state.auth.my_permissions
                    ))
            ) {
                //public or auth passed
                return this.$route.meta.layout;
            } else {
                if (
                    this.$store.state.auth.my_web_token &&
                    !this.$route.meta.auth(
                        this.$store.state.auth.my_web_token,
                        this.$store.state.auth.my_roles,
                        this.$store.state.auth.my_permissions
                    )
                ) {
                    //login but not permit
                    this.$router.push({
                        name: access_config.core_router.forbidden.name,
                        path: access_config.core_router.forbidden.path,
                    });
                } else {
                    //login
                    this.$router.push({
                        name: access_config.core_router.login.name,
                        path: access_config.core_router.login.path,
                    });
                }
            }
        },
    },

    components: {
        Vertical,
        Full,
        NavbarItems,
    },
    watch: {
        $route(to, from) {
            this.$store.commit("ui/UPDATE_NAV_MENU_HIDDEN", true);
            this.$store.commit("auth/UPDATE_ACCESS_ACTIVE_PATH", to.path);
        },
    },
    beforeCreate() {
        //ini access config
        this.$store.commit("auth/INI_ACCESS", access_config);
        //ini roles and permissions
        this.$store.commit("auth/INI_MY_LOGIN_ROLES_PERMISSIONS");
    },
};
</script>
