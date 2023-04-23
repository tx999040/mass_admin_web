import { createStore } from "vuex";
import router from "@/router";
import Time from "@/util";
export interface GlobalErrorProps {
  message?: string;
  status?: string;
}

export interface userProps {
  phone: string;
  name: string;
  avatar: string;
}
export interface GlobalDataProps {
  token: string;
  error: GlobalErrorProps;
  userInfo: userProps;
  cacheTags: Array<string>;
  routeView: Array<string>;
}

export default createStore<GlobalDataProps>({
  state: {
    token: "1234",
    error: {
      message: "",
      status: "",
    },
    userInfo: {
      phone: "",
      name: "",
      avatar: "",
    },
    cacheTags: [],
    routeView: [],
  },
  mutations: {
    login(state, rawData) {
      const { token } = rawData.data;
      localStorage.setItem("ZhToken", token);
      state.token = token;
    },
    logout(state) {
      state.token = "";
      localStorage.removeItem("ZhToken");
    },

    //得到所有标签
    getAllTag(state, routes: []) {
      const time = new Time({});
      const list: any = [];
      routes.forEach((item: any) => {
        const keys: any = Object.keys(item);
        const isChildIndex = keys.indexOf("children");
        for (let i = 0; i < keys.length; i++) {
          if (isChildIndex > -1 && keys[i] == "children") {
            const childList = time.getAllTag(item[keys[i]]);
            list.push(...childList);
          }
          if (
            isChildIndex == -1 &&
            keys[i] == "meta" &&
            !item[keys[i]].hidden
          ) {
            list.push(item[keys[i]].title);
          }
        }
      });
      state.routeView = list;
    },

    //新增缓存的标签
    upDateMenuTags(state, tags: string): void {
      const index = state.cacheTags.indexOf(tags);
      const index2 = state.routeView.indexOf(tags);
      if (index == -1 && index2 > -1) {
        state.cacheTags.push(tags);
      }
    },
    //删除缓存的标签
    deleteMenuTags(state, tags: string): void {
      const index = state.cacheTags.indexOf(tags);
      const index2 = state.routeView.indexOf(tags);

      if (index > -1 && index2 > -1) {
        state.cacheTags.splice(index, 1); //关闭当前页面，重定向到首页
        console.log(router, "router");
        if (state.cacheTags.length) {
          router.back();
        } else {
          router.replace({ path: "/home" });
        }
      }
    },
  },

  actions: {
    setViewTags({ state, commit }, routes) {
      commit("getAllTag", routes);
    },
    setCacheTags({ state, commit }, tag) {
      commit("upDateMenuTags", tag);
    },
    deleteCacheTags({ state, commit }, tag) {
      commit("deleteMenuTags", tag);
    },
  },
  getters: {
    getUser: (state) => {
      return state.userInfo;
    },
    getCacheTags: (state) => {
      return state.cacheTags;
    },
    getAllTags: (state) => {
      return state.routeView;
    },
  },
});
