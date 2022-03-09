<template>
<div class="col-12">
    <h5 class="mb-3 mt-5">#Links</h5>
    <b-list-group>
        <b-list-group-item href="#/">Home page</b-list-group-item>
        <b-list-group-item target="_" href="https://google.com">google.com</b-list-group-item>
        <b-list-group-item href="#/pages/component/listgroup" active>listgroup</b-list-group-item>
        <b-list-group-item href="#">Action links are fast</b-list-group-item>
        <b-list-group-item href="#" disabled>Disabled link</b-list-group-item>
    </b-list-group>
</div>
</template>

<script>
import {
    BListGroup,
    BListGroupItem
} from "bootstrap-vue";

export default {
    components: {
        BListGroup,
        BListGroupItem
    },
};
</script>
