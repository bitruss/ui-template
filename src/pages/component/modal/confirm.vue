<template>
<div class="col-12  mb-3">
    <b-card header="Confirm">
        <div class="p-3">
            <b-button variant="outline-primary" @click="showMsgBoxTwo">
                msgBoxConfirm with options
            </b-button>
            <b-card-text class="mb-0 mt-3">
                modal return value:
                <span class="font-weight-bold">{{ String(boxTwo) }}</span>
            </b-card-text>
        </div>    
    </b-card>
</div>
</template>

<script>
import {
    BCard,
    BButton,
    VBModal,
    BAlert,
    BCardText
} from "bootstrap-vue";

export default {
    components: {
        BCard,
        BButton,
        VBModal,
        BAlert,
        BCardText,
    },
    data: () => ({
        boxTwo: '',
    }),
    methods: {
        showMsgBoxTwo() {
            this.$bvModal
                .msgBoxConfirm('Please confirm that you want to delete everything.', {
                    title: 'Please Confirm',
                    size: 'sm',
                    okVariant: 'primary',
                    okTitle: 'Yes',
                    cancelTitle: 'No',
                    cancelVariant: 'secondary',
                    hideHeaderClose: false,
                    centered: true,
                })
                .then(value => {
                    this.boxTwo = value
                })
        }
    }
};
</script>
