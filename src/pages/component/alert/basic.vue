<template>
  <div class="col-12 mb-3">
    <b-card header="Basic">
      <div class="p-3">
        <b-alert variant="primary" show>
          <div class="alert-body">
            <span><feather-icon icon="StarIcon" /> <strong>Good Morning!</strong> Start your day with some alerts.</span>
          </div> 
        </b-alert>

        <b-alert variant="secondary" show>
          <div class="alert-body">
            <span> <feather-icon icon="StarIcon" />Start your day with somealerts.</span>
          </div>
        </b-alert>

        <b-alert variant="danger" show>
          <div class="alert-body">
            <span><feather-icon icon="InfoIcon" /><strong>Good Morning!</strong> Start your day with some alerts.</span>
          </div>
        </b-alert>

        <b-alert variant="warning" show>
          <div class="alert-body">
            <span><strong>Good Morning!</strong> Start your day with some alerts.</span>
          </div>
        </b-alert>

        <b-alert variant="success" show>
          <div class="alert-body">
            <span ><strong>Good Morning!</strong> Start your day with some alerts.</span>
          </div>
        </b-alert>

        <b-alert variant="info" show>
          <div class="alert-body">
            <span ><strong>Good Morning!</strong> Start your day with some alerts.</span
            >
          </div>
        </b-alert>

        <b-alert variant="dark" show>
          <div class="alert-body">
            <span><strong>Good Morning!</strong> Start your day with some alerts.</span>
          </div>
        </b-alert>
      </div>  
    </b-card>
  </div>
</template>

<script>
import { BAlert, BCard } from "bootstrap-vue";

export default {
  components: {
    BAlert,
    BCard,
  },
};
</script>
 