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
const studentList = document.querySelectorAll('.student-item');



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
      if (i >= page*10-10 && i < page*10) {
         list[i].style.display = '';
      } else {
         list[i].style.display = 'none';
      }
   }
};


/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

function appendPageLinks(list) {
   const numberOfPages = Math.ceil(list.length/10);
   const newDiv = document.createElement('div');
   newDiv.className = 'pagination';
   pageDiv.appendChild(newDiv);
   const newUl = document.createElement('ul');
   
   newDiv.appendChild(newUl);
   for (let i = 1; i <= numberOfPages; i++) {
      const newLi = document.createElement('li');
      newLi.innerHTML = `<a>${i}</a>`;
      newUl.appendChild(newLi);
      showPage(list, 1);
   }

   newUl.querySelector('li:first-child a').classList.add('active');
   newUl.addEventListener('click', (event) => {
     const target = event.target.closest('a');
     if (target == null) return;
     newUl.querySelector('.active').classList.remove('active');
     showPage(list, event.target.textContent);
     event.target.classList.add('active');
   });
};



//Going for exceeds expectations
const initialPages = appendPageLinks(studentList);

const pageHeader = document.querySelector('.page-header');
const searchDiv = document.createElement('div');
const searchInput = document.createElement('input');
const noResults = document.createElement('h3');
noResults.textContent = 'Sorry, there are no results';
noResults.style.display = 'none';
searchInput.placeholder = 'Search for students...';
searchDiv.className = 'student-search';
pageHeader.appendChild(searchDiv).appendChild(searchInput);
searchDiv.appendChild(noResults);
let totalSearchResults = 0;

searchInput.addEventListener('keyup', (e) => {
   for (let i = 0; i < studentList.length; i++) {
      if (studentList[i].childNodes[1].childNodes[3].textContent.toUpperCase().includes(searchInput.value.toUpperCase())) {
         studentList[i].style.display = '';
      } else {
         studentList[i].style.display = 'none';
      }
   }
   return totalSearchResults;
   if (searchInput.value === '') {
      initialPages.display = '';
      searchPages.display = 'none';
   } else {
      appendPageLinks(totalSearchResults)
      initialPages.display = '';
   }
})


