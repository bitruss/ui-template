 <template>
  <div class="row">
    <basic/>
    <sizes/>
    <multi/>
    <push-tags/>
  </div>
</template>

<script>
import Basic from "./basic.vue";
import Sizes from "./sizes.vue";
import Multi from "./multi.vue";
import PushTags from "./pushtags.vue";

export default {
  components: {
    Basic,
    Sizes,
    Multi,
    PushTags
  },
};
</script>