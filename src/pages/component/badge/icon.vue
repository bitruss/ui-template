<template>
<div class="col-12 mb-3">
    <b-card header="Icons">
       <div class="p-4"> 
            <span class="mt-5 mr-4">
                <feather-icon icon="BellIcon" size="21" class="text-primary" badge="4" />
            </span>

            <span class="mt-5 mr-4">
                <feather-icon icon="BellIcon" size="21" class="text-info" badge="4" badge-classes="badge-info" />
            </span>
            <span class="mt-5 mr-4">
                <feather-icon icon="BellIcon" size="21" class="text-danger" badge="4" badge-classes="badge-danger" />
            </span>
            <span class="mt-5 mr-4">
                <feather-icon icon="MailIcon" size="21" class="text-secondary" badge="4" badge-classes="badge-secondary" />
            </span>
            <span class="mt-5 mr-4">
                <feather-icon icon="MailIcon" size="21" class="text-primary" badge="4" badge-classes="badge-primary" />
            </span>
            <span class="mt-5 mr-4">
                <feather-icon icon="MailIcon" size="21" class="text-warning" badge="4" badge-classes="badge-warning" />
            </span>
       </div>    
    </b-card>
</div>
</template>

<script>
import {
    BAlert,
    BCard,
    BBadge
} from "bootstrap-vue";

export default {
    components: {
        BAlert,
        BCard,
        BBadge
    },
};
</script>
