<template>
  <div class="col-md-6">
    <b-card header="Multi-select">
      <div class="p-3 pt-4">
          <b-card-text>
            <span> small size with <code>class="select-size-sm"</code> </span>
          </b-card-text>

          <v-select
            v-model="selected_sm"
            multiple
            label="title"
            :options="option"
            class="select-size-sm mt-2"
          />

          <b-card-text class="mt-3">
            <span> default size </span>
          </b-card-text>

          <v-select v-model="selected" multiple label="title" :options="option" class="mt-2" />

          <b-card-text class="mt-3">
            <span> large size with <code>class="select-size-lg"</code> </span>
          </b-card-text>

          <v-select
            v-model="selected_lg"
            multiple
            label="title"
            :options="option"
            class="select-size-lg mt-2"
          />
      </div>   
    </b-card>
  </div>
</template>

<script>
import vSelect from "vue-select";
import { BRow, BFormGroup, BCardText, BCard } from "bootstrap-vue";

export default {
  components: {
    vSelect,
    BRow,
    BFormGroup,
    BCardText,
    BCard,
  },
  data() {
    return {
      selected_sm: [],
      selected_lg: [],
      selected: [],
      option: ["Square", "Circle", "Dot", "Romboid"],
    };
  },
};
</script>