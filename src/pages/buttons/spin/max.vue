<template>
  <div class="col-md-6">
    <b-card header="Min and Max">
      <div class="p-3">
        <p>Spinbuttons have a default range from <code>1</code> to <code>10</code>, which can be changed by setting the min and max props. step with <code>step="3"</code>  </p>
        <b-form-spinbutton  v-model="value" min="1" max="10" class="mt-3 " step="3"  />
      </div>  
    </b-card>
  </div>
</template>

<script>
import { BFormSpinbutton, BCard, BRow } from "bootstrap-vue";

export default {
  components: {
    BFormSpinbutton,
    BCard,
    BRow,
  },
  data: () => ({
    value: 1
  }),
};
</script>