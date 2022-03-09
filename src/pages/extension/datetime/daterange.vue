<template>
<div class="col-12 mt-5">
    <h5>#DateRange</h5>
    <v-date-picker v-model="range" :model-config="modelConfig" timezone='UTC' is-range is24hr>
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
    <p>{{range}}</p>
</div>
</template>

<script>
import {
    BCard,
    BFormGroup,
    BInputGroup,
    BInputGroupPrepend,
    BFormInput,
} from "bootstrap-vue";
// import VCalendar from 'v-calendar/lib/components/calendar.umd'
import VDatePicker from 'v-calendar/lib/components/date-picker.umd'

export default {
    components: {
        BCard,
        BFormGroup,
        BInputGroup,
        BInputGroupPrepend,
        BFormInput,
        //  VCalendar,
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
                start: new Date(2020, 0, 6),
                end: new Date(2020, 0, 9),
            },
            modelConfig: {
                start: {
                    timeAdjust: '00:00:00',
                },
                end: {
                    timeAdjust: '00:00:00',
                },
            }
        };
    },
};
</script>
