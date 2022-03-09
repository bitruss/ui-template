<template>
<div class="col-12 mb-3">
    <b-card header="Striped style">
        <div class="p-3">
            <b-progress value="25" max="100" striped  />
            <b-progress value="35" max="100" striped variant="secondary"  class="mt-3" />
            <b-progress value="45" max="100" striped variant="success"  class="mt-3" />
            <b-progress value="55" max="100" striped variant="danger"   class="mt-3"/>
            <b-progress value="65" max="100" striped variant="warning"  class="mt-3" />
            <b-progress value="75" max="100" striped variant="info"  class="mt-3" />
            <b-progress value="85" max="100" striped variant="dark"  class="mt-3" />
        </div>    
    </b-card>
</div>
</template>

<script>
import {
    BCard,
    BProgress
} from "bootstrap-vue";

export default {

    components: {
        BProgress,
        BCard
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
