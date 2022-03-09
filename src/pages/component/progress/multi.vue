<template>
<div class="col-12 mb-3">
    <b-card header="Multi">
         <div class="p-3">
            <b-progress :max="max">
                <b-progress-bar variant="danger" :value="values[0]" show-progress >
                    <span> part-1</span>
                </b-progress-bar>
                <b-progress-bar variant="warning" :value="values[1]" show-progress >
                    <span> part-2</span>
                </b-progress-bar>
                <b-progress-bar variant="primary" :value="values[2]" show-progress >
                    <span> part-3</span>
                </b-progress-bar>
            </b-progress>
         </div>    
    </b-card>
</div>
</template>

<script>
import {
    BCard,
    BProgress,
    BProgressBar
} from "bootstrap-vue";

export default {

    components: {
        BProgress,
        BCard,
        BProgressBar
    },
    data() {
        return {
            values: [15, 50, 10],
            max: 100,
        }
    },

};
</script>
