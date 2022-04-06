<template>
<div class="col-12">
        <h5 class="mb-3 mt-5">#Badges</h5>
        <b-list-group>
            <b-list-group-item class="d-flex justify-content-between align-items-center">
                <span>Biscuit jelly beans macaroon danish pudding.</span>
                <b-badge variant="primary" pill class="badge-round">
                    8
                </b-badge>
            </b-list-group-item>

            <b-list-group-item class="d-flex justify-content-between align-items-center">
                <span>chocolate cheesecake candy</span>
                <b-badge variant="primary" pill class="badge-round">
                    7
                </b-badge>
            </b-list-group-item>

            <b-list-group-item class="d-flex justify-content-between align-items-center">
                <span>Oat cake icing pastry pie carrot</span>
                <b-badge variant="primary" pill class="badge-round">
                    6
                </b-badge>
            </b-list-group-item>
        </b-list-group>
</div>
</template>

<script>
import {
    BListGroup,
    BListGroupItem,
    BBadge
} from "bootstrap-vue";

export default {
    components: {
        BListGroup,
        BListGroupItem,
        BBadge
    },
};
</script>
