<template>
<div class="col-12 mb-3">
    <b-card header="Sizes">
        <div class="p-3">
            <p class="mb-3">set both <code>v-model</code> attribute and  <code>total-rows</code> attribute</p>
            <b-pagination v-model="currentPage" :total-rows="rows"  size="sm"/>
            <b-pagination v-model="currentPage" :total-rows="rows"  />
            <b-pagination v-model="currentPage" :total-rows="rows"  size="lg"/>
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
        rows: 100,
    }),

};
</script>
