<template>
<div class="authwrapper">

    <b-card header="Register" class="lghead">
        <div class="p-3"> 
        <p>Welcome to dashboard register!</p>
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

        <b-form-group class="mt-3" label="User type">
            <b-input-group>
                <b-form-checkbox v-model="user_type_selected" value="miner" class="mr-4 mt-1">Miner </b-form-checkbox>
                <b-form-checkbox v-model="user_type_selected" value="cdn_user" class="mr-4 mt-1">CDN user </b-form-checkbox>
            </b-input-group>
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

        <!-- confirm password   -->
        <b-form-group label="Confirm Password">
            <b-input-group>
                <b-input-group-prepend is-text>
                    <feather-icon icon="LockIcon" />
                </b-input-group-prepend>
                <b-form-input v-model="password_confirm" type="password" v-bind:[passWordConfirmState]="passWordSameValidation" placeholder="Confirm Password" />
            </b-input-group>
            <b-form-invalid-feedback v-bind:[passWordConfirmState]="passWordSameValidation">
                Password must be the same
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
                    <b-button variant="secondary" style="padding:0 !important">
                        <b-img :src="require('@/assets/captcha.png')" width="125" />
                    </b-button>
                </b-input-group-append>
            </b-input-group>
        </b-form-group>

        <!-- vcode   -->
        <b-form-group label="Email Verification">
            <b-input-group>
                <b-input-group-prepend is-text>
                    <feather-icon icon="MessageCircleIcon" />
                </b-input-group-prepend>
                <b-form-input v-model="vcode" type="text" placeholder="input your v-code" />
                <b-input-group-append>
                    <b-overlay :show="vsecs<=0?false:true">
                        <b-button variant="secondary" @click="send_vcode"> Send Me V-code </b-button>
                        <template #overlay>
                            <b-spinner small class="mr-3" label="Small Spinner" /> {{vsecs}}s
                        </template>
                    </b-overlay>
                </b-input-group-append>
            </b-input-group>
        </b-form-group>

        <b-form-group>
            <b-form-checkbox id="checkbox-8" class="mt-1" name="checkbox-8" value="Remember_me">
                Remember me
            </b-form-checkbox>
        </b-form-group>

        <!-- submit and reset -->
        <b-button type="submit" variant="primary" class="btn-block"> Register </b-button>

        <b-card-text class="mt-4 text-center"> Already have an account? <a class="goto_login" @click="goto_login">Login</a> </b-card-text>
        </div>  
    </b-card>

    <h6 class="bottomtext mt-4">All rights reserved @template.com </h6>
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
    BButton,
    BImg,
    BOverlay,
    BSpinner,
    BFormCheckbox

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
        BButton,
        BImg,
        BOverlay,
        BSpinner,
        BFormCheckbox
    },

    data() {
        return {
            password: "",
            password_confirm: "",
            email: "",
            vcode: "",
            captcha: "",
            vsecs: 0,
            user_type_selected: ['miner', 'cdn_user']
        };
    },
    computed: {

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
            return this.password == this.password_confirm
        },

        emailState() {
            return this.email.length != 0 ? "state" : null;
        },
        emailValidation() {
            return true
        }

    },
    methods: {
        goto_login() {
            this.$router.push({
                path: '/login'
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
        }
    }

};
</script>
 
