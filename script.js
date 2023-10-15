const text = document.querySelector('.lead');
const textLoad = () => {
  setTimeout(() => {
    text.textContent = 'Web Developer';
  }, 0);
  setTimeout(() => {
    text.textContent = 'Backend Developer';
  }, 3000);
  setTimeout(() => {
    text.textContent = `Programmer`;
  }, 6000);
};
textLoad();
setInterval(textLoad, 9000);
