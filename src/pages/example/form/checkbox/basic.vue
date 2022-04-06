<template>
<div class="col-12">
    <h5 class="mb-1">#Basic</h5>
    <b-row class="p-3">
        <b-form-checkbox v-model="selected" value="A" class="mr-4">Checked</b-form-checkbox>
        <b-form-checkbox v-model="selected" value="B" class="mr-4">Unchecked</b-form-checkbox>
        <b-form-checkbox v-model="selected" value="C" disabled class="mr-4">Checked disabled</b-form-checkbox>
        <b-form-checkbox v-model="selected" value="D" disabled class="mr-4">Unchecked disabled</b-form-checkbox>
    </b-row>
</div>
</template>

<script>
import {
    BFormCheckbox,
    BCard,
    BRow
} from "bootstrap-vue";

export default {
    components: {
        BFormCheckbox,
        BCard,
        BRow,
    },
    data() {
        return {
            selected: ["A", "C"],
        };
    },
};
</script>
