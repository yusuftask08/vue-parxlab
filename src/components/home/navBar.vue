<template>
  <div class="pos-f-t">
    <div class="collapse" id="navbarToggleExternalContent">
      <div class="bg-primary p-4"></div>
    </div>
    <nav class="navbar navbar-dark bg-primary">
      <button
        style="margin-left: 20px"
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarToggleExternalContent"
        aria-controls="navbarToggleExternalContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <a href="#" @click.prevent="logout" >
        <i
          style="color: #fff; font-size: 30px; margin-right: 20px"
          class="fas fa-sign-out-alt"
        >
        </i
      ></a>
    </nav>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations({
      logout: "users/logout",
    }),
  },
};
</script>