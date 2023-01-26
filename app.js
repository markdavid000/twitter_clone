const sectionHeroEl = document.querySelector('.user_twee');

const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add('stiky');
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove('stiky');
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: '-80px',
  }
);
observer.observe(sectionHeroEl);
