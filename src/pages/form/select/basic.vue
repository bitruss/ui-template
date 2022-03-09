<template>
  <div class="col-12 mb-3">
    <b-card header="Basic">
      <div class="p-3">
          <h6>Basic Select</h6>
          <b-card-text>
            <code>vue-select</code>
            <span> accepts arrays of primitive values or objects to use as </span>
            <code>options</code>
            <span> through the options prop:</span>
          </b-card-text>

          <b-form-group class="mt-3">
            <v-select v-model="selected" label="title" :options="option" />
          </b-form-group>

          <h6>Select with Icon</h6>
          <b-card-text>
            <span>Dropdown with <code>feather-icon</code> </span>
          </b-card-text>

          <b-form-group class="mt-3">
            <v-select v-model="selected1" :options="books" label="title">
              <template #option="{ title, icon }">
                <feather-icon :icon="icon" size="16" class="align-middle mr-50" />
                <span> {{ title }}</span>
              </template>
            </v-select>
          </b-form-group>
      </div>    
    </b-card>
  </div>
</template>

<script>
import { BRow, BCol, BFormGroup, BCardText, BCard } from "bootstrap-vue";
import vSelect from "vue-select";

export default {
  components: {
    BRow,
    BCol,
    BFormGroup,
    vSelect,
    BCardText,
    BCard,
  },
  data() {
    return {
      selected: { title: "Square" },
      selected1: {
        title: "Aperture",
        icon: "ApertureIcon",
      },
      option: [
        { title: "Square" },
        { title: "Rectangle" },
        { title: "Rombo" },
        { title: "Romboid" },
      ],
      books: [
        {
          title: "Aperture",
          icon: "ApertureIcon",
        },
        {
          title: "Codepen",
          icon: "CodepenIcon",
        },
        {
          title: "Globe ",
          icon: "GlobeIcon",
        },
        {
          title: "Instagram ",
          icon: "InstagramIcon",
        },
      ],
    };
  },
};
</script>
