<template>
<div class="col-12">
    <h5 class="mb-4 mt-5">#Lazy loading</h5>

    <b-tabs content-class="mt-1">
        <!-- This tabs content will always be mounted -->
        <b-tab title="Regular tab">
            <b-alert variant="info" show class="mb-0">
                <div class="alert-body">I'm always mounted</div>
            </b-alert>
        </b-tab>

        <!-- This tabs content will not be mounted until the tab is shown -->
        <!-- and will be un-mounted when hidden -->
        <b-tab title="Lazy tab" lazy>
            <b-alert variant="info" show class="mb-0">
                <div class="alert-body">I'm lazy mounted!</div>
            </b-alert>
        </b-tab>
    </b-tabs>
</div>
</template>

<script>
import {
    BTabs,
    BTab,
    BAlert,
} from "bootstrap-vue";

export default {
    components: {
        BTabs,
        BTab,
        BAlert,
    },
};
</script>
