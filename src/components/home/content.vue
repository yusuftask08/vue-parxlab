<template>
  <div class="container-content">
    <div class="div d-flex justify-content-start align-items-center my-3">
      <i class="fas fa-book" style="font-size: 20px; margin-right: 15px"> </i>
      <p style="font-size: 20px; margin: 0px">Kayıtlar</p>
    </div>
    <div class="card" style="width: 40rem">
      <div class="title d-flex justify-content-between align-items-center me-5">
        <div class="card-header fixed">Plaka</div>
        <div class="div">Görevli</div>
        <div class="div">Lokasyon</div>
      </div>
      <ul
        class="list-group list-group-flush d-flex"
        style="width: auto; height: 200px; overflow: auto"
      >
        <li
          v-for="info in infos"
          :key="info.id"
          class="list-group-item justify-content-between align-items-center"
        >
          <span  style="float:left;">{{ info.plaka }} </span>
          <span style="margin-left: 150px"> {{ info.gorevli }} </span>
          <span style="float:right;"> {{ info.Lokasyon }} </span>
        </li>
      </ul>
    </div>

    <div
      v-if="logsuccess"
      class="alert alert-success my-0 mx-0 d-flex justify-content-center align-items-center"
      role="alert"
    >
      <strong>Giriş Başarılı</strong>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import axios from "axios";

export default {
  data() {
    return {
      logsuccess: false,
    };
  },
  // methods: {
  //   loginsucc() {
  //     (this.logsuccess = true),
  //       setTimeout(() => {
  //         this.logsuccess = false;
  //       }, 2000);
  //     console.log("loginsucc :>> ", loginsucc);
  //   },
  // },

  computed: {
    ...mapGetters({
      isAuthenticated: "users/isAuthenticated",
      infos: "users/info",
    }),
  },
  created() {
    this.$store.dispatch("users/info");
  },
};
</script>
<style>
.container-content {
  width: 320px;
  height: 140px;
  padding: 20px;
  position: absolute;
  top: 40%;
  left: 40%;
  margin-left: -160px;
  margin-top: -70px;
}
</style>