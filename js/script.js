// Descrizione:
// riprodurre la ToDoList come viste insieme questa mattina,
// ma con una struttura di array di oggetti e non un array di semplici stringhe.
// l’array di oggetti di partenza può essere una cosa così:
// tasks: [
// { text: 'Fare i compiti', done: false }, 
// { text: 'Fare la spesa', done: true }, 
// { text: 'Fare il bucato', done: false }
// ]

const { createApp } = Vue;

createApp ({
  data() {
    return {
      logoImage : "./img/Logo.png",
      tasks: [
          { 
            text: 'Fare i compiti', 
            done: false 
          }, 
          { 
            text: 'Fare la spesa',
            done: true 
          }, 
          { 
            text: 'Fare il bucato', 
            done: false 
          }
      ]
    }
  },
  // metodi
  methods : {
    // bottone per aggiungere nuove tasks:
    addNewTask(){
      
    }
  }

}).mount('#app');