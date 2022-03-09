<template>
<div class="col-12 mb-3">
    <b-card header="Icons">
        <div class="pr-3 pl-3 pb-3">
            <b-row>
                <b-col>
                    <b-button variant="primary" class="mr-3 mt-3">
                        <feather-icon icon="HomeIcon" class="mr-2" size="15" />
                        <span class="align-middle">Home</span>
                    </b-button>
                    <b-button variant="warning" class="mr-3 mt-3">
                        <feather-icon icon="StarIcon" class="mr-2" size="15" />
                        <span class="align-middle">Star</span>
                    </b-button>

                    <b-button variant="warning" disabled class="mr-3 mt-3">
                        <feather-icon icon="StarIcon" class="mr-2" size="15" />
                        <span class="align-middle">Star disabled</span>
                    </b-button>

                    <b-button variant="secondary" class="mr-3 mt-3">
                        <feather-icon icon="StarIcon" class="mr-2" size="15" />
                        <span class="align-middle">Star</span>
                    </b-button>

                    <b-button variant="outline-secondary" class="mr-3 mt-3">
                        <feather-icon icon="HomeIcon" class="mr-2" size="15" />
                        <span class="align-middle">outline-secondary</span>
                    </b-button>

                    <b-button variant="outline-primary" class="mr-3 mt-3">
                        <feather-icon icon="HomeIcon" class="mr-2" size="15" />
                        <span class="align-middle">outline-primary</span>
                    </b-button>

                    <b-button variant="outline-success" class="mr-3 mt-3">
                        <feather-icon icon="HomeIcon" class="mr-2" size="15" />
                        <span class="align-middle">outline-success</span>
                    </b-button>

                    <b-button variant="outline-danger" class="mr-3 mt-3">
                        <feather-icon icon="HomeIcon" class="mr-2" size="15" />
                        <span class="align-middle">outline-danger</span>
                    </b-button>

                    <b-button variant="outline-primary" disabled class="mr-3 mt-3">
                        <feather-icon icon="HomeIcon" class="mr-2" size="15" />
                        <span class="align-middle">Disabled</span>
                    </b-button>

                    <b-button variant="primary" class="mr-3 mt-3">
                        <feather-icon icon="HomeIcon" size="15" />
                    </b-button>

                    <b-button variant="primary" class="mr-3 mt-3">
                        <feather-icon icon="SearchIcon" size="15" />
                    </b-button>

                    <b-button variant="primary" class="mr-3 mt-3">
                        <feather-icon icon="CameraIcon" size="15" />
                    </b-button>
                </b-col>
            </b-row>

        </div>
    </b-card>
</div>
</template>

<script>
import {
    BFormInput,
    BRow,
    BCol,
    BFormGroup,
    BCard,
    BButton,
} from "bootstrap-vue";

export default {
    components: {
        BFormInput,
        BFormGroup,
        BRow,
        BCol,
        BCard,
        BButton,
    },
};
</script>
