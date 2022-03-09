<template>
<fragment>
    <lan />
    <mail-example />
    <settings />
</fragment>
</template>

<script>
import Lan from "./Lan.vue";
import MailExample from "./MailExample.vue";
import Settings from "./Setting.vue";

export default {
    components: {
        MailExample,
        Settings,
        Lan,
    }
}
</script>
