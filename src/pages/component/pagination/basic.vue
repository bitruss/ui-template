<template>
<div class="col-12 mb-3">
    <b-card header="Basic">
        <div class="p-3">
            <p class="mb-3">set both <code>v-model</code> attribute and  <code>total-rows</code> attribute
            and don't forget <code>per-page</code> attribute
            </p>
            <b-pagination v-model="currentPage" :total-rows="rows" :per-page="per_page" />
        </div>    
    </b-card>
</div>
</template>

<script>
import {
    BCard,
    BPagination
} from "bootstrap-vue";

export default {
    components: {
        BCard,
        BPagination
    },
    data: () => ({
        currentPage: 1,
        rows: 0,
        per_page:5,
    }),

};
</script>
