<template>
<div class="col-12 mb-3">
    <b-card header="Static">
      <div class="p-3">  
        <b-card-text>
            <span>
                with these attributes to make it static <code>static</code> , visable
                <code>visible</code> and no auto hidden <code>no-auto-hide</code>
            </span>
        </b-card-text>

        <b-card-text>
            <span>for more attributes setting you can reference over
                bootstrap-vue</span>
        </b-card-text>

        <!-- toast -->
        <b-toast static visible no-auto-hide class="mt-3" variant="info">
            <template #toast-title>
                <div class="d-flex flex-grow-1 align-items-center mr-1">
                    <b-img :src="require('@/assets/logo.png')" class="mr-1" height="18" width="25" />
                    <strong class="mr-auto">Vue Admin</strong>
                    <small class="text-muted">11 mins ago</small>
                </div>
            </template>
            <span>Hello, world! This is a toast message.</span>
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
        BCardText,
    },
};
</script>
