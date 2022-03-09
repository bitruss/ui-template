<template>
  <div class="col-12 mb-3">
    <b-card header="Colors">
        <div class="p-3">
          <b-card-text >
              <span> for better user experience , 
                <code>primary</code> ,
                <code>default</code> ,
                <code>info</code> ,
                having the same color
              </span>
          </b-card-text>


        <!-- primary -->
        <b-button variant="primary" @click="makeToast('primary')" class="mt-3 mr-3">
          Primary
        </b-button>

        <!-- default -->
        <b-button variant="primary" @click="makeToast()" class="mt-3 mr-3"> Default </b-button>


        <!-- secondary -->
        <b-button variant="secondary" @click="makeToast('secondary')" class="mt-3 mr-3">
          Secondary
        </b-button>

        <!-- warning -->
        <b-button variant="warning" @click="makeToast('warning')" class="mt-3 mr-3">
          Warning
        </b-button>

        <!-- danger -->
        <b-button variant="danger" @click="makeToast('danger')" class="mt-3 mr-3">
          Danger
        </b-button>

        <!-- success -->
        <b-button variant="success" @click="makeToast('success')" class="mt-3 mr-3">
          Success
        </b-button>

 
      </div>
    </b-card>
  </div>
</template>

<script>
import { BButton, BCard,BCardText } from "bootstrap-vue";

export default {
  components: {
    BButton,
    BCard,
    BCardText
  },
  methods: {
    makeToast(variant = null) {
      this.$bvToast.toast("Toast body content", {
        title: `Variant ${variant || "default"}`,
        variant,
        solid: true,
      });
    },
  },
};
</script>