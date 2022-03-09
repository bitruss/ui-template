<template>
  <div class="col-md-6 mb-3">
    <b-card header="Sizes">
      <div class="p-3">
          <h6>Select with sizes</h6>
          <b-card-text>
            <span>
              <code>.select-size-lg</code> or
              <code>.select-size-sm</code> classes to control size
            </span>
          </b-card-text>

          <b-form-group label="Select-list-sm" class="mt-3">
            <b-input-group  size="sm">
              <b-input-group-prepend is-text >
                <feather-icon icon="LockIcon" />
              </b-input-group-prepend>
              <v-select
                class="select-size-sm"
                placeholder="select"
                :options="listoption"
              />
            </b-input-group>
          </b-form-group>

          <b-form-group label="Select-list-middle">
            <b-input-group>
              <b-input-group-prepend is-text>
                <feather-icon icon="LockIcon" />
              </b-input-group-prepend>
              <v-select placeholder="select" :options="listoption" />
            </b-input-group>
          </b-form-group>

          <b-form-group label="Select-list-large">
            <b-input-group size="lg">
              <b-input-group-prepend is-text  >
                <feather-icon icon="LockIcon" />
              </b-input-group-prepend>
              <v-select
                class="select-size-lg"
                placeholder="select"
                :options="listoption"
              />
            </b-input-group>
          </b-form-group>
      </div>
    </b-card>
  </div>
</template>

<script>
import {
  
  BCardText,
  BCard,
  BFormGroup,
  BInputGroup,
  BInputGroupPrepend,
} from "bootstrap-vue";
import vSelect from "vue-select";

export default {
  components: {
    BCardText,
    BCard,
   
    vSelect,
    BFormGroup,
    BInputGroup,
    BInputGroupPrepend,
  },
  data() {
    return {
      listoption: ["square", "rectangle", "rombo", "romboid"],
    };
  },
};
</script>
