// ═══════════════════════════════════════════════════════════════════
// PIRATE RADIO - Portfolio JavaScript
// Interactive terminal effects and navigation
// ═══════════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', function() {
    
    // ═══════════════════════════════════════════════════════════════
    // TYPING EFFECT FOR SUBTITLE
    // ═══════════════════════════════════════════════════════════════
    const typedTextSpan = document.querySelector('.typed-text');
    const cursor = document.querySelector('.cursor');
    
    const textArray = [
        'GAME DESIGNER | LEVEL ARCHITECT | CREATIVE TECHNOLOGIST',
        'CRAFTING INTERACTIVE EXPERIENCES',
        'BUILDING WORLDS, ONE PIXEL AT A TIME',
        'GAME MECHANICS | SYSTEMS | NARRATIVE DESIGN'
    ];
    
    const typingDelay = 100;
    const erasingDelay = 50;
    const newTextDelay = 2000;
    let textArrayIndex = 0;
    let charIndex = 0;
    
    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            cursor.classList.remove('blink');
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } else {
            cursor.classList.add('blink');
            setTimeout(erase, newTextDelay);
        }
    }
    
    function erase() {
        if (charIndex > 0) {
            cursor.classList.remove('blink');
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } else {
            cursor.classList.add('blink');
            textArrayIndex++;
            if (textArrayIndex >= textArray.length) textArrayIndex = 0;
            setTimeout(type, typingDelay + 1100);
        }
    }
    
    // Start typing effect after a short delay
    setTimeout(type, newTextDelay + 250);
    
    // ═══════════════════════════════════════════════════════════════
    // NAVIGATION SYSTEM
    // ═══════════════════════════════════════════════════════════════
    const navLinks = document.querySelectorAll('.nav-menu a');
    const sections = document.querySelectorAll('.terminal-section');
    
    function showSection(targetId) {
        // Hide all sections
        sections.forEach(section => {
            section.classList.remove('active');
        });
        
        // Show target section
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.classList.add('active');
            
            // Scroll to top of content area smoothly
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            
            // Trigger skill bar animations if in skills section
            if (targetId === '#skills') {
                animateSkillBars();
            }
        }
    }
    
    // Navigation click handlers
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            showSection(targetId);
            
            // Add active state to nav items
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // Terminal effect: show command output
            console.log(`[SYSTEM] Navigating to ${targetId.replace('#', '')}...`);
        });
    });
    
    // Handle direct URL hash navigation
    function handleHashChange() {
        const hash = window.location.hash || '#home';
        showSection(hash);
    }
    
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Check on load
    
    // ═══════════════════════════════════════════════════════════════
    // SKILL BAR ANIMATIONS
    // ═══════════════════════════════════════════════════════════════
    function animateSkillBars() {
        const skillBars = document.querySelectorAll('.fill');
        skillBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0%';
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        });
    }
    
    // ═══════════════════════════════════════════════════════════════
    // CURRENT DATE FOR FOOTER
    // ═══════════════════════════════════════════════════════════════
    const dateElement = document.getElementById('current-date');
    if (dateElement) {
        const now = new Date();
        const dateString = now.toISOString().split('T')[0];
        const timeString = now.toTimeString().split(' ')[0];
        dateElement.textContent = `${dateString} ${timeString} UTC`;
    }
    
    // ═══════════════════════════════════════════════════════════════
    // TERMINAL BOOT SEQUENCE (OPTIONAL)
    // ═══════════════════════════════════════════════════════════════
    function bootSequence() {
        console.log('%c╔════════════════════════════════════════╗', 'color: #00ff41');
        console.log('%c║   PIRATE RADIO PORTFOLIO SYSTEM       ║', 'color: #00ff41');
        console.log('%c║   Version 1.0.0                       ║', 'color: #00ff41');
        console.log('%c╚════════════════════════════════════════╝', 'color: #00ff41');
        console.log('%c[OK] System initialized', 'color: #00ff41');
        console.log('%c[OK] Terminal ready', 'color: #00ff41');
        console.log('%c[OK] All systems operational', 'color: #00ff41');
        console.log('%c>', 'color: #ff0040', 'Welcome to the matrix...');
    }
    
    bootSequence();
    
    // ═══════════════════════════════════════════════════════════════
    // KONAMI CODE EASTER EGG
    // ═══════════════════════════════════════════════════════════════
    let konamiCode = [];
    const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    
    document.addEventListener('keydown', function(e) {
        konamiCode.push(e.key);
        konamiCode = konamiCode.slice(-10);
        
        if (konamiCode.join(',') === konamiSequence.join(',')) {
            activateEasterEgg();
        }
    });
    
    function activateEasterEgg() {
        console.log('%c🎮 KONAMI CODE ACTIVATED! 🎮', 'color: #ff0040; font-size: 20px; font-weight: bold;');
        document.body.style.animation = 'rainbow 2s infinite';
        
        setTimeout(() => {
            document.body.style.animation = '';
        }, 5000);
    }
    
    // ═══════════════════════════════════════════════════════════════
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ═══════════════════════════════════════════════════════════════
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            // Only handle if it's a section link
            if (href.match(/^#(home|about|projects|skills|contact)$/)) {
                e.preventDefault();
            }
        });
    });
    
    // ═══════════════════════════════════════════════════════════════
    // DYNAMIC PROJECT IMAGE LOADING
    // ═══════════════════════════════════════════════════════════════
    // This function can be used to load project images dynamically
    function loadProjectImages() {
        const placeholders = document.querySelectorAll('.project-image-placeholder');
        
        placeholders.forEach((placeholder, index) => {
            // Example: Replace with actual image if it exists
            const imagePath = `assets/images/project-${index + 1}.jpg`;
            
            // Check if you want to load images
            // For now, placeholders are shown
            // Uncomment below to implement actual image loading
            
            /*
            const img = new Image();
            img.src = imagePath;
            img.onload = function() {
                placeholder.innerHTML = `<img src="${imagePath}" alt="Project ${index + 1}" style="width:100%;height:100%;object-fit:cover;">`;
            };
            */
        });
    }
    
    // ═══════════════════════════════════════════════════════════════
    // GLITCH EFFECT ON HOVER (for fun)
    // ═══════════════════════════════════════════════════════════════
    const glitchElements = document.querySelectorAll('.project-title');
    
    glitchElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.animation = 'glitch 0.3s infinite';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.animation = '';
        });
    });
    
    // ═══════════════════════════════════════════════════════════════
    // RESPONSIVE MENU TOGGLE (for mobile)
    // ═══════════════════════════════════════════════════════════════
    function setupMobileMenu() {
        const navMenu = document.querySelector('.nav-menu');
        const navPrompt = document.querySelector('.nav-prompt');
        
        if (window.innerWidth <= 768) {
            navPrompt.style.cursor = 'pointer';
            
            navPrompt.addEventListener('click', function() {
                navMenu.classList.toggle('active');
                if (navMenu.style.display === 'none' || navMenu.style.display === '') {
                    navMenu.style.display = 'flex';
                } else {
                    navMenu.style.display = 'none';
                }
            });
        }
    }
    
    // Check on load and resize
    setupMobileMenu();
    window.addEventListener('resize', setupMobileMenu);
    
    // ═══════════════════════════════════════════════════════════════
    // CONSOLE WELCOME MESSAGE
    // ═══════════════════════════════════════════════════════════════
    console.log('%c🎮 Welcome, Game Developer! 🎮', 'color: #00ff41; font-size: 16px; font-weight: bold;');
    console.log('%cLooking for secrets? Try the Konami Code...', 'color: #ff0040; font-size: 12px;');
    console.log('%c↑ ↑ ↓ ↓ ← → ← → B A', 'color: #00ff41; font-size: 12px;');
    
    // ═══════════════════════════════════════════════════════════════
    // PERFORMANCE: Lazy load sections
    // ═══════════════════════════════════════════════════════════════
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });
    
    sections.forEach(section => {
        observer.observe(section);
    });
    
});

// ═══════════════════════════════════════════════════════════════════
// RAINBOW ANIMATION FOR EASTER EGG
// ═══════════════════════════════════════════════════════════════════
const style = document.createElement('style');
style.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(style);
