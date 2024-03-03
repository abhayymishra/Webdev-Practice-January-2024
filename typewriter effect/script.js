let title = document.querySelector('.main__heading');
let myName = "I am Abhay Mishra";
let index = 1;

const typeWriter = () => {
   let newTitle = myName.slice(0,index);
   title.innerText = newTitle;
   index > myName.length ? index = 1 : index++;  //for infinite typewriter effect
//    index++;
   

   setTimeout(() => {
    typeWriter();
   } , 100);
  
}

typeWriter();


