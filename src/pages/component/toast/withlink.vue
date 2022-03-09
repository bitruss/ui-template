<template>
<div class="col-12 mb-3">
    <b-card header="Link">
        <div class="p-3">
            <b-button variant="primary" @click="toast()">
                Show toast with link
            </b-button>
        </div>    
    </b-card>
</div>
</template>

<script>
import {
    BButton,
    BToast,
    BCard
} from "bootstrap-vue";

export default {
    components: {
        BButton,
        BToast,
        BCard
    },
    methods: {
        toast() {
            this.$bvToast.toast('go to welcome page', {
                href: '#/',
                title: 'link to go to welcome page',
            })
        },
    },
};
</script>
