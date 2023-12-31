import { MUTATIONS } from "./mutations";
import { ACTIONS } from "./actions";
import { GETTERS } from "./getters";

export default {
  namespaced: true,
  state: {
    example: "base",
  },
  mutations: MUTATIONS,
  actions: ACTIONS,
  getters: GETTERS,
};