<template>
  <div class="col-md-6 mb-3">
    <b-card header="Group input with dropdown">
      <div class="p-3">
          <b-form-group label="Act0" label-for="Act0">
            <b-input-group>
              <b-input-group-prepend>
                <b-dropdown text="Action" variant="primary">
                  <b-dropdown-item>Action </b-dropdown-item>
                  <b-dropdown-item>Another Action</b-dropdown-item>
                  <b-dropdown-item>Something else here</b-dropdown-item>
                  <b-dropdown-item>Separated link</b-dropdown-item>
                </b-dropdown>
              </b-input-group-prepend>
              <b-form-input placeholder="Dropdown on left" />
            </b-input-group>
          </b-form-group>

          <b-form-group label="Actlarge" label-for="Actlarge">
            <b-input-group size="lg">
              <b-input-group-prepend>
                <b-dropdown variant="secondary">
                  <template #button-content>
                    <feather-icon icon="Edit2Icon" />
                  </template>
                  <b-dropdown-item>Action </b-dropdown-item>
                  <b-dropdown-item>Another Action</b-dropdown-item>
                  <b-dropdown-item>Something else here</b-dropdown-item>
                  <b-dropdown-item>Separated link</b-dropdown-item>
                </b-dropdown>
              </b-input-group-prepend>
              <b-form-input placeholder="Dropdown on both side" />
              <b-input-group-append>
                <b-dropdown text="Action" variant="secondary" right>
                  <b-dropdown-item>Action </b-dropdown-item>
                  <b-dropdown-item>Another Action</b-dropdown-item>
                  <b-dropdown-item>Something else here</b-dropdown-item>
                  <b-dropdown-item>Separated link</b-dropdown-item>
                </b-dropdown>
              </b-input-group-append>
            </b-input-group>
          </b-form-group>



          <b-form-group label="Actmiddle" label-for="Actmiddle">
            <b-input-group>
              <b-input-group-prepend>
                <b-dropdown variant="primary">
                  <template #button-content>
                    <feather-icon icon="Edit2Icon" />
                  </template>
                  <b-dropdown-item>Action </b-dropdown-item>
                  <b-dropdown-item>Another Action</b-dropdown-item>
                  <b-dropdown-item>Something else here</b-dropdown-item>
                  <b-dropdown-item>Separated link</b-dropdown-item>
                </b-dropdown>
              </b-input-group-prepend>
              <b-form-input placeholder="Dropdown on both side" />
              <b-input-group-append>
                <b-dropdown text="Action" variant="primary" right>
                  <b-dropdown-item>Action </b-dropdown-item>
                  <b-dropdown-item>Another Action</b-dropdown-item>
                  <b-dropdown-item>Something else here</b-dropdown-item>
                  <b-dropdown-item>Separated link</b-dropdown-item>
                </b-dropdown>
              </b-input-group-append>
            </b-input-group>
          </b-form-group>



            <b-form-group label="Actsmall" label-for="Actsmall">
            <b-input-group size="sm">
              <b-input-group-prepend>
                <b-dropdown variant="secondary">
                  <template #button-content>
                    <feather-icon icon="Edit2Icon" />
                  </template>
                  <b-dropdown-item>Action </b-dropdown-item>
                  <b-dropdown-item>Another Action</b-dropdown-item>
                  <b-dropdown-item>Something else here</b-dropdown-item>
                  <b-dropdown-item>Separated link</b-dropdown-item>
                </b-dropdown>
              </b-input-group-prepend>
              <b-form-input placeholder="Dropdown on both side" />
              <b-input-group-append>
                <b-dropdown text="Action" variant="secondary" right>
                  <b-dropdown-item>Action </b-dropdown-item>
                  <b-dropdown-item>Another Action</b-dropdown-item>
                  <b-dropdown-item>Something else here</b-dropdown-item>
                  <b-dropdown-item>Separated link</b-dropdown-item>
                </b-dropdown>
              </b-input-group-append>
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
  BButton,
  BCard,
  BInputGroupAppend,
  BInputGroupPrepend,
  BFormGroup,
  BDropdown,
  BDropdownItem,
} from "bootstrap-vue";

export default {
  components: {
    BInputGroup,
    BButton,
    BFormInput,
    BCard,
    BInputGroupAppend,
    BInputGroupPrepend,
    BFormGroup,
    BDropdown,
    BDropdownItem,
  },
};
</script>