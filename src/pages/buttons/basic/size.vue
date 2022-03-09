<template>
<div class="col-12 mb-3">
    <b-card header="Sizes">
        <div class="pr-3 pl-3 pb-3">
            <b-row>
                <b-col>
                    <b-button variant="primary" size="lg" class="mr-3 mt-3">
                        <feather-icon icon="StarIcon" class="mr-2" size="19" />
                        <span class="align-middle">Large</span>
                    </b-button>
                    <b-button variant="warning" class="mr-3 mt-3">
                        <feather-icon icon="StarIcon" class="mr-2" size="15" />
                        <span class="align-middle">Default</span>
                    </b-button>
                    <b-button variant="outline-primary" size="sm" class="mr-3 mt-3">
                        <feather-icon icon="StarIcon" class="mr-2" size="11" />
                        <span class="align-middle">Small</span>
                    </b-button>
                </b-col>
            </b-row>
        </div>
    </b-card>
</div>
</template>

<script>
import {
    BRow,
    BCol,
    BCard,
    BButton
} from "bootstrap-vue";

export default {
    components: {
        BRow,
        BCol,
        BCard,
        BButton,
    },
};
</script>
