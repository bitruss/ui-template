<template>
  <div class="row">
    <basic />
    <search />
    <selector />
    <remote-query />
    <events />  
  </div>
</template>

<script>
import Basic from "./basic.vue";
import Search from "./search.vue";
import Selector from "./selector.vue";
import RemoteQuery from "./remote_query.vue";
import Events from "./events.vue";
 


export default {
  components: {
    Basic,
    Search,
    Selector,
    Events,
    RemoteQuery
  },
};
</script>