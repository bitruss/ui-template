<template>
  <div class="authwrapper">
      <b-overlay :show="show_overlay" rounded="sm">
        <b-card header="Reset Password" class="lghead">
            <div class="p-2 pr-3 pl-3 pb-3"> 
            <!-- email -->
            <b-form-group class="mt-3" label="Email">
              <b-input-group>
                <b-input-group-prepend is-text>
                  <feather-icon icon="MailIcon" />
                </b-input-group-prepend>
                <b-form-input
                  v-model="email"
                  type="email"
                  placeholder="Email"
                  v-bind:[emailState]="emailValidation"
                />
              </b-input-group>
              <b-form-invalid-feedback v-bind:[emailState]="emailValidation">
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
                Your password must be 8-30 characters long.
              </b-form-invalid-feedback>
            </b-form-group>

            <!-- confirm password   -->
            <b-form-group>
              <b-input-group>
                <b-input-group-prepend is-text>
                  <feather-icon icon="LockIcon" />
                </b-input-group-prepend>
                <b-form-input
                  v-model="password_confirm"
                  type="password"
                  v-bind:[passWordConfirmState]="passWordSameValidation"
                  placeholder="Confirm Password"
                />
              </b-input-group>
              <b-form-invalid-feedback
                v-bind:[passWordConfirmState]="passWordSameValidation"
              >
                Password must be the same
              </b-form-invalid-feedback>
            </b-form-group>

            <!-- vcode   -->
            <b-form-group label="Email Verification">
              <b-input-group>
                <b-input-group-prepend is-text>
                  <feather-icon icon="MessageCircleIcon" />
                </b-input-group-prepend>
                <b-form-input
                  v-model="vcode"
                  type="text"
                  placeholder="input your v-code"
                />
                <b-input-group-append>
                  <b-overlay :show="vsecs <= 0 ? false : true">
                    <b-button variant="secondary" @click="send_vcode">
                      Send Me V-code
                    </b-button>
                    <template #overlay>
                      <b-spinner small class="mr-3 mt-3" label="Small Spinner" />
                      {{ vsecs }}s
                    </template>
                  </b-overlay>
                </b-input-group-append>
              </b-input-group>
            </b-form-group>

            <!-- submit and reset -->
            <b-button type="submit" variant="primary" class="btn-block">
              Reset
            </b-button>

            <b-card-text class="mt-4 text-center">
              Already have an account?
              <a class="goto_login" @click="goto_login">Login</a>
            </b-card-text>
          </div>  
      </b-card>
    </b-overlay>

    <h6 class="bottomtext mt-4">All rights reserved @template.com</h6>
    <h6 class="bottomtext mt-1">1988-2022</h6>
  </div>
</template>

<script>
import {
  BCard,
  BCardTitle,
  BCardText,
  BFormGroup,
  BInputGroup,
  BFormInput,
  BInputGroupPrepend,
  BInputGroupAppend,
  BFormInvalidFeedback,
  BAlert,
  BFormCheckbox,
  BButton,
  BImg,
  BOverlay,
} from "bootstrap-vue";

export default {
  components: {
    BCard,
    BCardTitle,
    BCardText,
    BFormGroup,
    BFormInput,
    BInputGroup,
    BInputGroupPrepend,
    BInputGroupAppend,
    BFormInvalidFeedback,
    BAlert,
    BFormCheckbox,
    BButton,
    BImg,
    BOverlay,
  },

  data() {
    return {
      password_confirm: "",
      password: "",
      email: "",
      show_overlay: false,
      vsecs: 0,
      vcode: "",
      captcha: "",
    };
  },
  computed: {
    passWordState() {
      return this.password.length != 0 ? "state" : null;
    },
    passWordValidation() {
      return this.password.length > 4 && this.password.length < 30;
    },

    passWordState() {
      return this.password.length != 0 ? "state" : null;
    },

    passWordConfirmState() {
      return this.password_confirm.length != 0 ? "state" : null;
    },

    passWordValidation() {
      return this.password.length > 4 && this.password.length < 30;
    },
    passWordSameValidation() {
      return this.password == this.password_confirm;
    },

    emailState() {
      return this.email.length != 0 ? "state" : null;
    },
    emailValidation() {
      return true;
    }
  },
  methods: {
    goto_login() {
      this.$router.push({ path: "/login" });
    },

    send_vcode() {
      this.vsecs = 30;
      var x = setInterval(() => {
        this.vsecs--;
        if (this.vsecs < 0) {
          clearInterval(x);
        }
      }, 1000);
    },
  }
};
</script>
 
