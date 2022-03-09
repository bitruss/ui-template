<template>
<div class="col-12 mb-3">
    <b-card header="Sizes">
        <div class="p-3">
            <b-spinner small class="mr-3" label="Small Spinner" />
            <b-spinner class="mr-3" label="Small Spinner" />
        </div>    
    </b-card>
</div>
</template>

<script>
import {
    BCard,
    BSpinner

} from "bootstrap-vue";

export default {
    components: {
        BCard,
        BSpinner
    },
};
</script>
