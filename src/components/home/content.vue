<template>
  <div class="container-content" style="margin-top: 100px">
    <div class="top">
      <div
        class="div d-flex justify-content-start align-items-center ms-5 my-3"
      >
        <i class="fas fa-book" style="font-size: 20px; margin-right: 15px"> </i>
        <p style="font-size: 20px; margin: 0px">Kayıtlar</p>
      </div>
      <div class="card col-sm-5 col-xs-5 col-lg-5 col-xl-5 col-md-5 offset-md-0" style="width:auto">
        <div
          class="title d-flex justify-content-between align-items-center me-5"
        >
          <div class="card-header fixed">Plaka</div>
          <div class="div">Görevli</div>
          <div class="div">Lokasyon</div>
        </div>
        <ul
          class="list-group list-group-flush d-flex"
          style="width: auto; height: 400px; overflow: auto"
        >
          <li
            v-for="info in infos"
            :key="info.id"
            class="list-group-item d-flex justify-content-between align-items-center"
          >
            <span style="float: left">{{ info.plaka }} </span>
            <span> {{ info.gorevli }} </span>
            <span style="float: right"> {{ info.Lokasyon }} </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      infos: "users/info",
    }),
  },
  created() {
    this.$store.dispatch("users/info");
  },
};
</script>
<style>
</style>