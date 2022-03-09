<template>
<div class="row">
    <div class="notfoundwrapper">
        <b-toast static visible no-auto-hide class="mt-3" variant="danger">
            <template #toast-title>
                <div class="d-flex flex-grow-1 align-items-center mr-1">
                    <strong class="mr-auto">Page Not Found</strong>
                    <small class="text-muted">just now</small>
                </div>
            </template>
            <span> Sorry the requested page could not be found.</span>
            <div><a href="/">Go back to HomePage</a></div>
        </b-toast>
    </div>
</div>
</template>

<script>
import {
    BToast,
    BImg
} from "bootstrap-vue";

export default {
    components: {
        BToast,
        BImg
    },
};
</script>

<style>
.notfoundwrapper {
    width: 100%;
    max-width: 450px;
    padding: 15px;
    margin: 0 auto;
    margin-top: 8%;
}
</style>
