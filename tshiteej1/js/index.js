$(document).ready(function(){
  // Add scrollspy to <body>
  $('body').scrollspy({target: ".navbar", offset: 50});   

  // Add smooth scrolling on all links inside the navbar
  $("#myNavbar a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }  // End if
  });
});
$(document).ready(function () {
                 $('#sidebarCollapse').on('click', function () {
                     $('#sidebar').toggleClass('active');
                 });
             });
// AUTOTYPE
             var dataset = ["Thanks for visiting", "Welcome to this place", "Scroll to know more"];
             var datasetIndex = 0;
             var data;
             var pause = 2000;
             var addTime = 200;
             var removeTime = 150;
             var letterIndex = 0;
             var currentInterval;
             
             var autoType = document.getElementById("autoType");
             
             function textRotation() {
               if(datasetIndex == dataset.length) {
                 datasetIndex = 0;
               };
               
               data = dataset[datasetIndex];
               letterIndex = 0;
               autoType.className = "";
               currentInterval = window.setInterval(addLetter, addTime);
             };
             
             function addLetter() {
               autoType.innerHTML += data.charAt(letterIndex);
               letterIndex += 1;
               
               if(letterIndex > data.length) {
                 autoType.className = "caretAnimation";
                 window.clearInterval(currentInterval);
                 window.setTimeout(startRemove, pause);
               };
             };
             
             function startRemove() {
               currentInterval = window.setInterval(removeLetter, removeTime);
             }
             
             function removeLetter() {
               var currentString = autoType.innerHTML;
               autoType.innerHTML = currentString.slice(0, -1);
               
               if(currentString.length < 1) {
                 window.clearInterval(currentInterval);
                 datasetIndex += 1;
                 textRotation();
               };
             };
             
             window.onload = window.setTimeout(textRotation, 500);

// AUTOTYPE
