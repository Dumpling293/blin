let yearSelect = document.querySelector('select');
let selectedYear = yearSelect.value;




const projectLinks = document.querySelectorAll('.project-list a');
const imageContainer = document.querySelector('.img-container');

projectLinks.forEach(link => {
  link.addEventListener('click', scrollToProject);
});

function scrollToProject(event) {
  event.preventDefault();
  const target = document.querySelector(this.getAttribute('href'));
  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

imageContainer.addEventListener('mousemove', moveProjectList);

function moveProjectList(event) {
  const mouseY = event.clientY;
  const projectList = document.querySelector('.project-list');
  const projectListHeight = projectList.offsetHeight;
  const containerHeight = document.querySelector('.container').offsetHeight;
  const containerTop = document.querySelector('.container').getBoundingClientRect().top;
  const maxTop = containerHeight - projectListHeight;
  const offset = (mouseY - containerTop) * (maxTop / containerHeight);
  projectList.style.top = `${offset}px`;
}
