<template>
  <div class="col-md-6 mb-3">
    <b-card header="Input with icon">
    <div class="p-3">
        <!-- username -->
        <b-form-group label="Username">
          <b-input-group class="input-group-merge">
            <b-input-group-prepend is-text>
              <feather-icon icon="UserIcon" />
            </b-input-group-prepend>
            <b-form-input placeholder="Username" />
          </b-input-group>
        </b-form-group>

        <!-- email -->

        <b-form-group label="Email">
          <b-input-group class="input-group-lg">
            <b-input-group-prepend is-text>
              <feather-icon icon="MailIcon" />
            </b-input-group-prepend>
            <b-form-input v-model="email" type="email" placeholder="Email"    v-bind:[emailState]="emailValidation" />
          </b-input-group>
          <b-form-invalid-feedback   v-bind:[emailState]="emailValidation" >
            email format error
          </b-form-invalid-feedback>
        </b-form-group>

        <!-- password -->

        <b-form-group label="Password">
          <b-input-group>
            <b-input-group-prepend is-text>
              <feather-icon icon="LockIcon" />
            </b-input-group-prepend>
            <b-form-input
              v-model="password"
              type="password"
              v-bind:[passWordState]="passWordValidation"
              placeholder="Password"
            />
          </b-input-group>
          <b-form-invalid-feedback v-bind:[passWordState]="passWordValidation">
            Your password must be 8-20 characters long.
          </b-form-invalid-feedback>
        </b-form-group>

        <b-form-group label="Select-list">
          <b-input-group class="input-group-sm">
            <b-input-group-prepend is-text>
              <feather-icon icon="LockIcon" />
            </b-input-group-prepend>
            <v-select  class="select-size-sm" placeholder="select" :options="listoption" />
          </b-input-group>
        </b-form-group>

        <!-- checkbox -->

        <b-form-group>
          <b-form-checkbox id="checkbox-8" class="mt-1" name="checkbox-8" value="Remember_me">
            Remember me
          </b-form-checkbox>
        </b-form-group>

        <!-- submit and reset -->

        <b-button type="submit" variant="outline-primary" class="mr-1"> Submit </b-button>
        <b-button type="reset"  variant="primary"> Reset </b-button>
    </div>  
    </b-card>
  </div>
</template>

<script>
import {
  BRow,
  BCol,
  BFormGroup,
  BFormInput,
  BFormCheckbox,
  BForm,
  BButton,
  BFormText,
  BFormDatalist,
  BFormInvalidFeedback,
  BInputGroup,
  BInputGroupPrepend,
  BFormValidFeedback,
  BCard,
} from "bootstrap-vue";

import vSelect from "vue-select";

export default {
  components: {
    BRow,
    BCol,
    BFormGroup,
    BInputGroup,
    BInputGroupPrepend,
    BFormInput,
    BFormCheckbox,
    BForm,
    BFormText,
    BButton,
    BFormDatalist,
    BFormInvalidFeedback,
    BFormValidFeedback,
    BCard,
    vSelect,
  },

  data() {
    return {
      listoption: ["square","rectangle","rombo" ,"romboid"],
      password: "",
      email:"",
    };
  },
  computed: {

    passWordState() {
      return this.password.length != 0 ? "state" : null;
    },
    passWordValidation() {
      return this.password.length > 4 && this.password.length < 13;
    },

    emailState(){
      return this.email.length != 0 ? "state" : null;
    },
    emailValidation(){
      return true
    }
    
  },
  methods: {},
};
</script>
 