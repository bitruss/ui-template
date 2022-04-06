<template>
  <div class="col-12  mb-4">
    <b-card header="Basic">
      <div class="p-3">
          <b-row>
            <b-col md="6" xl="4"  >
              <b-form-group label="Basic Input" label-for="basicInput">
                <b-form-input id="basicInput" placeholder="Enter Email" />
              </b-form-group>
            </b-col>

            <b-col md="6" xl="4"   >
              <b-form-group
                label="Input text with help eg. someone@example.com"
                label-for="InputHelp"
              >
                <b-form-input id="InputHelp" placeholder="Enter Help" />
              </b-form-group>
            </b-col>

            <b-col md="6" xl="4"  >
              <b-form-group label="Disabled Input" label-for="disabledInput">
                <b-form-input id="disabledInput" disabled />
              </b-form-group>
            </b-col>

            <b-col md="6" xl="4" >
              <b-form-group label="With Helper Text" label-for="helperInput">
                <b-form-input id="helperInput" placeholder="Name" />
              </b-form-group>
            </b-col>

            <b-col md="6" xl="4" >
              <b-form-group label="With Helper Text" label-for="helperInput">
                <b-form-input id="helperInput" placeholder="Name" />
              </b-form-group>
            </b-col>
          </b-row>
       </div>
    </b-card>
  </div>

</template>

<script>
import { BFormInput, BRow, BCol, BFormGroup, BCard } from "bootstrap-vue";

export default {
  components: {
    BFormInput,
    BFormGroup,
    BRow,
    BCol,
    BCard,
  },
};
</script>