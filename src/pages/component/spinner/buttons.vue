<template>
<div class="col-12 mb-3">
    <b-card header="Buttons">
         <div class="p-3">
                <b-button variant="primary" target="" class="mr-3">
                    <b-spinner small />
                    <span class="sr-only">Loading...</span>
                </b-button>

                <b-button variant="outline-primary" target="" class="mr-3">
                    <b-spinner small />
                    <span class="sr-only">Loading...</span>
                </b-button>

                <b-button variant="outline-success" target="" class="mr-3">
                    <b-spinner small />
                    <span class="sr-only">Loading...</span>
                </b-button>

                <b-button variant="warning" target="" class="mr-3">
                    <b-spinner small />
                    <span class="sr-only">Loading...</span>
                </b-button>

                <b-button variant="primary" class="mr-3 ">
                    <b-spinner small />
                    Loading...
                </b-button>

                <b-button variant="primary" class="mr-3">
                    <b-spinner small />
                    <span class="sr-only">Loading...</span>
                </b-button>

                <b-button variant="primary" disabled class="mr-3">
                    <b-spinner small />
                    Loading...
                </b-button>
         </div>       
    </b-card>
</div>
</template>

<script>
import {
    BCard,
    BSpinner,
    BButton

} from "bootstrap-vue";

export default {
    components: {
        BCard,
        BSpinner,
        BButton
    },
};
</script>
