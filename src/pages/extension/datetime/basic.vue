<template>
<div class="col-12">
    <h5>#Basic</h5>
    <v-date-picker v-model="date" timezone="UTC" is24hr>
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
    <p>{{date.toUTCString()}}</p>
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
        return {
            date: new Date(Date.UTC(2022, 0, 22, 0, 0, 0))
        };
    },
};
</script>
