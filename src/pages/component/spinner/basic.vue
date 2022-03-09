<template>
<div class="col-12 mb-3">
    <b-card header="Basic">
         <div class="p-3">
            <b-spinner class="mr-3" variant="primary" />
            <b-spinner class="mr-3" variant="secondary" />
            <b-spinner class="mr-3" variant="danger" />
            <b-spinner class="mr-3" variant="warning" />
            <b-spinner class="mr-3" variant="success" />
            <b-spinner class="mr-3" variant="info" />
            <b-spinner class="mr-3" variant="dark" />
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
