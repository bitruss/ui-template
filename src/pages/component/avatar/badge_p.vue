<template>
<div class="col-12 mb-3">
    <b-card header="With badge positions">
        <div class="p-3">
            <b-avatar class="mr-3" badge badge-variant="success" />
            <b-avatar class="mr-3" badge-variant="success" badge badge-left />
            <b-avatar badge="10" class="mr-3" badge-variant="success" badge-top />
            <b-avatar badge="10" class="mr-3" badge-variant="success" badge-left badge-top />
        </div>    
    </b-card>
</div>
</template>

<script>
import {
    BCard,
    BAvatar
} from "bootstrap-vue";

export default {
    components: {
        BCard,
        BAvatar
    },
};
</script>
