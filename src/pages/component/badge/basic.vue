<template>
<div class="col-12 mb-3">
    <b-card header="Basic">
        <div class="p-3">
            <b-badge variant="primary" class="mr-3 ">Primary</b-badge>
            <b-badge class="mr-3 ">Secondary</b-badge>
            <b-badge variant="success" class="mr-3 ">Success</b-badge>
            <b-badge variant="danger" class="mr-3 ">Danger</b-badge>
            <b-badge variant="warning" class="mr-3 ">Warning</b-badge>
            <b-badge variant="info" class="mr-3 ">Info</b-badge>
            <b-badge variant="dark" class="mr-3 ">Dark</b-badge>
        </div>
    </b-card>
</div>
</template>

<script>
import {
    BCard,
    BBadge
} from "bootstrap-vue";

export default {
    components: {
        BCard,
        BBadge
    },
};
</script>
