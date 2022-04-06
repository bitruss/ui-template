<template>
<div class="col-12 mb-3">
    <b-card header="Dealy">
        <div class="p-3">
            <b-card-text>
                <span>
                    delay with 10 seconds <code>auto-hide-delay="10000"</code> 
                </span>
            </b-card-text>

            <b-button  class="mt-3" variant="primary"   @click="$bvToast.show('delay-toast')">
                Show toast
            </b-button>

            <!-- toast -->
            <b-toast id="delay-toast" auto-hide-delay="10000">
                <template #toast-title>
                    <div class="d-flex flex-grow-1 align-items-center mr-1">
                        <b-img :src="require('@/assets/logo.png')" class="mr-1" height="18" width="25" />
                        <strong class="mr-auto">Vue Admin</strong>
                        <small class="text-muted">10 seconds dealy</small>
                    </div>
                </template>
                <span>Hello, world! This is a toast message. Hope you're doing
                    well..:)</span>
            </b-toast>
        </div>    
    </b-card>
</div>
</template>

<script>
import {
    BButton,
    BToast,
    BImg,
    BCard,
    BCardText
} from "bootstrap-vue";

export default {
    components: {
        BButton,
        BToast,
        BImg,
        BCard,
        BCardText
    },
};
</script>
