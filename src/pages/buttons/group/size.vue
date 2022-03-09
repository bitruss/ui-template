<template>
<div class="col-12 mb-3">
    <b-card header="Size">
        <div class="p-3">
            <h6>Put size attributes into button elements</h6>
            <b-row class="mb-2">
                <b-col>
                    <b-card-text>
                        <span>
                            put attributes <code>size="lg"</code> or <code>size="sm"</code>
                            into your b-button component
                        </span>
                    </b-card-text>
                </b-col>
            </b-row>

            <b-row class="mt-3">
                <b-col>
                    <b-button-group>
                        <b-button variant="outline-primary" size="lg">LargeA</b-button>
                        <b-button variant="outline-primary" size="lg">LargeB</b-button>
                        <b-button variant="outline-primary" size="lg">LargeC</b-button>
                    </b-button-group>
                </b-col>
            </b-row>

            <b-row class="mt-3">
                <b-col>
                    <b-button-group>
                        <b-button variant="outline-primary">MiddleA</b-button>
                        <b-button variant="outline-primary">MiddleB</b-button>
                        <b-button variant="outline-primary">MiddleC</b-button>
                    </b-button-group>
                </b-col>
            </b-row>

            <b-row class="mt-3">
                <b-col>
                    <b-button-group>

                        <b-button variant="outline-primary" size="sm">SmallA</b-button>
                        <b-button variant="outline-primary" size="sm">SmallB</b-button>
                        <b-button variant="outline-primary" size="sm">SmallC</b-button>
                    </b-button-group>
                </b-col>
            </b-row>
        </div>
    </b-card>
</div>
</template>

<script>
import {
    BButtonGroup,
    BButton,
    BCard,
    BRow,
    BCol,
    BCardText
} from "bootstrap-vue";

export default {
    components: {
        BButtonGroup,
        BButton,
        BCard,
        BRow,
        BCol,
        BCardText,
    },
};
</script>
