<template>
<div class="col-12">

    <h5 class="mb-1">#Basic</h5>
    <b-row class="p-3 pt-4">
        <span> For cross browser consistency <code>&lt;b-form-radio&gt;</code>
            uses Bootstrap's custom radio input to replace the browser default radio input.
        </span>
    </b-row>

    <b-row class="pr-3 pl-3">
        <b-form-radio v-model="Selected" name="some-radios" value="A" class="mr-4">
            Checked
        </b-form-radio>

        <b-form-radio v-model="Selected" name="some-radios" value="B" class="mr-4">
            Unchecked
        </b-form-radio>

        <b-form-radio v-model="Selected1" name="some-radios2" value="c" disabled class="mr-4">
            Checked Disabled
        </b-form-radio>

        <b-form-radio v-model="Selected1" name="some-radios2" value="d" disabled class="mr-4">
            Unchecked Disabled
        </b-form-radio>
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
            Selected1: "c",
        };
    },
};
</script>
