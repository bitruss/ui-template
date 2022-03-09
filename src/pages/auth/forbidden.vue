<template>
<div class="row">
    <div class="forbiddenwrapper">
        <b-toast static visible no-auto-hide class="mt-3" variant="danger">
            <template #toast-title>
                <div class="d-flex flex-grow-1 align-items-center mr-1">
                    <strong class="mr-auto">No Permission</strong>
                    <small class="text-muted">just now</small>
                </div>
            </template>
            <span> You are not authorized to view this page </span>
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
.forbiddenwrapper {
    width: 100%;
    max-width: 450px;
    padding: 15px;
    margin: 0 auto;
    margin-top: 8%;
}
</style>
