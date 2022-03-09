 <template>
  <div class="col-12 mb-3">
    <b-card header="Basic with sizes">
      <div class="p-3">
        <b-avatar
          class="mr-3"
          size="sm"
          :src="require('@/assets/avatar.png')"
        />
        <b-avatar
          class="mr-3"
          :src="require('@/assets/avatar.png')"
        />
        <b-avatar
          class="mr-3"
          size="lg"
          :src="require('@/assets/avatar.png')"
        />
        <b-avatar
          class="mr-3"
          size="70px"
          :src="require('@/assets/avatar.png')"
        />

        


    <b-avatar
          class="mr-3"
          size="sm"
          :src="require('@/assets/avatar_.png')"
        />
        <b-avatar
          class="mr-3"
          :src="require('@/assets/avatar_.png')"
        />
        <b-avatar
          class="mr-3"
          size="lg"
          :src="require('@/assets/avatar_.png')"
        />
        <b-avatar
          class="mr-3"
          size="70px"
          :src="require('@/assets/avatar_.png')"
        />
      </div>
    </b-card>
  </div>
</template>

<script>
import { BCard,BAvatar } from "bootstrap-vue";

export default {
  components: {
    BCard,
    BAvatar
  },
};
</script>
