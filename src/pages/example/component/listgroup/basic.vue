<template>
<div class="col-12">
    <h5  class="mb-3" >#ListGroup</h5>
    <b-list-group >
            <b-list-group-item>Cras justo odio</b-list-group-item>
            <b-list-group-item disabled>Dapibus ac facilisis in</b-list-group-item>
            <b-list-group-item>Morbi leo risus</b-list-group-item>
            <b-list-group-item>Porta ac consectetur ac</b-list-group-item>
            <b-list-group-item>Vestibulum at eros</b-list-group-item>
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
