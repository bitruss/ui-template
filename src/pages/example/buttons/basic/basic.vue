<template>
  <div class="col-12 mb-3">
    <b-card header="Basic">
      <div class="pl-3 pr-3 pb-3">
        <b-row>
            <b-col >
              <b-button variant="primary" class="mr-3 mt-3"> Primary </b-button>
              <b-button variant="secondary" class="mr-3 mt-3"> Secondary </b-button>
              <b-button variant="info" class="mr-3 mt-3"> Info </b-button>
              <b-button variant="success" class="mr-3 mt-3"> Success </b-button>
              <b-button variant="danger" class="mr-3 mt-3"> Danger </b-button>
              <b-button variant="warning" class="mr-3 mt-3"> Warning </b-button>
            </b-col>
        </b-row>
      </div>
    </b-card>
  </div>
</template>

<script>
import {
  BFormInput,
  BRow,
  BCol,
  BFormGroup,
  BCard,
  BButton,
} from "bootstrap-vue";

export default {
  components: {
    BFormInput,
    BFormGroup,
    BRow,
    BCol,
    BCard,
    BButton,
  },
};
</script>