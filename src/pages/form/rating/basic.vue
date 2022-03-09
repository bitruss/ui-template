<template>
<div class="col-12">
    <h5>#Basic with border/no border , sizes of sm ,lg ,default</h5>
    <div>
        <label for="rating-sm-no-border" class="mr-1">Small rating with no border <code>size="sm" no-border</code></label>
        <b-form-rating v-model="value" no-border variant="warning" inline size="sm" />
    </div>

    <div>
        <label for="rating-md-no-border" class="mr-1">Default rating (medium) with border</label>
        <b-form-rating v-model="value" variant="warning" inline />
    </div>

    <div>
        <label for="rating-lg-no-border" class="mr-1">Large rating with no border <code>size="lg" no-border</code></label>
        <b-form-rating v-model="value" no-border variant="warning" size="lg" inline />
    </div>

    <div>
        <label for="rating-lg-no-border" class="mr-1">
            <code>disabled no-border </code></label>
        <b-form-rating no-border value="2.75" disabled inline />
    </div>

    <p class="mb-0">Value: {{ value }}</p>

</div>
</template>

<script>
import {
    BFormRating,
} from "bootstrap-vue";

export default {
    components: {
        BFormRating,
    },
    data: () => ({
        value: null,
    }),
};
</script>
