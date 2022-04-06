<template>
<div class="col-12 mb-3">
    <b-card header="Different Locations">
        <div class="p-3">
            <b-button variant="outline-primary" @click="toast('b-toaster-top-right')" class="mr-3 mt-3">
                b-toaster-top-right
            </b-button>
            <b-button variant="outline-primary" @click="toast('b-toaster-top-left')" class="mr-3 mt-3">
                b-toaster-top-left
            </b-button>
            <b-button variant="outline-primary" @click="toast('b-toaster-top-center')" class="mr-3 mt-3">
                b-toaster-top-center
            </b-button>
            <b-button variant="outline-primary" @click="toast('b-toaster-top-full')" class="mr-3 mt-3">
                b-toaster-top-full
            </b-button>
            <b-button variant="outline-primary" @click="toast('b-toaster-bottom-right', true)" class="mr-3 mt-3">
                b-toaster-bottom-right
            </b-button>
            <b-button variant="outline-primary" @click="toast('b-toaster-bottom-left', true)" class="mr-3 mt-3">
                b-toaster-bottom-left
            </b-button>
            <b-button variant="outline-primary" @click="toast('b-toaster-bottom-center', true)" class="mr-3 mt-3">
                b-toaster-bottom-center
            </b-button>
            <b-button variant="outline-primary" @click="toast('b-toaster-bottom-full', true)" class="mr-3 mt-3">
                b-toaster-bottom-full
            </b-button>
        </div>    
    </b-card>
</div>
</template>

<script>
import {
    BButton,
    BCard
} from "bootstrap-vue";

export default {
    components: {
        BButton,
        BCard,
    },
    data: () => ({
        counter: 0,
    }),
    methods: {
        toast(toaster, append = false) {
            this.counter += 1;
            this.$bvToast.toast(`Toast ${this.counter} body content`, {
                title: `Toaster ${toaster}`,
                toaster,
                solid: true,
                appendToast: append,
            });
        },
    },
};
</script>
