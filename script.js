// ========================================
// Navigation Toggle
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    // Mobile nav toggle
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelector('.nav-links');
    
    // Create toggle button if it doesn't exist
    if (!document.querySelector('.nav-toggle')) {
        const toggle = document.createElement('button');
        toggle.className = 'nav-toggle';
        toggle.innerHTML = '<span></span><span></span><span></span>';
        toggle.setAttribute('aria-label', 'Toggle navigation');
        nav.appendChild(toggle);
        
        toggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            toggle.classList.toggle('active');
        });
    }
    
    // Close nav when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
    
    // ========================================
    // Email Modal
    // ========================================
    const emailBtn = document.getElementById('emailBtn');
    const emailModal = document.getElementById('emailModal');
    const closeEmailModal = document.getElementById('closeEmailModal');
    
    if (emailBtn && emailModal) {
        emailBtn.addEventListener('click', (e) => {
            e.preventDefault();
            emailModal.classList.add('show');
        });
        
        closeEmailModal.addEventListener('click', () => {
            emailModal.classList.remove('show');
        });
        
        emailModal.addEventListener('click', (e) => {
            if (e.target === emailModal) {
                emailModal.classList.remove('show');
            }
        });
        
        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && emailModal.classList.contains('show')) {
                emailModal.classList.remove('show');
            }
        });
    }
    
    // ========================================
    // Scroll Animations
    // ========================================
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements
    document.querySelectorAll('.current-card, .timeline-item, .social-card, .experience-card, .project-card, .research-card, .blog-post').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Add animation class
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
    
    // ========================================
    // Code Theme Selector
    // ========================================
    const themeSelector = document.getElementById('codeTheme');
    const codeWindow = document.querySelector('.code-window');
    
    if (themeSelector && codeWindow) {
        // Load saved theme preference
        const savedTheme = localStorage.getItem('codeTheme') || 'night-owl';
        themeSelector.value = savedTheme;
        codeWindow.setAttribute('data-theme', savedTheme);
        
        // Handle theme changes
        themeSelector.addEventListener('change', (e) => {
            const theme = e.target.value;
            codeWindow.setAttribute('data-theme', theme);
            localStorage.setItem('codeTheme', theme);
        });
    }
    
    // ========================================
    // Typing Effect for Code Window
    // ========================================
    const codeContent = document.querySelector('.code-content code');
    if (codeContent) {
        const originalHTML = codeContent.innerHTML;
        
        // Only animate on first load
        if (!sessionStorage.getItem('codeAnimated')) {
            codeContent.innerHTML = '';
            let i = 0;
            const speed = 10;
            
            function typeWriter() {
                if (i < originalHTML.length) {
                    // Handle HTML tags
                    if (originalHTML[i] === '<') {
                        const tagEnd = originalHTML.indexOf('>', i);
                        codeContent.innerHTML += originalHTML.substring(i, tagEnd + 1);
                        i = tagEnd + 1;
                    } else {
                        codeContent.innerHTML += originalHTML[i];
                        i++;
                    }
                    setTimeout(typeWriter, speed);
                } else {
                    sessionStorage.setItem('codeAnimated', 'true');
                }
            }
            
            setTimeout(typeWriter, 500);
        }
    }
    
    // ========================================
    // Smooth Scroll
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // ========================================
    // Active Nav Link
    // ========================================
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.style.color = 'var(--text-primary)';
        }
    });
    
    // ========================================
    // Easter Egg: Konami Code
    // ========================================
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;
    
    document.addEventListener('keydown', (e) => {
        if (e.key === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                document.body.style.animation = 'rainbow 2s ease';
                konamiIndex = 0;
                
                const rainbowStyle = document.createElement('style');
                rainbowStyle.textContent = `
                    @keyframes rainbow {
                        0% { filter: hue-rotate(0deg); }
                        100% { filter: hue-rotate(360deg); }
                    }
                `;
                document.head.appendChild(rainbowStyle);
                
                setTimeout(() => {
                    document.body.style.animation = '';
                }, 2000);
            }
        } else {
            konamiIndex = 0;
        }
    });
    
    // ========================================
    // Console Easter Egg
    // ========================================
    console.log('%c👋 Hey there, fellow developer!', 'font-size: 24px; font-weight: bold;');
    console.log('%cLooking for something? Feel free to reach out: thayerhicks@gmail.com', 'font-size: 14px; color: #e8a87c;');
});

// ========================================
// Theme Toggle (if you want to add light mode later)
// ========================================
function toggleTheme() {
    document.body.classList.toggle('light-theme');
    localStorage.setItem('theme', document.body.classList.contains('light-theme') ? 'light' : 'dark');
}

// Check for saved theme preference
if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-theme');
}
