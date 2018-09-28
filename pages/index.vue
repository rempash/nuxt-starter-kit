<template>
  <section>
    <div class="cards text-center justify-content-center">
      <Card v-for="(lawyer, index) in lawyers" :key="index" :lawyer="lawyer"></Card>
    </div>
  </section>
</template>

<script lang="ts">
import {
  Component,
  Vue
} from "nuxt-property-decorator"
import { State } from "vuex-class"
import Card from "~/components/Card.vue"

@Component({
  components: {
    Card
  }
})
export default class extends Vue {
  @State lawyers
}
</script>
<style lang="scss" scoped>
.header {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana,
    sans-serif;
}

.cards {
  display: flex;
  flex-wrap: wrap;
}
</style>