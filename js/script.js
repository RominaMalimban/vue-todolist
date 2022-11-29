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
      newTask : "",
      error: false,
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
      // tre condizioni: se la task ha meno di 8 caratteri; se input vuoto, se task è corretta: 
      if(this.newTask.length < 8 || this.newTask === "" ){
        this.error = true;
      }else{
        this.error = false;
        this.tasks.push({text: this.newTask, done: false});
      };
      
      // all'invio svuoto l'input:
      this.newTask = "";
    }
  }

}).mount('#app');