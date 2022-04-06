<template>
<div class="col-12 mt-5">
    <h5>#Colors</h5>

    <div>
        <code>size="sm" inline no-border variant="primary"</code>
        <b-form-rating v-model="value" no-border variant="primary" inline size="sm" />
    </div>

    <div>
        <code>size="sm" inline no-border variant="secondary"</code>
        <b-form-rating v-model="value" no-border variant="secondary" inline size="sm" />
    </div>

    <div>
        <code>size="sm" inline no-border variant="warning"</code>
        <b-form-rating v-model="value" no-border variant="warning" inline size="sm" />
    </div>

    <div>
        <code>size="sm" inline no-border variant="success"</code>
        <b-form-rating v-model="value" no-border variant="success" inline size="sm" />
    </div>

    <div>
        <code>size="sm" inline no-border variant="danger"</code>
        <b-form-rating v-model="value" no-border variant="danger" inline size="sm" />
    </div>

    <div>
        <code>size="sm" inline no-border variant="info"</code>
        <b-form-rating v-model="value" no-border variant="info" inline size="sm" />
    </div>

    <div>
        <code>size="sm" inline no-border variant="dark"</code>
        <b-form-rating v-model="value" no-border variant="dark" inline size="sm" />
    </div>

    <p class="mt-1 mb-0">Value: {{ value }}</p>
</div>
</template>

<script>
import {
    BFormRating,
    BCard
} from "bootstrap-vue";

export default {
    components: {
        BFormRating,
        BCard,
    },
    data: () => ({
        value: null,
    }),
};
</script>
