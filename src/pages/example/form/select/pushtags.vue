<template>
  <div class="col-md-6">
    <b-card header="Push-tags">
      <div class="p-3">
        <b-row>
          <b-col>
            <v-select
              multiple
              taggable
              push-tags
              placeholder="Add Options"
              label="title"
            />
          </b-col>
        </b-row>
      </div>
    </b-card>
  </div>
</template>

<script>
import vSelect from "vue-select";
import { BRow, BCard,BCol } from "bootstrap-vue";

export default {
  components: {
    vSelect,
    BRow,
    BCard,
    BCol
  },
};
</script>