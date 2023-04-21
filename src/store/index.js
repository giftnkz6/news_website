import { createStore } from 'vuex'
import axios from 'axios';
const appleAPI = "https://newsapi.org/v2/everything?q=apple&from=2023-04-19&to=2023-04-19&sortBy=popularity&apiKey=7826b7d90f264dc189abac14ff4946c6"
const teslaAPI = "http://localhost:1800/"
const bussinessAPI = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=7826b7d90f264dc189abac14ff4946c6"
const techAPI = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=7826b7d90f264dc189abac14ff4946c6"
const wallStreetAPI = "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=7826b7d90f264dc189abac14ff4946c6"
export default createStore({
  state: {
    articles: null,
    teslas: null,
    bussiness: null,
    techCrunch: null,
    wallStreet: null
  },
  getters: {
  },
  mutations: {
    setArticles(state, values){
      state.articles = values
    }
  },
  actions: {
    getArticles: async(context) => {
      const res = await axios.get(`${teslaAPI}`);
      const results = await res.data.articles;
      console.log(res.data.articles)
      if(results) {
        console.log(results)
        context.commit('setArticles', results);
      }
      else{
        context.commit('setArticles', []);
      }
    }
  },
  modules: {
  }
})