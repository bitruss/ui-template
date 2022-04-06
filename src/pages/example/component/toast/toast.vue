<template>
<div class="row">
    <basic />
    <static />
    <variant />
    <delay />
    <location />
    <with-link />
</div>
</template>

<script>
import Basic from "./basic.vue";
import Static from "./static.vue";
import Variant from "./variant.vue";
import Delay from "./delay.vue";
import Location from './location.vue';
import WithLink from './withlink.vue';

export default {
    components: {
        Basic,
        Static,
        Variant,
        Delay,
        Location,
        WithLink
    },

};
</script>
