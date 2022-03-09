<template>
<b-nav-item-dropdown variant="link" right>
    <template #button-content>
        <feather-icon size="21" icon="SettingsIcon" />
    </template>

    <b-dropdown-item @click="logout">
        <span class="ml-50">Logout</span>
    </b-dropdown-item>
</b-nav-item-dropdown>
</template>

<script>
import {
    BNavItemDropdown,
    BDropdownItem
} from "bootstrap-vue";

export default {
    components: {
        BNavItemDropdown,
        BDropdownItem,
    },
    methods: {
        logout() {
            //set my login info
            this.$store.commit("auth/UPDATE_MY_LOGIN_ROLES_PERMISSIONS", {
                web_token: false,
                roles: [],
                permissions: []
            });

            window.location='/login'; //use window.location to redirect as javascript cache is cleared
        }
    }
};
</script>
