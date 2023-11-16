const text = document.querySelector('.lead');
const textLoad = () => {
  setTimeout(() => {
    text.textContent = 'Web Developer';
  }, 0);
  setTimeout(() => {
    text.textContent = 'Backend Developer';
  }, 1000);
  setTimeout(() => {
    text.textContent = `Programmer`;
  }, 2000);
};
textLoad();
setInterval(textLoad, 3000);
