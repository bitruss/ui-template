<template>
<div class="col-12">
    <h5 class="mt-5">#Colors</h5>
    <b-row class="p-3">
        <b-form-checkbox v-model="selected" value="A" class="custom-control-primary mr-4">
            Primary
        </b-form-checkbox>
        <b-form-checkbox v-model="selected" value="CC" class="custom-control-secondary mr-4">
            Secondary
        </b-form-checkbox>
        <b-form-checkbox v-model="selected" value="C" class="custom-control-success mr-4">
            Success
        </b-form-checkbox>

        <b-form-checkbox v-model="selected" value="F" class="custom-control-danger mr-4">
            Danger
        </b-form-checkbox>

        <b-form-checkbox v-model="selected" value="D" class="custom-control-warning mr-4">
            Warning
        </b-form-checkbox>
        <b-form-checkbox v-model="selected" value="G" class="custom-control-info mr-4">
            Info
        </b-form-checkbox>
    </b-row>
</div>
</template>

<script>
import {
    BFormCheckbox,
    BRow
} from "bootstrap-vue";

export default {
    components: {
        BFormCheckbox,
        BRow
    },
    data() {
        return {
            selected: ["A", "C", "CC", "B", "D", "E", "F", "G"],
        };
    },
};
</script>
