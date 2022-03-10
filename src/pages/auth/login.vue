<template>
<div class="authwrapper">
    <b-overlay :show="show_overlay" rounded="sm">
        <b-card header="LOGIN" class="lghead">
           <div class="p-3"> 
                <p>Welcome to dashboard login!</p>
                <b-alert variant="primary" show class="mt-3">
                    <div class="alert-body">
                        <span>
                            <div class="float-right">
                                <feather-icon icon="InfoIcon" />Demo Accounts
                            </div>
                            <div>Email: admin@test.com</div>
                            <div>Password: admin</div>
                        </span>
                    </div>
                </b-alert>

                <!-- email -->
                <b-form-group class="mt-3" label="Email">
                    <b-input-group>
                        <b-input-group-prepend is-text>
                            <feather-icon icon="MailIcon" />
                        </b-input-group-prepend>
                        <b-form-input v-model="email" type="email" placeholder="Email" v-bind:[emailState]="emailValidation" />
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
                        <b-form-input v-model="password" type="password" v-bind:[passWordState]="passWordValidation" placeholder="Password" />
                    </b-input-group>
                    <b-form-invalid-feedback v-bind:[passWordState]="passWordValidation">
                        Your password must be 8-30 characters long.
                    </b-form-invalid-feedback>
                </b-form-group>

                <!-- captcha   -->
                <b-form-group label="Captcha">
                    <b-input-group>
                        <b-input-group-prepend is-text>
                            <feather-icon icon="KeyIcon" />
                        </b-input-group-prepend>
                        <b-form-input v-model="captcha" type="text" placeholder="input your captcha" />
                        <b-input-group-append>
                            <b-button variant="secondary" style="padding: 0 !important">
                                <b-img :src="require('@/assets/captcha.png')" width="125" />
                            </b-button>
                        </b-input-group-append>
                    </b-input-group>
                </b-form-group>

                <b-form-group>
                    <b-form-checkbox id="checkbox-8" class="mt-1" name="checkbox-8" value="Remember_me">
                        Remember me
                    </b-form-checkbox>
                </b-form-group>

                <!-- submit and reset -->
                <b-button type="submit" variant="primary" class="btn-block" @click="login" :disabled="!(passWordValidation && emailValidation)">
                    Login
                </b-button>
                <b-button type="submit" variant="secondary" class="btn-block" @click="goto_forgetpass">
                    Forget my password
                </b-button>

                <b-card-text class="mt-4 text-center">
                    New on our platform?
                    <a class="goto_register" @click="goto_register">Create an account</a>
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
            password: "",
            email: "",
            show_overlay: false,
            vsecs: 0,
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

        emailState() {
            return this.email.length != 0 ? "state" : null;
        },
        emailValidation() {
            return true;
        },
    },
    methods: {
        goto_register() {
            this.$router.push({
                path: "/register",
            });
        },
        goto_forgetpass() {
            this.$router.push({
                path: "/forgetpass",
            });
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
        async login() {
            this.show_overlay = true;
            let apir = await this.$api.user.login(this.email, this.password);
            this.show_overlay = false;
            if (apir.status <= 0) {
                this.$bvToast.toast(apir.msg, {
                    title: `Error`,
                    variant: "danger",
                    solid: true,
                    toaster: "b-toaster-top-center",
                });
                return;
            } else {
                this.$store.commit("auth/UPDATE_MY_LOGIN_ROLES_PERMISSIONS", {
                    web_token: apir.result.web_token,
                    roles: apir.result.roles,
                    permissions: apir.result.permissions,
                });
                this.$router.push({
                    path: "/",
                });
            }
        },
    },
};
</script>

