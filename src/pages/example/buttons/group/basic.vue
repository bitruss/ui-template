<template>
<div class="col-12 mb-3">
    <b-card header="Basic">
        <b-row class="p-3">
            <b-col>
                <b-button-group>
                    <b-button variant="primary"> First </b-button>
                    <b-button variant="primary"> Second </b-button>
                    <b-button variant="primary"> Third </b-button>
                </b-button-group>
            </b-col>
        </b-row>
    </b-card>
</div>
</template>

<script>
import {
    BButtonGroup,
    BButton,
    BCard,
    BRow,
    BCol,
} from "bootstrap-vue";

export default {
    components: {
        BButtonGroup,
        BButton,
        BCard,
        BRow,
        BCol,
    },
};
</script>
