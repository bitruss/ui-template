<template>
  <div class="col-12 mt-5">
    <h5 class="mb-3">#WithIcon</h5>
    <b-list-group>
      <b-list-group-item class="d-flex">
        <span class="mr-3">
          <feather-icon icon="InstagramIcon" size="16" />
        </span>
        <span>Cupcake sesame snaps dessert marzipan.</span>
      </b-list-group-item>

      <b-list-group-item class="d-flex">
        <span class="mr-3">
          <feather-icon icon="FacebookIcon" size="17" />
        </span>
        <span>Jelly beans jelly-o gummi bears chupa chups marshmallow.</span>
      </b-list-group-item>

      <b-list-group-item class="d-flex">
        <span class="mr-3">
          <feather-icon icon="TwitterIcon" size="16" />
        </span>
        <span>Bonbon macaroon gummies pie jelly</span>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import { BCard, BListGroup, BListGroupItem } from "bootstrap-vue";

export default {
  components: {
    BListGroup,
    BListGroupItem,
  },
};
</script>
