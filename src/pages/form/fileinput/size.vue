<template>
<div class="col-12 mb-3">
    <b-card header="Sizes">
        <div class="p-3">
                <b-card-text>
                    <span>Sizes with attributes of <code>size="sm"</code> or
                        <code>size="lg"</code>
                    </span>
                </b-card-text>

                <b-input-group class="mt-3" size="sm">
                    <b-input-group-prepend is-text>
                        <feather-icon icon="FileIcon" />
                    </b-input-group-prepend>
                    <b-form-file size="sm" placeholder="Choose a file or drop it here..." drop-placeholder="Drop file here..." />
                </b-input-group>

                <b-input-group class="mt-3">
                    <b-input-group-prepend is-text>
                        <feather-icon icon="FileIcon" />
                    </b-input-group-prepend>
                    <b-form-file placeholder="Choose a file or drop it here..." drop-placeholder="Drop file here..." />
                </b-input-group>

                <b-input-group class="mt-3" size="lg">
                    <b-input-group-prepend is-text>
                        <feather-icon icon="FileIcon" />
                    </b-input-group-prepend>
                    <b-form-file size="lg" placeholder="Choose a file or drop it here..." drop-placeholder="Drop file here..." />
                </b-input-group>
        </div>       
    </b-card>
</div>
</template>

<script>
import {
    BFormFile,
    BCard,
    BCardText,
    BInputGroup,
    BInputGroupPrepend
} from "bootstrap-vue";

export default {
    components: {
        BFormFile,
        BCard,
        BCardText,
        BInputGroup,
        BInputGroupPrepend
    },
};
</script>
