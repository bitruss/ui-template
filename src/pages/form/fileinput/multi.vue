<template>
<div class="col-12 mb-3">
    <b-card header="Multi-Files">
        <div class="p-3">
            <b-input-group>
                <b-input-group-prepend is-text>
                    <feather-icon icon="FileIcon" />
                </b-input-group-prepend>
                <b-form-file v-model="files" placeholder="Choose a file or drop it here..." drop-placeholder="Drop file here..." multiple />
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
    BInputGroupPrepend,
    BInputGroup
} from "bootstrap-vue";

export default {
    components: {
        BFormFile,
        BCard,
        BCardText,
        BInputGroupPrepend,
        BInputGroup
    },
    data() {
        return {
            files: null,
        };
    },
};
</script>
