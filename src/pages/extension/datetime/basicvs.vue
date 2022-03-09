<template>
<div class="col-12 mt-5">
    <h5>#Basic_VS</h5>
    <v-date-picker v-model="date" timezone="UTC" is24hr />
    <p class="mt-3">{{date.toUTCString()}}</p>
</div>
</template>

<script>
import VDatePicker from 'v-calendar/lib/components/date-picker.umd'

export default {
    components: {
        VDatePicker
    },
    data() {
        return {
            date: new Date(Date.UTC(2022, 0, 22, 0, 0, 0))
        };
    },
};
</script>
