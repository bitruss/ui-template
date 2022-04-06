<template>
  <div class="col-md-6 mt-3">
    <b-card header="Colors">
      <div class="p-3">
        <label for="demo-sb">Spin Button with Colors</label>
        <p>Color with class attributes <code>btn-primary</code>
        <code>btn-secondary</code> <code>btn-warning</code>
        <code>btn-danger</code> <code>btn-success</code>
        <code>btn-info</code> <code>btn-dark</code>
          </p>
        <b-form-spinbutton  class="mt-3"  v-model="value" min="1" max="100"   />
        <b-form-spinbutton  class="mt-3 btn-primary"  v-model="value" min="1" max="100"   />
        <b-form-spinbutton  class="mt-3 btn-secondary"  v-model="value" min="1" max="100"  />
        <b-form-spinbutton  class="mt-3 btn-warning"  v-model="value" min="1" max="100"  />
        <b-form-spinbutton  class="mt-3 btn-danger"  v-model="value" min="1" max="100"  />
        <b-form-spinbutton  class="mt-3 btn-success"  v-model="value" min="1" max="100"  />
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
    value: 50
  }),
};
</script>