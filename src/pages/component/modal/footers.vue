<template>
  <div class="col-12  mb-3">
    <b-card header="Footer setting">
      <div class="p-3">
        <b-button v-b-modal.modal-footer-sm variant="outline-primary" class=" mr-3">
          Small Footer Buttons
        </b-button>

        <b-button v-b-modal.modal-no-footer variant="outline-primary" class=" mr-3">
          cancel-disabled & ok-disabled
        </b-button>

        <!-- modal -->
        <b-modal
          id="modal-footer-sm"
          title="BootstrapVue"
          button-size="sm"
          ok-title="Accept"
          cancel-title="Close"
          cancel-variant="secondary"
        >
          <b-card-text>
            This modal has small footer buttons. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. A cumque quo delectus, aspernatur quasi
            sint vitae reiciendis quae? Itaque minima atque quae corporis impedit
            repellat recusandae consectetur voluptas, at rerum?
          </b-card-text>
        </b-modal>

        <!-- modal -->
        <b-modal
          id="modal-no-footer"
          title="BootstrapVue"
          cancel-disabled
          ok-disabled
          button-size="sm"
          cancel-title="Close"
          cancel-variant="outline-secondary"
          ok-title="Accept"
        >
          <b-card-text>
            Tootsie roll oat cake I love bear claw I love caramels caramels halvah
            chocolate bar. Cotton candy gummi bears pudding pie apple pie cookie.
            Cheesecake jujubes lemon drops danish dessert I love caramels powder.
          </b-card-text>
        </b-modal>
      </div>  
    </b-card>
  </div>
</template>

<script>
import { BCard, BButton, VBModal, BAlert, BCardText } from "bootstrap-vue";

export default {
  components: {
    BCard,
    BButton,
    VBModal,
    BAlert,
    BCardText,
  },
};
</script>
