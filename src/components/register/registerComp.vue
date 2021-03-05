<template>
  <div class="container loginPage">
    <div class="row mt-5">
      <div class="col-4 offset-4">
        <div class="card">
          <div class="card-header text-center">
            <h1>ParxLab</h1>
          </div>
          <div class="card-body">
            <div class="mb-3">
              <label class="form-label">Ad Soyad</label>
              <input
                v-model="userData.full_name"
                type="text"
                class="form-control"
                placeholder="yusuf taskiran"
              />
            </div>
            <div class="mb-3">
              <label class="form-label">Kullanı Adı</label>
              <input
                v-model="userData.user_name"
                type="text"
                class="form-control"
                placeholder="yusuf.taskiran"
              />
            </div>
            <div class="mb-3">
              <label class="form-label">Şifre</label>
              <input
                v-model="userData.password"
                type="current-password"
                class="form-control"
              />
            </div>
            <div class="mb-3 d-flex justify-content-center align-items-center">
              <button
                style="width: 100%"
                @click="onSave({ ...userData })"
                class="btn btn-sm btn-primary"
              >
                Kayıt ol
              </button>
            </div>

            <div class="card-footer text-center">
              <router-link
                to="/Login"
                class="p-0 m-0 btn btn-link text-primary"
              >
                Zaten üyeyim
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      userData: {
        full_name: null,
        user_name: null,
        password: null,
      },
    };
  },
  methods: {
    ...mapActions({
      onSave: "users/register",
    }),
    onSave() {
      console.log("this.userData   :>> ", this.userData);
      this.$store.dispatch("users/register", { ...this.userData });
    },
  },
};
</script>