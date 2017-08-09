let section = document.getElementsByTagName("section")[0];

let btn = document.querySelector("#btn");


 new FontFaceObserver('Lora').load()
  .then(new FontFaceObserver('Open Sans').load()
  .then( () =>{
      
      section.classList.toggle('default-font');  
  
   }));




/** ignore **/

 btn.addEventListener("click", () => {
      
   section.classList.toggle('default-font'); 
  
   btn.innerHTML = (section.classList[0] === "default-font") ? "Put customs fonts" : "Put fallback fonts" ;
     
});


/*
// Abel basic example
new FontFaceObserver('Abel').load().then( () => {
  
  console.log('Abel font is now loaded ');
   
});

*/


