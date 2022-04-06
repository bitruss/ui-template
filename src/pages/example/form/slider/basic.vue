<template>
<div class="col-12">
    <h5 class="mb-4">#Sliders</h5>
    <b-form-group label="with size='sm'">
        <b-input-group size="sm">
            <b-input-group-prepend is-text>
                Number
            </b-input-group-prepend>
            <b-form-input v-model="value" type="range" number min="0" max="1" step="0.01" />
            <b-input-group-append is-text>
                {{ value.toFixed(2) }}
            </b-input-group-append>
        </b-input-group>
    </b-form-group>

    <b-form-group label="with default size">
        <b-input-group>
            <b-input-group-prepend is-text>
                Number
            </b-input-group-prepend>
            <b-form-input v-model="value" type="range" number min="0" max="1" step="0.01" />
            <b-input-group-append is-text>
                {{ value.toFixed(2) }}
            </b-input-group-append>
        </b-input-group>
    </b-form-group>

    <b-form-group label="with size='lg'">
        <b-input-group size="lg">
            <b-input-group-prepend is-text>
                Number
            </b-input-group-prepend>
            <b-form-input v-model="value" type="range" number min="0" max="1" step="0.01" />
            <b-input-group-append is-text>
                {{ value.toFixed(2) }}
            </b-input-group-append>
        </b-input-group>
    </b-form-group>

</div>
</template>

<script>
import {
    BFormGroup,
    BInputGroup,
    BInputGroupAppend,
    BInputGroupPrepend,
    BFormInput,
    BCard
} from "bootstrap-vue";

export default {
    components: {
        BFormGroup,
        BInputGroup,
        BInputGroupAppend,
        BInputGroupPrepend,
        BFormInput,
        BCard
    },
    data: () => ({
        value: 0.85,
    }),
};
</script>
