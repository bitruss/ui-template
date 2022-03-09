<template>
<div class="col-12 mt-5">

    <h5>DateTime-Range</h5>
    <v-date-picker v-model="range" timezone='UTC' mode="dateTime" is24hr is-range>
        <template v-slot="{ inputValue, togglePopover }">
            <b-form-group label="date">
                <b-input-group v-on:click="togglePopover">
                    <b-input-group-prepend is-text>
                        <feather-icon icon="CalendarIcon" />
                    </b-input-group-prepend>
                    <b-form-input :value="dateToString(inputValue)" @keypress.prevent />
                </b-input-group>
            </b-form-group>
        </template>
    </v-date-picker>
    <p>{{range.start.toUTCString()}} - {{range.end.toUTCString()}}</p>

</div>
</template>

<script>
import {
    BFormGroup,
    BInputGroup,
    BInputGroupPrepend,
    BFormInput,
} from "bootstrap-vue";
import VDatePicker from 'v-calendar/lib/components/date-picker.umd'

export default {
    components: {
        BFormGroup,
        BInputGroup,
        BInputGroupPrepend,
        BFormInput,
        VDatePicker
    },
    methods: {
        dateToString(inputValue) {
            return inputValue.start + " - " + inputValue.end;
        }
    },
    data() {
        return {
            range: {
                start: new Date(Date.UTC(2022, 0, 22, 0, 0, 0)),
                end: new Date(Date.UTC(2022, 0, 23, 10, 3, 0))
            },
        };
    },
};
</script>
