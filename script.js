var nome =(prompt ('Come ti chiami?'));
var cognome =(prompt('Qual è il tuo cognome?'));
var colore=(prompt('Qual è il tuo colore preferito?'));
var calcolopassword=nome + cognome + colore;
document.getElementById('password').innerHTML='La tua password è'+''+calcolopassword +19;
