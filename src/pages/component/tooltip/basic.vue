<template>
<div class="col-12 mb-3">
    <b-card header="Basic">
        <div class="p-3">
            <b-button v-b-tooltip.hover.top="'Tooltip on top!'" variant="primary" class=" mr-3">
                Tooltip on top
            </b-button>
            <b-button v-b-tooltip.hover.right="'Tooltip on right!'" variant="primary" class=" mr-3">
                Tooltip on right
            </b-button>
            <b-button v-b-tooltip.hover.left="'Tooltip on left!'" variant="primary" class=" mr-3">
                Tooltip on left
            </b-button>
            <b-button v-b-tooltip.hover.bottom="'Tooltip on bottom!'" variant="primary" class=" mr-3">
                Tooltip on bottom
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
