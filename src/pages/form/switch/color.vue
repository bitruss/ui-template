<template>
<div class="col-12 mb-3">
    <b-card header="Color">

        <div class="p-3">
            <b-form-checkbox v-model="checked"  class="custom-control-primary mr-4" switch>
                Primary
            </b-form-checkbox>
            <b-form-checkbox v-model="checked"   class="custom-control-secondary mr-4" switch>
                Secondary
            </b-form-checkbox>
            <b-form-checkbox v-model="checked"   class="custom-control-success mr-4" switch>
                Success
            </b-form-checkbox>

            <b-form-checkbox v-model="checked"  class="custom-control-danger mr-4" switch>
                Danger
            </b-form-checkbox>

            <b-form-checkbox v-model="checked"  class="custom-control-warning mr-4" switch>
                Warning
            </b-form-checkbox>
            <b-form-checkbox v-model="checked"   class="custom-control-info mr-4" switch>
                Info
            </b-form-checkbox>
        </div>
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
            checked: true,
        };
    }
};
</script>
