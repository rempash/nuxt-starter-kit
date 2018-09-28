
export const state = () => ({
    lawyers: [],
    menu: [
        {
            path: '/',
            title: 'Главная'
        },
        {
            path: '/info',
            title: 'О нас'
        }
    ]
});

export const mutations = {
  setLawyers(state, lawyers) {
    state.lawyers = lawyers
  }
};

export const actions = {
  async nuxtServerInit({ commit }, { app }) {
    const lawyers = await app.$axios.$get(
      "./random-data.json"
    );
    commit("setLawyers", lawyers)
  }
};
