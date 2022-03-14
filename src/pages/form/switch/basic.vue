<template>
<div class="col-12 mb-3">
    <b-card header="Basic">

        <b-card-text class="row m-3">with size="sm" or size="lg" </b-card-text>
        <div class="row m-3">
            <b-form-checkbox v-model="checked" size="sm" name="check-button" switch class="mr-3">
                Switch Text
            </b-form-checkbox>
        </div>

        <div class="row m-3">
            <b-form-checkbox v-model="checked" name="check-button" switch class="mr-3">
                Switch Text
            </b-form-checkbox>
        </div>

        <div class="row m-3">
            <b-form-checkbox v-model="checked" size="lg" name="check-button" switch class="mr-3">
                Switch Text
            </b-form-checkbox>
        </div>

        <div class=" row m-3">status of checked {{checked}}</div>
    </b-card>
</div>
</template>

<script>
import {
    BCard,
    BFormCheckbox,
    BRow,
    BCol,
    BCardText
} from "bootstrap-vue";

export default {
    components: {
        BRow,
        BCol,
        BCard,
        BFormCheckbox,
        BCardText
    },

    data() {
        return {
            checked: false,
        };
    }
};
</script>
