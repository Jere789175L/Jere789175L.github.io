            // // Tabbed Menu
            // function openMenu(evt, menuName) {
            //     var i, x, tablinks;
            //     x = document.getElementsByClassName("menu");
            //     for (i = 0; i < x.length; i++) {
            //        x[i].style.display = "none";
            //     }
            //     tablinks = document.getElementsByClassName("tablink");
            //     for (i = 0; i < x.length; i++) {
            //        tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
            //     }
            //     document.getElementById(menuName).style.display = "block";
            //     evt.currentTarget.firstElementChild.className += " w3-red";
            //   }
            //   document.getElementById("myLink").click();

//             //menu
//             var colls = document.getElementsByClassName("menu-toggler");
// var dolls = document.getElementsByClassName("menu-toggler");

//   function closeAll() {
//       for(var dol of dolls) {
//         dol.classList.remove("active");
//         dol.nextElementSibling.style.maxHeight = null;
//       }
//   }

//   for(var col of colls) {
//     col.addEventListener("click", function() {

//       var content = this.nextElementSibling;
      
//       if (this.classList.contains("active")) {
//         closeAll();        
//         content.style.maxHeight = 0;
//       } else {
//         closeAll();
//         this.classList.toggle("active");
//         content.style.maxHeight = content.scrollHeight + "px";
//       }

//   });
// } 

window.addEventListener("click", event => {
   // start by closing every dropdown
   for (let dd of dropdown) dd.classList.toggle("open", false);
   // then if a link was clicked, open the associated dropdown
   if (event.target.matches(".menu-toggler")) {
     event.target.nextElementSibling.classList.toggle("open");
   }
 });