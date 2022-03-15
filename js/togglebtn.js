const tooglebtn = document.querySelector('.local_busan');
const menu = document.querySelector('.busan_list');
// const icons = document.querySelector('.navbar-icons');

tooglebtn.addEventListener('click',() => {
  menu.classList.toggle('active');
  tooglebtn.classList.toggle('active');
  // icons.classList.toggle('active');
});