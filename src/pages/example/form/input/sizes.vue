<template>
  <div class="col-md-6 mb-4">
      <b-card header="Sizes">
         <div class="p-3">
            <b-form-group label="Large" label-for="largeInput">
              <b-form-input id="largeInput" size="lg" placeholder="Large Input" />
            </b-form-group>

            <b-form-group label="Default" label-for="defaultLabel">
              <b-form-input id="defaultLabel" placeholder="Normal Input" />
            </b-form-group>

            <b-form-group label="Small" label-for="smallInput">
              <b-form-input id="smallInput" size="sm" placeholder="Small Input" />
            </b-form-group>
         </div>
      </b-card>
    </div>
</template>

<script>
import { BFormInput, BFormGroup, BCard } from "bootstrap-vue";

export default {
  components: {
    BFormInput,
    BFormGroup,
    BCard,
  },
};
</script>