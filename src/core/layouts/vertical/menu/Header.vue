<template>
  <li class='navigation-header text-truncate' >
    <span>{{name}}</span>
  </li>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
    },
  }
}
</script>

 
