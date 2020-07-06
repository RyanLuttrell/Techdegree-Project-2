const studentList = document.querySelectorAll('.student-item');

//This function will show the proper page of students, based on the page that is selected in the appendageLinks function
function showPage(list, page) {
   for (let i = 0; i < list.length; i++) {
      if (i >= page*10-10 && i < page*10) {
         list[i].style.display = '';
      } else {
         list[i].style.display = 'none';
      }
   }
};


function appendPageLinks(list) {
   const pageDiv = document.querySelector('.page');
   //find out how many li elements we'll need 
   const numberOfPages = Math.ceil(list.length/10);
   //create a new div and give it the 'pagination' class name
   const newDiv = document.createElement('div');
   newDiv.className = 'pagination';
   //place the new div as the last child on the page
   pageDiv.appendChild(newDiv);
   //create a new ul element and append it to the newly created div
   const newUl = document.createElement('ul');
   newDiv.appendChild(newUl);
   //create as many li tags as necessary based on the total amount of students
   for (let i = 1; i <= numberOfPages; i++) {
      const newLi = document.createElement('li');
      newLi.innerHTML = `<a>${i}</a>`;
      newUl.appendChild(newLi);
      showPage(list, 1);
   }
   //ensure that the first li element has the active class name on page load
   newUl.querySelector('li:first-child a').classList.add('active');
   //created an event listener to hear when one of the pages are clicked and add/removes the 'active' class appropriately
   newUl.addEventListener('click', (event) => {
     const target = event.target.closest('a');
     if (target == null) return;
     newUl.querySelector('.active').classList.remove('active');
     showPage(list, event.target.textContent);
     event.target.classList.add('active');
   });
};
//initialize the appendPageLinks function
appendPageLinks(studentList);