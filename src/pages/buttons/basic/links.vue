<template>
<div class="col-12 mb-3">
    <b-card header="Links">
        <div class="pt-0 pr-3 pl-3 pb-3">
            <b-row>
                <b-col>
                    <b-button variant="primary" class="mr-3 mt-3" href="#/"> Internal </b-button>
                    <b-button variant="primary" class="mr-3 mt-3" href="https://google.com"> Outside </b-button>
                    <b-button variant="primary" class="mr-3 mt-3" href="https://google.com" target="_blank"> Outside New Window </b-button>
                </b-col>
            </b-row>
        </div>
    </b-card>
</div>
</template>

<script>
import {
    BRow,
    BCard,
    BCol,
    BButton,
} from "bootstrap-vue";

export default {
    components: {
        BRow,
        BCard,
        BCol,
        BButton,
    },
};
</script>
