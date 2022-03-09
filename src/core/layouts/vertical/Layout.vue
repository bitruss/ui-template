<template>
<div class="vertical-layout" :class="[layoutClasses]">
    <!-- horizontal Navbar   -->
    <b-navbar>
        <div class="navbar-container d-flex">
            <div class="menu-toggler">
                <b-navbar-nav>
                    <b-nav-item @click="toggleMenuHidden()">
                        <feather-icon size="21" icon="MenuIcon" />
                    </b-nav-item>
                </b-navbar-nav>
            </div>
            <b-navbar-nav class="nav align-items-center ml-auto">
                <slot name="navbar-items" />
            </b-navbar-nav>
        </div>
    </b-navbar>
    <!--/ horizontal Navbar -->

    <!--vertical -->
    <div class="main-menu">
        <VuePerfectScrollbar class="scroll-area" :settings="{ maxScrollbarLength: 60, wheelPropagation: false }" tagname="ul">
            <li class="navlogo">
                <span class="text">DashBoard</span>
            </li>
            <nav-menu-items />
        </VuePerfectScrollbar>
    </div>
    <!--/vertical -->

    <div class="sidenav-overlay" :class="overlayClass" @click="toggleMenuHidden()" />

    <!-- Content  right -->
    <transition :name="transition_name" :mode="transition_mode">
        <content-renderer>
            <slot name="default" />
        </content-renderer>
    </transition>
    <!--/ Content right -->
</div>
</template>

<script>
import VuePerfectScrollbar from "vue-perfect-scrollbar";
import {
    BNavbar,
    BLink,
    BNavbarNav
} from "bootstrap-vue";
import ContentRenderer from "./ContentRenderer.vue";
import NavMenuItems from "./menu/NavMenuItems.vue";
import {
    BNavItem
} from "bootstrap-vue";

export default {
    components: {
        BNavbar,
        BLink,
        BNavbarNav,
        ContentRenderer,
        VuePerfectScrollbar,
        NavMenuItems,
        BNavItem,
    },

    data: function () {
        return {
            transition_name: "zoom-fade",
            transition_mode: "out-in",
        };
    },

    methods: {
        toggleMenuHidden() {
            this.$store.commit(
                "ui/UPDATE_NAV_MENU_HIDDEN",
                !this.$store.state.ui.menuHidden
            );
        },
    },

    created() {
        // UI Resize handler
        window.addEventListener("resize", () => {
            this.$store.commit("ui/UPDATE_BREAKPOINT");
            this.$store.commit("ui/UPDATE_NAV_MENU_HIDDEN", true);
        });
        this.$store.commit("ui/UPDATE_BREAKPOINT");
        this.$store.commit("ui/UPDATE_NAV_MENU_HIDDEN", true);
    },

    computed: {
        overlayClass() {
            if (!this.$store.state.ui.menuHidden) {
                return "show";
            } else {
                return null;
            }
        },

        layoutClasses() {
            const classes = [];
            if (
                this.$store.state.ui.breakpoint === "xl" ||
                this.$store.state.ui.breakpoint === "xxl"
            ) {
                classes.push("vertical-menu-modern");
            } else {
                classes.push("vertical-overlay-menu");
                classes.push(
                    this.$store.state.ui.menuHidden ? "menu-hide" : "menu-open"
                );
            }
            return classes;
        },
    },
};
</script>
