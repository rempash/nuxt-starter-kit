<template>
  <div>
    <h3 class="header text-center py-3">Dogovor24 Frontend Starter Kit</h3>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <img src="https://dogovor24.kz/img/icons/logo.png" alt="" class="navbar-brand">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="nuxt-nav">
            <ul class="navbar-nav">
              <li class="nav-item" v-for="(item, index) of menu" :key="index">
                <nuxt-link :to="item.path" class="nav-link">{{ item.title }}</nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    <nuxt/>
  </div>
</template>
<script lang="ts">
import {
  Component,
  Vue
} from "nuxt-property-decorator";
import {menuItem} from "../interfaces/menuItem";
import { State } from 'vuex-class';

@Component({
  
})
export default class extends Vue {

  @State private menu;

}
</script>
<style lang="scss">
  .navbar-brand{
    margin-top: -5px;
    width: 130px;
  }
</style>

