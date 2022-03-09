<template>
<div class="col-12  mb-3">
    <b-card header="Round style">
        <div class="pr-3 pl-3 pb-3">
            <b-row>
                <b-col>
                    <b-button variant="outline-primary" pill class="mr-3 mt-3">Primary</b-button>
                    <b-button variant="outline-secondary" pill class="mr-3 mt-3">Secondary</b-button>
                    <b-button variant="outline-success" pill class="mr-3 mt-3">Success</b-button>
                    <b-button variant="outline-danger" pill class="mr-3 mt-3">Danger</b-button>
                    <b-button variant="warning" pill class="mr-3 mt-3">Warning</b-button>
                </b-col>
            </b-row>
        </div>
    </b-card>
</div>
</template>

<script>
import {
    BButton,
    BRow,
    BCol,
    BCard
} from "bootstrap-vue";

export default {
    components: {
        BButton,
        BRow,
        BCard,
        BCol,
    },
};
</script>
