<template>
<div class="col-12">

    <h5 class="mb-4 mt-5">#Margin Style</h5>

    <b-list-group class="margin">
        <b-list-group-item href="#">
            <h5 v-b-toggle.accordion-m1>accordion-m1</h5>
            <b-collapse id="accordion-m1">
                <b-card-body>
                    <b-card-text>I start opened because <code>visible</code> is <code>true</code></b-card-text>
                    <b-card-text>this is some text example</b-card-text>
                </b-card-body>
            </b-collapse>
        </b-list-group-item>

        <b-list-group-item href="#">
            <h5 v-b-toggle.accordion-m2>accordion-m2</h5>
            <b-collapse id="accordion-m2" visible>
                <b-card-body>
                    <b-card-text>I start opened because <code>visible</code> is <code>true</code></b-card-text>
                    <b-card-text>this is some text example</b-card-text>
                </b-card-body>
            </b-collapse>
        </b-list-group-item>

        <b-list-group-item href="#">
            <h5 v-b-toggle.accordion-m3>accordion-m3</h5>
            <b-collapse id="accordion-m3">
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
