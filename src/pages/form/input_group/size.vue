<template>
  <div class="col-md-6 mb-3">
    <b-card header="Group input with sizes">
      <div class="p-3">
          <b-form-group label="LargeSize" label-for="LargeSize">
            <b-input-group prepend="@" size="lg">
              <b-form-input placeholder="Username" />
            </b-input-group>
          </b-form-group>

          <b-form-group label="MSize" label-for="MSize">
            <b-input-group prepend="@">
              <b-form-input placeholder="Username" />
            </b-input-group>
          </b-form-group>

          <b-form-group label="SmallSize" label-for="SmallSize">
            <b-input-group size="sm" prepend="@">
              <b-form-input placeholder="Username" />
            </b-input-group>
          </b-form-group>
      </div>   
    </b-card>
  </div>
</template>

<script>
import { BInputGroup, BFormInput, BCard , BFormGroup,} from "bootstrap-vue";

export default {
  components: {
    BFormInput,
    BInputGroup,
    BCard,
    BFormGroup,
  },
};
</script>