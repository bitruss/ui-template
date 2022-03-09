<template>
  <div class="col-12">
    <b-card header="Basic">
      <div class="p-3">
        <vue-apex-charts
          type="bar"
          height="350"
          :options="apexChatData.options"
          :series="apexChatData.series"
        />
      </div>  
    </b-card>
  </div>
</template>

<script>
import { BCard } from "bootstrap-vue";
import VueApexCharts from 'vue-apexcharts'
import apexChatData from './basic_data'

export default {
  components: {
    BCard,
    VueApexCharts,
  },
  data() {
    return {
      apexChatData
    }
  },
};
</script>
 