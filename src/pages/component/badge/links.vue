<template>
<div class="col-12 mb-3">
    <b-card header="Link">
        <div class="p-3">
            <b-badge href="https://google.com" variant="primary" class="mr-3" target="_">https://google.com</b-badge>
            <b-badge href="https://google.com" variant="success" class="mr-3" target="_">https://google.com</b-badge>
        </div>
    </b-card>
</div>
</template>

<script>
import {
    BAlert,
    BCard,
    BBadge
} from "bootstrap-vue";

export default {
    components: {
        BAlert,
        BCard,
        BBadge
    },
};
</script>
