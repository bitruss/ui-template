<template>
<div class="col-12">
    <b-card header="Basic">
        <div class="p-3 pt-4">
            <b-input-group class="mt-3">
                <b-input-group-prepend is-text>
                    <feather-icon icon="FileIcon" />
                </b-input-group-prepend>
                <b-form-file   v-model="file" placeholder="Choose a file or drop it here..." drop-placeholder="Drop file here..." />
            </b-input-group>

            <b-card-text class="mt-1">
                Selected file: <strong>{{ file ? file.name : "" }}</strong>
            </b-card-text>
        </div>    
    </b-card>
</div>
</template>

<script>
import {
    BInputGroup,
    BInputGroupPrepend,
    BFormFile,
    BCard,
    BCardText
} from "bootstrap-vue";

export default {
    components: {
        BFormFile,
        BCard,
        BCardText,
        BInputGroup,
        BInputGroupPrepend,
    },
    data() {
        return {
            file: null,
        };
    },
};
</script>
