<template>
  <div class="col-md-6">
    <b-card header="Basic">
      <div class="p-3">
        <label for="demo-sb">Spin Button</label>
        <p>Spin Button with different sizes <code> size="sm"</code> or  <code> size="lg"</code> </p>
        <b-form-spinbutton   v-model="value" min="1" max="100" size="sm" />
        <b-form-spinbutton  class="mt-3" v-model="value" min="1" max="100"  />
        <b-form-spinbutton  class="mt-3" v-model="value" min="1" max="100"  size="lg"/>
        <h6 class="mt-3">Value: {{ value }}</h6>
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