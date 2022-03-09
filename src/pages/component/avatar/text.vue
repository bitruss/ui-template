<template>
<div class="col-12 mb-3">
    <b-card header="Text">
        <div class="p-3">
            <div class="mt-3">
                <b-avatar variant="primary" text="PI" class="mr-3" />
                <b-avatar variant="secondary" text="PI" class="mr-3" />
                <b-avatar variant="success" text="PI" class="mr-3" />
                <b-avatar variant="danger" text="PI" class="mr-3" />
                <b-avatar variant="warning" text="PI" class="mr-3" />
            </div>

            <div class="mt-3">
                <b-avatar variant="primary" class="mr-3">
                    <feather-icon icon="HomeIcon" />
                </b-avatar>
                <b-avatar variant="success" class="mr-3">
                    <feather-icon icon="BellIcon" />
                </b-avatar>
                <b-avatar variant="info" class="mr-3">
                    <feather-icon icon="UserIcon" />
                </b-avatar>
                <b-avatar variant="danger" class="mr-3">
                    <feather-icon icon="MessageSquareIcon" />
                </b-avatar>
                <b-avatar variant="warning" class="mr-3">
                    <feather-icon icon="SearchIcon" />
                </b-avatar>
            </div>
        </div>
    </b-card>
</div>
</template>

<script>
import {
    BCard,
    BAvatar
} from "bootstrap-vue";

export default {
    components: {
        BCard,
        BAvatar
    },
};
</script>
