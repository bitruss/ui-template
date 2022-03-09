<template>
<div class="col-12 mb-3">
    <b-card header="Basic">
        <div class="p-3">
            <b-overlay :show="show" rounded="sm">
                <b-card-text>
                    <span>BootstrapVue's custom </span>
                    <code>b-overlay</code>
                    <span>
                        component is used to visually obscure a particular element or component and its content. It signals to the
                        user of a state change within the element or component and can be used for creating loaders,
                        warnings/alerts, prompts, and more.
                        component is used to visually obscure a particular element or component and its content. It signals to the
                        user of a state change within the element or component and can be used for creating loaders,
                        warnings/alerts, prompts, and more.
                    </span>
                </b-card-text>

            </b-overlay>

            <b-button :disabled="show" class="mt-3 mr-3" variant="outline-primary" @click="show = true">
                Show overlay
            </b-button>

            <b-button variant="primary" class="mt-3 mr-3" @click="show = !show">
                Toggle overlay
            </b-button>
        </div>    
    </b-card>
</div>
</template>

<script>
import {
    BCard,
    BCardText,
    BOverlay,
    BButton,
     
} from "bootstrap-vue";

export default {
    components: {
        BCard,
        BCardText,
        BOverlay,
        BButton,
         
    },
    data: () => ({
        show: false,
    }),
};
</script>
