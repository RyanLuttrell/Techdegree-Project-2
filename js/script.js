/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/
const pageDiv = document.querySelector('.page');
const studentItem = document.querySelectorAll('.student-item');




/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/

function showPage(list, page) {
   for (let i = 0; i < list.length; i++) {
      if (list[i] >= 0 && list[i] <= 9) {
         //if button one is pressed show
         //else hide
      } else if (list[i] >= 10 && list[i] <= 19) {
         //if button two is pressed show
         //else hide
      } else if (list[i] >= 20 && list[i] <= 29) {
         //if button three is pressed show
         //else hide
      } else if (list[i] >= 30 && list[i] <= 39) {
         //if button four is pressed show
         //else hide
      } else if (list[i] >= 40 && list[i] <= 49) {
         //if button five is pressed show
         //else hide
      } else if (list[i] >= 50 && list[i] <= 59) {
         //if button six is pressed show
         //else hide
      } else if (list[i] >= 60 && list[i] <= 69) {
         //if button seven is pressed show
         //else hide
      }
   }
};


/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

function appendPageLinks() {
   const numberOfPages = Math.ceil(studentItem.length/10);
   const newDiv = document.createElement('div');
   newDiv.className = 'pagination';
   pageDiv.appendChild(newDiv);
   const newUl = document.createElement('ul');
   newDiv.appendChild(newUl);
   for (let i = 1; i <= numberOfPages; i++) {
      const newLi = document.createElement('li');
      newLi.innerHTML = `<a>${i}</a>`;
      newUl.appendChild(newLi);
      newLi.addEventListener('click', () => {
         event.target.className = 'active';
         for (i = 1; i <= numberOfPages; i++) {
            
         }
      })
   }
};

appendPageLinks();
