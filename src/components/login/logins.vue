  
 <template>
  <div class="container loginPage">
    <div class="row">
      <div class="col-4 offset-4">
        <div class="card">
          <div class="card-header text-center">
            <h1>ParxLab</h1>
          </div>
          <div class="card-body">
            <div class="mb-3">
              <label class="form-label">Kullanıcı Adı</label>
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
                type="password"
                class="form-control"
              />
            </div>
            <div class="mb-3 d-flex justify-content-center align-items-center">
              <button
                style="width: 100%"
                @click="login({ ...userData })"
                class="btn btn-sm btn-primary"
              >
                <strong>Giriş Yap</strong>
              </button>
            </div>
           
          </div>
          <div class="card-footer text-center">
            <router-link
              to="/Register"
              class="p-0 m-0 btn btn-link text-primary"
            >
              Üye değilim
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      userData: {
        user_name: "yusuf.taskiran",
        password: "12345",
      },
    };
  },

  methods: {
    ...mapActions({
      login: "users/Loggin",
    }),
  },
 
};
</script>