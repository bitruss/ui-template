<template>
 <div class="col-12 mb-3">
    <b-card header="counting">
      <div class="pl-3 pr-3 pb-3 pt-1">
          <b-alert
            :show="dismissCountDown"
            class="mb-0"
            variant="primary"
            @dismissed="dismissCountDown = 0"
            @dismiss-count-down="countDownChanged"
          >
            <div class="alert-body">
              <span>This alert will dismiss after {{ dismissCountDown }} seconds...</span>
            </div>
          </b-alert>

          <!-- trigger button -->
          <b-button variant="primary" class="mt-3" @click="showAlert">
            Show alert with count-down timer
          </b-button>
      </div>   
    </b-card>
 </div>
</template>

<script>
import { BAlert, BButton ,BCard} from 'bootstrap-vue'

export default {
  components: {
    BAlert,
    BButton,
    BCard
  },
  data() {
    return {
      dismissSecs: 6,
      dismissCountDown: 0,
    }
  },
   methods: {
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs
    },
  },
}
</script>