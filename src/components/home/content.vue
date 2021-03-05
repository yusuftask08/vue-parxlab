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
        class="list-group list-group-flush"
        style="width: auto; height: 200px; overflow: auto"
      >
        <li class="list-group-item">{{ infos.plaka }}</li>
        <li class="list-group-item">Vestibulum at eros</li>
        <li class="list-group-item">Cras justo odio</li>
        <li class="list-group-item">Dapibus ac facilisis in</li>
        <li class="list-group-item">Vestibulum at eros</li>
        <li class="list-group-item">Cras justo odio</li>
        <li class="list-group-item">Dapibus ac facilisis in</li>
        <li class="list-group-item">Vestibulum at eros</li>
        <li class="list-group-item">Cras justo odio</li>
        <li class="list-group-item">Dapibus ac facilisis in</li>
        <li class="list-group-item">Vestibulum at eros</li>
      </ul>
    </div>
    <div
      v-if="isAuthenticated"
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
  
  computed: {
    ...mapGetters({
      isAuthenticated: "users/isAuthenticated",
      infos : "users/info"
    }),
   
  },
//   created() {
//     this.$store.dispatch("info");
//   },
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