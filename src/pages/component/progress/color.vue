<template>
<div class="col-12 mb-3">
    <b-card header="Color">
        <div class="p-3">
            <b-progress value="25" max="100" class="mt-3" />
            <b-progress value="35" max="100" class="mt-3" variant="secondary" />
            <b-progress value="45" max="100" class="mt-3" variant="success" />
            <b-progress value="55" max="100" class="mt-3" variant="danger" />
            <b-progress value="65" max="100" class="mt-3" variant="warning" />
            <b-progress value="75" max="100" class="mt-3" variant="info" />
            <b-progress value="85" max="100" class="mt-3" variant="dark" />
        </div>    
    </b-card>
</div>
</template>

<script>
import {
    BCard,
    BProgress
} from "bootstrap-vue";

export default {

    components: {
        BProgress,
        BCard
    },

};
</script>
