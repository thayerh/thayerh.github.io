window.addEventListener('scroll', function() {
    const navUl = this.document.getElementById('header')

    if (this.window.pageYOffset > 0) {
        navUl.classList.add('scrolled');
    } else {
        navUl.classList.remove('scrolled');
    }
});
