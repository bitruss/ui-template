<template>
<div class="row">
    <basic />
    <basic-vs />
    <d-t />
    <d-r />
    <d-t-r />
</div>
</template>

<script>
import Basic from "./basic.vue";
import BasicVs from "./basicvs.vue";
import DT from "./dt.vue";
import DR from "./daterange.vue";
import DTR from "./datetimerange.vue";

export default {
    components: {
        Basic,
        DT,
        DR,
        DTR,
        BasicVs,
    },
};
</script>
