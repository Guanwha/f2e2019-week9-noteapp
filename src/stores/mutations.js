import * as types from './mutation_types';


export const mutations = {
  // payload is error object (include errCode, errMessage)
  [types.UPDATE_ERR](state, payload) {
    if (payload) {
      state.lastErrorCode = payload.errCode;
      state.lastErrorMessage = payload.errMessage;
    }
    state.isLoading = false;
  },
};

export const state = {
  lastErrorCode: null,
  lastErrorMessage: null,
  isLoading: false,
};
