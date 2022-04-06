<template>
  <div class="col-12 mb-3">
    <b-card header="Basic">
      <div class="p-3">
        <b-button variant="outline-primary" @click="$bvToast.show('example-toast')">
          Show toast
        </b-button>

        <!-- toast -->
        <b-toast id="example-toast">
          <template #toast-title>
            <div class="d-flex flex-grow-1 align-items-center mr-1">
              <b-img :src="require('@/assets/logo.png')" class="mr-1" height="18" width="25"/>
              <strong class="mr-auto">Vue Admin</strong>
              <small class="text-muted">11 mins ago</small>
            </div>
          </template>
          <span >Hello, world! This is a toast message. Hope you're doing well..:)</span>
        </b-toast>
      </div>  
    </b-card>
  </div>
</template>

<script>
import { BButton, BToast, BImg ,BCard } from "bootstrap-vue";

export default {
  components: {
    BButton,
    BToast,
    BImg,
    BCard
  }
};
</script>