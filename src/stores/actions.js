import * as types from './mutation_types';

const actions = {
  updateErr: ({ commit }, payload) => {
    commit(types.UPDATE_ERR, payload);
  },
};

export default actions;
