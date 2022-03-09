<template>
<div class="col-12 mb-3">
    <b-card header="Tool bar">
  
            <b-row class="p-3">
                <b-col>
                    <b-button-group class="mr-3">
                        <b-button class="btn-icon" variant="outline-primary">
                            <feather-icon icon="ChevronsLeftIcon" />
                        </b-button>
                        <b-button class="btn-icon" variant="outline-primary">
                            <feather-icon icon="ChevronLeftIcon" />
                        </b-button>
                    </b-button-group>

                    <b-button-group class="mr-3">
                        <b-button class="btn-icon" variant="outline-primary">
                            <feather-icon icon="ChevronRightIcon" />
                        </b-button>
                        <b-button class="btn-icon" variant="outline-primary">
                            <feather-icon icon="ChevronsRightIcon" />
                        </b-button>
                    </b-button-group>
                </b-col>
            </b-row>

            <b-row class="p-3">
                <b-col>
                    <b-button-group class="mb-1">
                        <b-button class="btn-icon" variant="outline-primary">
                            <feather-icon icon="Maximize2Icon" />
                        </b-button>
                        <b-button class="btn-icon" variant="outline-primary">
                            <feather-icon icon="Minimize2Icon" />
                        </b-button>
                        <b-button class="btn-icon" variant="outline-primary">
                            <feather-icon icon="MinimizeIcon" />
                        </b-button>
                        <b-button class="btn-icon" variant="outline-primary">
                            <feather-icon icon="MoveIcon" />
                        </b-button>
                    </b-button-group>
                </b-col>
            </b-row>
      
    </b-card>
</div>
</template>

<script>
import {
    BButtonToolbar,
    BButtonGroup,
    BButton,
    BCard,
    BRow,
    BCol,
} from "bootstrap-vue";

export default {
    components: {
        BButtonToolbar,
        BButtonGroup,
        BButton,
        BCard,
        BRow,
        BCol,
    },
};
</script>
