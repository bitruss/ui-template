<template>
  <div class="col-md-6  mb-4">
    <b-card header="Format">
       <div class="p-3">
          <b-form-group
            label="Text input with active formatter"
            label-for="input-lazy"
            description="active formatter to lowercase"
          >
            <b-form-input
              id="input-lazy"
              v-model="text2"
              placeholder="Enter your name"
              :formatter="formatter"
            />
          </b-form-group>

          <b-card-text class="mb-0">
            <strong>Value:</strong> {{ text2 }}
          </b-card-text>
       </div>  
    </b-card>
  </div>
</template>

<script>
import { BFormInput, BFormGroup, BCardText, BCard } from "bootstrap-vue";

export default {
  components: {
    BFormInput,
    BCardText,
    BFormGroup,
    BCard,
  },
  data() {
    return {
      text1: "",
      text2: "",
    };
  },
  methods: {
    formatter(value) {
      return value.toLowerCase();
    },
  },
};
</script>