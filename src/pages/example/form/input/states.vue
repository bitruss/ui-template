
<template>
  <div class="col-md-6  mb-4">
    <b-card header="input with states">
       <div class="p-3">
        <!-- valid input -->
          <b-form-group label="Valid State" label-for="input-valid">
            <b-form-input id="input-valid" :state="true" placeholder="Valid" />
            <b-form-valid-feedback> This is valid state. </b-form-valid-feedback>
          </b-form-group>

          <!-- invalid input -->
          <b-form-group label="Invalid State" label-for="input-invalid">
            <b-form-input
              id="input-invalid"
              :state="false"
              placeholder="Invalid"
            />
            <b-form-invalid-feedback>
              This is invalid state.
            </b-form-invalid-feedback>
          </b-form-group>
       </div>  
    </b-card>
  </div>
</template>

<script>
import {
  BFormInput,
  BRow,
  BCol,
  BFormInvalidFeedback,
  BFormValidFeedback,
  BFormGroup,
  BCard,
} from "bootstrap-vue";

export default {
  components: {
    BFormInput,
    BFormInvalidFeedback,
    BFormValidFeedback,
    BRow,
    BFormGroup,
    BCol,
    BCard,
  },
};
</script>