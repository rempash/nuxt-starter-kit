<template>
  <div class="card" style="width: 18rem;">
    <img class="card-img-top" :src="lawyer.img" :alt="lawyer.name">
    <div class="card-body">
      <h5 class="card-title">{{ lawyer.name }}</h5>
      <p class="card-text">{{ lawyer.position }}</p>
    </div>
  </div>
</template>
<script lang="ts">
import {
  Component,
  Prop,
  Vue
} from "nuxt-property-decorator"

@Component({})
export default class Card extends Vue {
  @Prop() lawyer
}
</script>
<style scoped>
.card {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana,
    sans-serif;
  padding: 1rem;
  margin: 0.25rem;
  border: 0.25rem solid gainsboro;
}
</style>
