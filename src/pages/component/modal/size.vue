<template>
<div class="col-12  mb-3">
    <b-card header="Sizes">
         <div class="p-3">
                <b-card-text>           
                    <span>put attributes 
                    <code>size="sm"</code> ,
                    <code>size="lg"</code> , 
                    <code>size="xl"</code> to b-modal to change the size </span>
                </b-card-text>


                <b-button v-b-modal.modal-sm variant="outline-primary" class="mr-3 mt-3">
                    Small Modal
                </b-button>
                <b-button v-b-modal.modal-default variant="outline-primary" class="mr-3 mt-3">
                    Default Modal
                </b-button>
                <b-button v-b-modal.modal-lg variant="outline-primary" class="mr-3 mt-3">
                    Large Modal
                </b-button>
                <b-button v-b-modal.modal-xl variant="outline-primary" class="mr-3 mt-3">
                    Extra Large Modal
                </b-button>

                <!-- modal -->

                <b-modal id="modal-sm" button-size="sm" cancel-variant="secondary" ok-only ok-title="Accept" centered size="sm" title="Small Modal">
                    <b-card-text>Biscuit chocolate cake gummies. Lollipop I love macaroon bear claw caramels. I love marshmallow tiramisu I love fruitcake I love gummi bears. Carrot cake topping liquorice. Pudding caramels liquorice sweet I love. Donut powder cupcake ice cream tootsie roll jelly.</b-card-text>
                </b-modal>

                <b-modal id="modal-default" button-size="sm"   ok-title="Accept" centered title="Default Modal">
                    <b-card-text>Biscuit chocolate cake gummies. Lollipop I love macaroon bear claw caramels. I love marshmallow tiramisu I love fruitcake I love gummi bears. Carrot cake topping liquorice. Pudding caramels liquorice sweet I love. Donut powder cupcake ice cream tootsie roll jelly.</b-card-text>
                </b-modal>

                <b-modal id="modal-lg" ok-only ok-title="Accept" centered size="lg" title="Large Modal">
                    <b-card-text>Biscuit chocolate cake gummies. Lollipop I love macaroon bear claw caramels. I love marshmallow tiramisu I love fruitcake I love gummi bears. Carrot cake topping liquorice. Pudding caramels liquorice sweet I love. Donut powder cupcake ice cream tootsie roll jelly.</b-card-text>
                </b-modal>

                <b-modal id="modal-xl" ok-only ok-title="Accept" centered size="xl" title="Extra Large Modal">
                    <b-card-text>Biscuit chocolate cake gummies. Lollipop I love macaroon bear claw caramels. I love marshmallow tiramisu I love fruitcake I love gummi bears. Carrot cake topping liquorice. Pudding caramels liquorice sweet I love. Donut powder cupcake ice cream tootsie roll jelly.</b-card-text>
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
