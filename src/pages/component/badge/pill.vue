<template>
<div class="col-12 mb-3">
    <b-card header="Pill">
        <div class="p-3">
            <b-badge pill variant="primary" class="mr-3  ">Primary</b-badge>
            <b-badge pill class="mr-3  ">Secondary</b-badge>
            <b-badge pill variant="success" class="mr-3 ">Success</b-badge>
            <b-badge pill variant="danger" class="mr-3 ">Danger</b-badge>
            <b-badge pill variant="warning" class="mr-3 ">Warning</b-badge>
            <b-badge pill variant="info" class="mr-3 ">Info</b-badge>
            <b-badge pill variant="dark" class="mr-3 ">Dark</b-badge>
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
