<template>
<div class="col-12 mb-3">
    <b-card header="Group">
        <div class="p-3">
            <b-form-group label="Inline switch style checkboxes">
                <b-form-checkbox-group v-model="selected" :options="options" switches class="demo-inline-spacing" />
            </b-form-group>
            <div class="row p-3">status of checked {{selected}}</div>
        </div>
    </b-card>
</div>
</template>

<script>
import {
    BCard,
    BFormGroup,
    BFormCheckboxGroup,
    BRow,
    BCol,
    BCardText
} from "bootstrap-vue";

export default {
    components: {
        BRow,
        BCol,
        BCard,
        BFormCheckboxGroup,
        BCardText,
        BFormGroup,
    },

    data() {
        return {
            options: [{
                    text: 'Red',
                    value: 'red'
                },
                {
                    text: 'Green',
                    value: 'green'
                },
                {
                    text: 'Yellow (disabled)',
                    value: 'yellow',
                    disabled: true
                },
                {
                    text: 'Blue',
                    value: 'blue'
                },
            ],
            selected: [],
        };
    }
};
</script>
