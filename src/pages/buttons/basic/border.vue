<template>
<div class="col-12 mb-3">
    <b-card header="Border style">
        <div class="pl-3 pr-3 pb-3">
            <b-row>
                <b-col>
                    <b-button variant="outline-primary" class="mr-3 mt-3">Primary</b-button>
                    <b-button variant="outline-secondary" class="mr-3 mt-3">Secondary</b-button>
                    <b-button variant="outline-success" class="mr-3 mt-3">Success</b-button>
                    <b-button variant="outline-danger" class="mr-3 mt-3">Danger</b-button>
                    <b-button variant="outline-warning" class="mr-3 mt-3">Warning</b-button>
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
        BCol,
        BCard,
    },
};
</script>
