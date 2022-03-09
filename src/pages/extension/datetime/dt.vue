<template>
<div class="col-12 mt-5">
    <h5>#DateTime</h5>
    <v-date-picker v-model="dt" mode="dateTime" timezone='UTC' :minute-increment="5" is24hr>
        <template v-slot="{ inputValue, togglePopover }">
            <b-form-group label="date">
                <b-input-group>
                    <b-input-group-prepend is-text>
                        <feather-icon icon="CalendarIcon" />
                    </b-input-group-prepend>
                    <b-form-input :value="inputValue" v-on:click="togglePopover" @keypress.prevent />
                </b-input-group>
            </b-form-group>
        </template>
    </v-date-picker>

    <p>{{dt.toUTCString()}}</p>
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
    data() {
        let datetime = new Date(Date.UTC(2022, 0, 22, 10, 10, 30));
        return {
            dt: datetime
        };
    },
};
</script>
