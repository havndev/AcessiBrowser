 const menu1 = document.getElementById('menu1');
 const menu2 = document.getElementById('menu2');
 const menu3 = document.getElementById('menu3');
 const menu4 = document.getElementById('menu4');


 menu1.addEventListener('click', () => {
  console.log('clicked');
  const form = document.getElementById('form1');

  if (form.style.display === 'none') {
    
     // 👇️ this SHOWS the form
     form.style.display = 'block';
     form2.style.display = 'none';
     form3.style.display = 'none';
     form4.style.display = 'none';

     
  }
   else if (form.style.display === '') {
    form.style.display = 'block';
    form2.style.display = 'none';
    form3.style.display = 'none';
    form4.style.display = 'none';
  }
    else  {
     // 👇️ this HIDES the form
     form.style.display = 'none';
   }
});

menu2.addEventListener('click', () => {
  console.log('clicked');
  const form = document.getElementById('form2');

  if (form.style.display === 'none') {
    
     // 👇️ this SHOWS the form
     form.style.display = 'block';
     form1.style.display = 'none';
     form3.style.display = 'none';
     form4.style.display = 'none';
     
  }
   else if (form.style.display === '') {
    form.style.display = 'block';
    form1.style.display = 'none';
    form3.style.display = 'none';
    form4.style.display = 'none';
  }
    else  {
     // 👇️ this HIDES the form
     form.style.display = 'none';
   }
});

menu3.addEventListener('click', () => {
  console.log('clicked');
  const form = document.getElementById('form3');

  if (form.style.display === 'none') {
    
     // 👇️ this SHOWS the form
     form.style.display = 'block';
     form1.style.display = 'none';
     form2.style.display = 'none';
     form4.style.display = 'none';
     
  }
   else if (form.style.display === '') {
    form.style.display = 'block';
    form1.style.display = 'none';
    form2.style.display = 'none';
    form4.style.display = 'none';
  }
    else  {
     // 👇️ this HIDES the form
     form.style.display = 'none';
   }
});

menu4.addEventListener('click', () => {
  console.log('clicked');
  const form = document.getElementById('form4');

  if (form.style.display === 'none') {
    
     // 👇️ this SHOWS the form
     form.style.display = 'block';
     form1.style.display = 'none';
     form2.style.display = 'none';
     form3.style.display = 'none';
     
  }
   else if (form.style.display === '') {
    form.style.display = 'block';
    form1.style.display = 'none';
    form2.style.display = 'none';
    form3.style.display = 'none';
  }
    else  {
     // 👇️ this HIDES the form
     form.style.display = 'none';
   }
});