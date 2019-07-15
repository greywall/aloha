document.addEventListener("DOMContentLoaded", function() {
  

let emailInput = document.getElementById('email-address');

// const button = document.getElementById("email-form");
// button.addEventListener("submit", function() {
//   console.log("You clicked a button!"); prompt("Thanks for providing us your email address.")
// });

// This controls the alert and form validation
const formSubmit = document.getElementById('email-form');
formSubmit.addEventListener("submit", function(event){
event.preventDefault();
if (emailInput.value == ""){
alert('Please enter a valid email.')
} else { 
    alert("Thanks for subscribing");
}
})

// Flicity Carosal
const elem = document.querySelector('.main-carousel');
const flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  wrapAround: true,
//   freeScroll: true,
  autoPlay: true,
});

}); 
// End of doc ready