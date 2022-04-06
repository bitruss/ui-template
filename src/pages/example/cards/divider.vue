<template>
<div class="col-md-6 mt-3">
    <b-card header="Divider">
        <b-row>
            <b-col  cols="4" class="border-right p-3 text-center" >
                <h1>h1</h1>
                <h2>h2</h2>
                <h3>h3</h3>
                <h4>h4</h4>
                <h5>h5</h5>
                <h6>h6</h6>
            </b-col>
            <b-col  cols="8"  >
                <h1 class="align-items-between mb-5 text-center">Top part</h1>
                <div class="border-bottom mb-3 pb-3 text-center">Some text</div>
                <h4 class="align-items-between mb-5 text-center ">Bottom part</h4>
            </b-col>
        </b-row>
    </b-card>
</div>
</template>

<script>
import {
    BCard,
    BButton,
    BRow,
    BCol
} from "bootstrap-vue";

export default {
    components: {
        BCard,
        BButton,
        BRow,
        BCol
    },
};
</script>
