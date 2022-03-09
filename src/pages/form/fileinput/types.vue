<template>
<div class="col-12 mb-3">
    <b-card header="Types">
        <div class="p-3">
                <!-- Accept all image formats by IANA media type wildcard-->
                <label for="wildcard">Accept all image</label>
                <b-input-group >
                    <b-input-group-prepend is-text>
                        <feather-icon icon="ImageIcon" />
                    </b-input-group-prepend>
                    <b-form-file id="wildcard" accept="image/*" />
                </b-input-group>

                <!-- Accept specific image formats by IANA type -->
                <label for="IANA" class="mt-3">Accept specific image formats by IANA type</label>
                <b-input-group >
                    <b-input-group-prepend is-text>
                        <feather-icon icon="ImageIcon" />
                    </b-input-group-prepend>
                    <b-form-file id="IANA" accept="image/jpeg, image/png, image/gif" />
                </b-input-group>
                <!-- Accept specific image formats by extension -->
                <label for="extension" class="mt-3">Accept specific image formats by extension</label>
                <b-input-group >
                    <b-input-group-prepend is-text>
                        <feather-icon icon="ImageIcon" />
                    </b-input-group-prepend>
                    <b-form-file id="extension" accept=".jpg, .png, .gif" />
                </b-input-group>
        </div>        
    </b-card>
</div>
</template>

<script>
import {
    BFormFile,
    BCard,
    BInputGroupPrepend,
    BInputGroup
} from "bootstrap-vue";

export default {
    components: {
        BFormFile,
        BCard,
        BInputGroupPrepend,
        BInputGroup
    },
};
</script>
