window.addEventListener('scroll', function() {
    var navUl = document.getElementById('menu');
    var secondProject = document.getElementById('2');
    var threshold = secondProject.getBoundingClientRect().top + this.window.pageYOffset - 100; // Adjust this value to change the scroll threshold

    if (window.pageYOffset >= threshold) {
      navUl.classList.add('scrolled');
    } else {
      navUl.classList.remove('scrolled');
    }
  });