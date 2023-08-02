/*
window.addEventListener('scroll', function() {
    const navUl = this.document.getElementById('header')

    if (this.window.pageYOffset > 0) {
        navUl.classList.add('scrolled');
    } else {
        navUl.classList.remove('scrolled');
    }
});

window.addEventListener('scroll', function() {
    const top = document.querySelector('.top-section');
    const bottom = document.querySelector('.bottom-section');
    const topRect = top.getBoundingClientRect();
    const bottomRect = bottom.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    bottom.style.position = 'relative';
    if (bottomRect.top === viewportHeight) {
        top.style.position = 'fixed';
        top.style.bottom = 0 + 'px';
        //bottom.style.paddingTop = viewportHeight + 'px';
        bottom.style.top = (viewportHeight) + 'px';
        console.log('fixing');
    } else if (bottomRect.top > (viewportHeight)) {
        top.style.position = 'static';
        top.style.bototm = (viewportHeight) + 'px';
        console.log('unfix');
    } else {
        top.style.position = 'fixed';
        top.style.bottom = 0 + 'px';
        //bottom.style.paddingTop = viewportHeight + 'px';
        bottom.style.top = (viewportHeight) + 'px';
        console.log('fixing');
        console.log('rel');
        //top.style.position = 'relative';
    }
});
*/

const gradientBackground = document.getElementById("gradientBackground");

gradientBackground.addEventListener("mousemove", (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Calculate the center position as a percentage
    const centerX = (mouseX / window.innerWidth) * 100;
    const centerY = (mouseY / window.innerHeight) * 100;

    // Apply the radial gradient style with dynamic center position
    gradientBackground.style.background = `radial-gradient(circle at ${centerX}% ${centerY}%, #050930, #000000)`;
});