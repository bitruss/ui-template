<template>
<div class="col-12">
    <h5 class="mb-4">#Basic</h5>
    <b-list-group>
        <b-list-group-item href="#">
            <h5 v-b-toggle.accordion-1>accordion-1</h5>
            <b-collapse id="accordion-1">
                <b-card-body>
                    <b-card-text>I start opened because <code>visible</code> is <code>true</code></b-card-text>
                    <b-card-text>this is some text example</b-card-text>
                </b-card-body>
            </b-collapse>
        </b-list-group-item>

        <b-list-group-item href="#">
            <h5 v-b-toggle.accordion-2>accordion-2</h5>
            <b-collapse id="accordion-2" visible>
                <b-card-body>
                    <b-card-text>I start opened because <code>visible</code> is <code>true</code></b-card-text>
                    <b-card-text>this is some text example</b-card-text>
                </b-card-body>
            </b-collapse>
        </b-list-group-item>

        <b-list-group-item href="#">
            <h5 v-b-toggle.accordion-3>accordion-3</h5>
            <b-collapse id="accordion-3">
                <b-card-body>
                    <b-card-text>I start opened because <code>visible</code> is <code>true</code></b-card-text>
                    <b-card-text>this is some text example</b-card-text>
                </b-card-body>
            </b-collapse>
        </b-list-group-item>

    </b-list-group>

</div>
</template>

<script>
import {
    BListGroup,
    BListGroupItem,
    BCollapse,
    BCardBody,
    BCardText
} from "bootstrap-vue";

export default {
    components: {
        BListGroup,
        BListGroupItem,
        BCollapse,
        BCardBody,
        BCardText
    },
};
</script>
