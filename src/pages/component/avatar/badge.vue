<template>
<div class="col-12 mb-3">
    <b-card header="Basic with sizes">
        <div class="p-3">
            <b-avatar class="mr-1 mr-3" badge="B" size="sm"/>
            <b-avatar badge="7" class="mr-1 mr-3" variant="primary" badge-variant="danger" />
            <b-avatar badge-variant="success" badge="1" size="lg"  class="mr-3" :src="require('@/assets/avatar_.png')" />
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
