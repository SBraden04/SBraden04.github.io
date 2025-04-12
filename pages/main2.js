import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

createApp({
    data() {
        return {
            dotData: [],
            inputText: "",
            cardCount: 0
        }
    },
    methods: {
        
        async fetchApi(){
            const url = `https://api.pokemontcg.io/v2/cards?q=name:${this.inputText}`
            const res = await fetch(url);
            const data = await res.json();
            
            this.dotData = data.data;
           
            this.cardCount = data.count;
        }
    },
    mounted() {
        this.fetchApi();
    }
}).mount('#app')
// You will write the Vue app code below
