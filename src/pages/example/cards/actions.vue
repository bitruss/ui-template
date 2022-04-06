<template>
<div class="col-12 mt-3">
    <b-card>
        <b-card-header >
            <span class="mb-0">Right Action-buttons</span>
            <span class="tools">
                <b-button class="ml-3 mr-1" size="sm"  ><feather-icon icon="XIcon"  href="#"/></b-button>
                <b-button class="ml-3 mr-1" size="sm"  ><feather-icon icon="ChevronDownIcon"  href="#"/></b-button>     
                <b-button class="ml-3 mr-1" size="sm"  ><feather-icon icon="RotateCwIcon"  href="#"/></b-button>     
            </span>
        </b-card-header>

    </b-card>
</div>
</template>

<script>
import {
    BCard,
    BCardHeader,
    BButton
} from "bootstrap-vue";

export default {
    components: {
        BCard,
        BCardHeader,
        BButton
    },
};
</script>
