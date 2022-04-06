<template>
<div class="col-12 mb-3">
    <b-card header="Basic">
        <div class="p-3">
            <div >
                <b-card-text class="mb-0">
                    <h6>Reticulating splines… {{ value+'%' }}</h6>               
                </b-card-text>
                <b-progress v-model="value" max="100" />
            </div>
            <div >
                <b-card-text class="mb-0">
                <h6>Reticulating splines… {{ value1+'%' }}</h6>
                </b-card-text>
                <b-progress v-model="value1" max="100" />
            </div>
            <div >
                <b-card-text class="mb-0">
                    <h6>Reticulating splines… {{ value2+'%' }}</h6>
                </b-card-text>
                <b-progress v-model="value2" max="100" />
            </div>

            <div >
                <b-card-text class="mb-0">
                    <h6>Reticulating splines… {{ value3+'%' }}</h6>
                </b-card-text>
                <b-progress v-model="value3" max="100" />
            </div>

            <div >
                <b-card-text class="mb-0">
                    <h6>Reticulating splines… {{ value4+'%' }}</h6>
                </b-card-text>
                <b-progress v-model="value4" max="100" />
            </div>
        </div>    
    </b-card>
</div>
</template>

<script>
import {
    BCard,
    BProgress,
    BCardText
} from "bootstrap-vue";

export default {

    components: {
        BProgress,
        BCard,
        BCardText
    },
    data() {
        return {
            value: 0,
            value1: 25,
            value2: 50,
            value3: 75,
            value4: 100,
        }
    },
};
</script>
