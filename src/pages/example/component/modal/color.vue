<template>
<div class="col-12  mb-3">
    <b-card header="Color">
         <div class="p-3">
                <b-button class="mr-3 " v-b-modal.modal-primary variant="outline-primary">
                    Primary
                </b-button>
                <b-button  class="mr-3 " v-b-modal.modal-seconday variant="outline-secondary">
                    Secondary
                </b-button>
                <b-button  class="mr-3 " v-b-modal.modal-info variant="outline-info">
                    Success
                </b-button>
                <b-button  class="mr-3 " v-b-modal.modal-success variant="outline-success">
                    Success
                </b-button>
                <b-button  class="mr-3 " v-b-modal.modal-danger variant="outline-danger">
                    Danger
                </b-button>
                <b-button  class="mr-3 " v-b-modal.modal-warning variant="outline-warning">
                    Warning
                </b-button>
            

                <!-- modal -->
                <b-modal id="modal-primary" ok-only ok-title="Accept" modal-class="modal-primary" centered title="Primary Modal">
                    <b-card-text>
                        Biscuit chocolate cake gummies. Lollipop I love macaroon bear claw caramels. I love marshmallow tiramisu I love
                        fruitcake I love gummi bears. Carrot cake topping liquorice. Pudding caramels liquorice sweet I love. Donut powder
                        cupcake ice cream tootsie roll jelly.
                    </b-card-text>
                </b-modal>

                <b-modal id="modal-seconday"  cancel-variant="secondary" ok-variant="secondary" ok-title="Accept" modal-class="modal-secondary" centered title="Secondary Modal">
                    <b-card-text>
                        Biscuit chocolate cake gummies. Lollipop I love macaroon bear claw caramels. I love marshmallow tiramisu I love
                        fruitcake I love gummi bears. Carrot cake topping liquorice. Pudding caramels liquorice sweet I love. Donut powder
                        cupcake ice cream tootsie roll jelly.
                    </b-card-text>
                </b-modal>

                <b-modal id="modal-info"  cancel-variant="secondary" ok-variant="info" ok-title="Accept" modal-class="modal-info" centered title="Secondary Modal">
                    <b-card-text>
                        Biscuit chocolate cake gummies. Lollipop I love macaroon bear claw caramels. I love marshmallow tiramisu I love
                        fruitcake I love gummi bears. Carrot cake topping liquorice. Pudding caramels liquorice sweet I love. Donut powder
                        cupcake ice cream tootsie roll jelly.
                    </b-card-text>
                </b-modal>

                <b-modal id="modal-success"  cancel-variant="outline-secondary" ok-variant="success" ok-title="Accept" modal-class="modal-success" centered title="Success Modal">
                    <b-card-text>
                        Biscuit chocolate cake gummies. Lollipop I love macaroon bear claw caramels. I love marshmallow tiramisu I love
                        fruitcake I love gummi bears. Carrot cake topping liquorice. Pudding caramels liquorice sweet I love. Donut powder
                        cupcake ice cream tootsie roll jelly.
                    </b-card-text>
                </b-modal>

                <b-modal id="modal-danger" ok-only ok-variant="danger" ok-title="Accept" modal-class="modal-danger" centered title="Danger Modal">
                    <b-card-text>
                        Biscuit chocolate cake gummies. Lollipop I love macaroon bear claw caramels. I love marshmallow tiramisu I love
                        fruitcake I love gummi bears. Carrot cake topping liquorice. Pudding caramels liquorice sweet I love. Donut powder
                        cupcake ice cream tootsie roll jelly.
                    </b-card-text>
                </b-modal>

                

                <b-modal id="modal-warning" ok-only ok-variant="warning" ok-title="Accept" modal-class="modal-warning" centered title="Warning Modal">
                    <b-card-text>
                        Biscuit chocolate cake gummies. Lollipop I love macaroon bear claw caramels. I love marshmallow tiramisu I love
                        fruitcake I love gummi bears. Carrot cake topping liquorice. Pudding caramels liquorice sweet I love. Donut powder
                        cupcake ice cream tootsie roll jelly.
                    </b-card-text>
                </b-modal>

         </div>
    </b-card>
</div>
</template>

<script>
import {
    BCard,
    BButton,
    VBModal,
    BAlert,
    BCardText
} from "bootstrap-vue";

export default {
    components: {
        BCard,
        BButton,
        VBModal,
        BAlert,
        BCardText
    },
};
</script>
