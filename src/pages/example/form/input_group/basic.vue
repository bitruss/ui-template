<template>
    <div class="col-md-6 mb-3">
      <b-card header="Basic">
        <div class="p-3">
          <!-- basic search -->
          <b-form-group label="Search" label-for="Search">
            <b-input-group>
              <b-input-group-prepend is-text>
                <feather-icon icon="SearchIcon" />
              </b-input-group-prepend>
              <b-form-input placeholder="Search" />
            </b-input-group>
          </b-form-group>

          <b-form-group label="Password Input" label-for="basic-password">
            <b-input-group>
              <b-form-input id="basic-password" placeholder="Your Password" />
              <b-input-group-append is-text>
                <feather-icon icon="EyeOffIcon" class="cursor-pointer" />
              </b-input-group-append>
            </b-input-group>
          </b-form-group>

          <b-form-group label="Money" label-for="Money">
              <b-input-group prepend="$" append=".00">
                <b-form-input placeholder="100" />
              </b-input-group>
          </b-form-group>

          <!-- textarea -->
          <b-form-group label="Textarea" label-for="Textarea">
            <b-input-group prepend="With textarea">
              <b-form-textarea />
            </b-input-group>
          </b-form-group>
        </div>  
      </b-card>
    </div>
</template>

<script>
import {
  BInputGroup,
  BFormInput,
  BInputGroupPrepend,
  BInputGroupAppend,
  BFormTextarea,
  BCard,
  BFormGroup,
} from "bootstrap-vue";

export default {
  components: {
    BCard,
    BFormTextarea,
    BInputGroup,
    BFormInput,
    BInputGroupPrepend,
    BInputGroupAppend,
    BFormGroup,
  },
  computed: {
    passwordToggleIcon() {
      // return this.passwordFieldType === 'password' ? 'EyeIcon' : 'EyeOffIcon'
    },
  },
};
</script>