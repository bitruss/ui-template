<template>
<div class="col-12">
    <h5 class="mb-1 mt-5">#Sizes</h5>

    <b-row class="p-3">
        <b-card-text>
            <span> For cross browser consistency <code>&lt;b-form-radio&gt;</code>
                uses Bootstrap's custom radio input to replace the browser default radio input.
            </span>
        </b-card-text>
    </b-row>
    <b-row class="pl-3 mt-3">
        <b-form-radio v-model="Selected" value="C" class="mr-4" size="sm">small</b-form-radio>
    </b-row>
    <b-row class="pl-3 mt-3">
        <b-form-radio v-model="Selected" value="B" class="mr-4">middle</b-form-radio>
    </b-row>
    <b-row class="pl-3 mt-3">
        <b-form-radio v-model="Selected" value="A" class="mr-4" size="lg">Checked-LG</b-form-radio>
    </b-row>

</div>
</template>

<script>
import {
    BFormRadio,
    BCard,
    BRow,
    BCol,
    BCardText
} from "bootstrap-vue";

export default {
    components: {
        BFormRadio,
        BCard,
        BRow,
        BCol,
        BCardText,
    },
    data() {
        return {
            Selected: "A",
        };
    },
};
</script>
