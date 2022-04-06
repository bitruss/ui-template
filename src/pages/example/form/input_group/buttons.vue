<template>
  <div class="col-md-6 mb-3">
    <b-card header="Group input with buttons">
      <div class="p-3">
        <b-form-group label="Button" label-for="Button">
          <b-input-group >
            <b-form-input placeholder="Button on right" />
            <b-input-group-append>
              <b-button variant="primary"> GO </b-button>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>

        <b-form-group label="SearchLarge" label-for="SearchLarge">
          <b-input-group size="lg">
            <b-input-group-prepend is-text>
                <feather-icon icon="SearchIcon" />
              </b-input-group-prepend>
            <b-form-input placeholder="Button on both side" />
            <b-input-group-append>
              <b-button variant="secondary"> Search  </b-button>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>

        <b-form-group label="Search" label-for="Search">
          <b-input-group >
            <b-input-group-prepend is-text>
                <feather-icon icon="SearchIcon" />
              </b-input-group-prepend>
            <b-form-input placeholder="Button on both side" />
            <b-input-group-append>
              <b-button variant="primary"> Search  </b-button>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>

        <b-form-group label="Searchsm" label-for="Searchsm">
          <b-input-group size="sm">
            <b-input-group-prepend is-text>
                <feather-icon icon="SearchIcon" />
              </b-input-group-prepend>
            <b-form-input placeholder="Button on both side" />
            <b-input-group-append>
              <b-button variant="secondary"> Search  </b-button>
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
  },
};
</script>