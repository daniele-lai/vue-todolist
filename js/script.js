// Rifare l'esercizio della to do list come fatto assieme in classe:
// - stampare in pagina un item per ogni elemento contenuto in un array
// - ogni item ha una "x" associata: cliccando su di essa, l'item viene rimosso dalla lista
// - predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio oppure ciccando su un pulsante, il testo digitato viene aggiunto alla lista

var app = new Vue({
  el: "#app",
  data: {
    spesa: [],
    message: ""
  },
  methods: {
    // Per rimuovere l'item dalla lista
    removeItem: function(i) {
      this.spesa.splice(i, 1);
    },
    // Per aggiungere l'item dalla lista
    addItem: function() {
      if (this.message !== "") {
        this.spesa.push(this.message);
        this.message = "";
      }
    }
  }
});
