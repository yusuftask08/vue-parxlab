import {
    appAxios
} from "@/utils/securedAxios"
import router from "@/router"
export default {
    namespaced: true,
    state: {
        user: null,
        information: [],

    },
    mutations: {
        setUser(state, pUser) {
            state.user = pUser
            state.info = pInfo
        },
        logout(state) {
            state.user = null;
            localStorage.clear();
            router.push({
                name: "Login"
            });
        },
        setInformation(state, pInfo) {
            state.information = pInfo;
        }

    },
    actions: {
        register({
            commit
        }, pUser) {
            appAxios.post("/users", pUser).then(register_response => {
                console.log('register :>> ', register_response);
                commit("setUser", register_response);
            });
        },
        Loggin({
            commit
        }, pUser) {
            appAxios.get(`/users?user_name=${pUser.user_name}&password=${pUser.password}`).then(login_response => {
                console.log('login_response :>> ', login_response);
                if (login_response?.status === 200 &&
                    login_response?.data?.length > 0) {

                }
                commit("setUser", login_response?.data[0]);
                localStorage.user = JSON.stringify(login_response?.data[0]);
                router.push("/")
            });
        },
        info({
            commit
        }) {
            axios
                .get("/information")
                .then(information_response => {
                    console.log("information_response ", information_response);

                })
                .catch(e => {
                    console.log("Error", e);
                });
            commit("setInformation", information_response.data || []);
        }

    },
    getters: {
        currentUser: state => state.user,
        isAuthenticated: state => state.user !== null,
        info: state => state.information,
    },
}