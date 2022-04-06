<template>
<div class="col-12">
    <h5 class="mb-1 mt-5">#Basic</h5>
    <div class="mt-3">
        <span>
            <span class="mr-3">With sizes</span>
            <code>.select-size-lg</code> or <code>.select-size-sm</code> classes
            to control size
        </span>
        <b-row class="pl-3 mt-3">
            <b-form-checkbox size="sm" class="mr-4">small</b-form-checkbox>
        </b-row>
        <b-row class="pl-3 mt-3">
            <b-form-checkbox class="mr-4">Unchecked</b-form-checkbox>
        </b-row>
        <b-row class="pl-3 mt-3">
            <b-form-checkbox size="lg" class="mr-4">Unchecked</b-form-checkbox>
        </b-row>

    </div>
</div>
</template>

<script>
import {
    BFormCheckbox,
    BCard,
    BRow,
    BCardText
} from "bootstrap-vue";

export default {
    components: {
        BFormCheckbox,
        BCard,
        BRow,
        BCardText,
    },
};
</script>
