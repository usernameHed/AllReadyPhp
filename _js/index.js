//fonction qui affiche toto
function sayToto(toto)
{
  alert(toto);
}



///ici la page est chargé (html & css)
$(window).load(function()
{
  //à partir d'ici, effectue plein d'action


  $( ".toto" ).click(function()
  {
    sayToto("toto");
  });

  $( "#tata" ).click(function()
  {
    sayToto("tata");
  });






  // Handler for .load() called.
});
