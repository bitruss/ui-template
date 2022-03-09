<template>
<div class="col-12 mb-3">
    <b-card header="Label">
       <div class="p-3">  
        <div >
            <label>No label</label>
            <b-progress value="25" max="100"  show-progress/>
        </div>

        <div class="mt-3">
            <label>Value label</label>
            <b-progress value="35" max="100" show-value variant="secondary"   />
        </div>

        <div class="mt-3">
            <label>Progress label</label>
            <b-progress value="45" max="100" show-progress variant="success"  />
        </div>

        <div class="mt-3">
            <label>Value label with precision</label>
            <b-progress value="55" max="100" precision="2" show-value variant="danger"   />
        </div>

        <div class="mt-3">
            <label>Progress label with precision</label>
            <b-progress value="65" max="100" precision="2" show-progress variant="warning"  />
        </div>

         <div class="mt-3">
            <label>Progress label with precision</label>
            <b-progress value="85" max="100" precision="2" show-progress variant="dark"  />
        </div>
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
    }
};
</script>
