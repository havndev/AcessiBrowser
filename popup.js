const menu1 = document.getElementById('menu1');
const menu2 = document.getElementById('menu2');
const menu3 = document.getElementById('menu3');
const menu4 = document.getElementById('menu4');

const backBtn1 = document.getElementById('goBack1');
const backBtn2 = document.getElementById('goBack2');
const backBtn3 = document.getElementById('goBack3');
const backBtn4 = document.getElementById('goBack4');

const mainMenu = document.getElementById('mainMenu');
const mainForm = document.getElementById('mainForm');

const form1 = document.getElementById('form1');
const form2 = document.getElementById('form2');
const form3 = document.getElementById('form3');
const form4 = document.getElementById('form4');

backBtn1.addEventListener('click', () => {
 if (mainForm.style.display === 'none') {
   mainForm.style.display = 'none';
   mainMenu.style.display = 'block';
 }
 else if (mainForm.style.display === '') {
   mainForm.style.display = 'none';
   mainMenu.style.display = 'block';
 }
 else  {
   mainMenu.style.display = 'block';
   mainForm.style.display = 'none';
 }
});
backBtn2.addEventListener('click', () => {
 if (mainForm.style.display === 'none') {
   mainForm.style.display = 'none';
   mainMenu.style.display = 'block';
 }
 else if (mainForm.style.display === '') {
   mainForm.style.display = 'none';
   mainMenu.style.display = 'block';
 }
 else  {
   mainMenu.style.display = 'block';
   mainForm.style.display = 'none';
 }
});
backBtn3.addEventListener('click', () => {
 if (mainForm.style.display === 'none') {
   mainForm.style.display = 'none';
   mainMenu.style.display = 'block';
 }
 else if (mainForm.style.display === '') {
   mainForm.style.display = 'none';
   mainMenu.style.display = 'block';
 }
 else  {
   mainMenu.style.display = 'block';
   mainForm.style.display = 'none';
 }
});
backBtn4.addEventListener('click', () => {
 if (mainForm.style.display === 'none') {
   mainForm.style.display = 'none';
   mainMenu.style.display = 'block';
 }
 else if (mainForm.style.display === '') {
   mainForm.style.display = 'none';
   mainMenu.style.display = 'block';
 }
 else  {
   mainMenu.style.display = 'block';
   mainForm.style.display = 'none';
 }
});

menu1.addEventListener('click', () => {
 if (mainForm.style.display === 'none') {
   // 👇️ this SHOWS the form
   mainMenu.style.display = 'none';
   mainForm.style.display = 'block';
   form1.style.display = 'block';
   form2.style.display = 'none';
   form3.style.display = 'none';
   form4.style.display = 'none';
 }
 else if (mainForm.style.display === '') {
   mainMenu.style.display = 'none';
   mainForm.style.display = 'block';
   form1.style.display = 'block';
   form2.style.display = 'none';
   form3.style.display = 'none';
   form4.style.display = 'none';
 } 
 else {
   // 👇️ this HIDES the form
   mainForm.style.display = 'none';
 }
});

menu2.addEventListener('click', () => {
 if (mainForm.style.display === 'none') {
   mainMenu.style.display = 'none';
   mainForm.style.display = 'block';
   form1.style.display = 'none';
   form2.style.display = 'block';
   form3.style.display = 'none';
   form4.style.display = 'none';
 }
 else if (mainForm.style.display === '') {
   mainMenu.style.display = 'none';
   mainForm.style.display = 'block';
   form1.style.display = 'none';
   form2.style.display = 'block';
   form3.style.display = 'none';
   form4.style.display = 'none';
 }
 else  {
   mainForm.style.display = 'none';
 }
});

menu3.addEventListener('click', () => {
  if(menu3.style.outline== 'none') {
menu3.style.background='#ffffff'
menu3.style.color = '#000000'
menu3.style.outline='auto'
menu3.style.outlineColor='black'
  }
  else if (menu3.style.outline== ''){
    menu3.style.background='#ffffff'
    menu3.style.color = '#000000'
    menu3.style.outline='auto'
    menu3.style.outlineColor='black'  
  }
  else{
    menu3.style.background="#f0bd7b"
    menu3.style.color="#ffffff"
    menu3.style.outline="none"
  }
  } );

menu4.addEventListener('click', () => {
 if (mainForm.style.display === 'none') {
   mainMenu.style.display = 'none';
   mainForm.style.display = 'block';
   form1.style.display = 'none';
   form2.style.display = 'none';
   form3.style.display = 'none';
   form4.style.display = 'block';
 }
 else if (mainForm.style.display === '') {
   mainMenu.style.display = 'none';
   mainForm.style.display = 'block';
   form1.style.display = 'none';
   form2.style.display = 'none';
   form3.style.display = 'none';
   form4.style.display = 'block';
 }
 else  {
   mainForm.style.display = 'none';
 }
});