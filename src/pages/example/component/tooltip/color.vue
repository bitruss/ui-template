<template>
<div class="col-12 mb-3">
    <b-card header="Colors">
        <div class="p-3">
            <!-- primary -->
            <b-button v-b-tooltip.hover.v-primary title="Primary variant" variant="outline-primary" class=" mr-3">
                Primary
            </b-button>

            <!-- secondary -->
            <b-button v-b-tooltip.hover.v-secondary title="Secondary variant" variant="outline-secondary"  class=" mr-3">
                Secondary
            </b-button>

            <!-- success -->
            <b-button v-b-tooltip.hover.v-success title="Success variant" variant="outline-success"  class=" mr-3">
                Success
            </b-button>

            <!-- danger -->
            <b-button v-b-tooltip.hover.v-danger title="Danger variant" variant="outline-danger"  class=" mr-3">
                Danger
            </b-button>

            <!-- warning -->
            <b-button v-b-tooltip.hover.v-warning title="Warning variant" variant="outline-warning"  class="  mr-3">
                Warning
            </b-button>
        </div>
    </b-card>
</div>
</template>

<script>
import {
    BCard,
    BButton,
    VBTooltip

} from "bootstrap-vue";

export default {
    components: {
        BCard,
        BButton,
        VBTooltip
    }
};
</script>
