// ═══════════════════════════════════════════════════════════════════
// PARADOX GIRL - Portfolio JavaScript
// Interactive terminal effects and navigation
// ═══════════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', function() {
    
    // ═══════════════════════════════════════════════════════════════
    // TYPING EFFECT FOR SUBTITLE
    // ═══════════════════════════════════════════════════════════════
    const typedTextSpan = document.querySelector('.typed-text');
    const cursor = document.querySelector('.cursor');
    
    const textArray = [
        'GAME DESIGNER | WRITER | PRODUCTION LEAD',
        'NARRATIVE DESIGN | ACCESSIBILITY | TEAM LEADERSHIP',
        'CRAFTING IMMERSIVE & INCLUSIVE EXPERIENCES',
        'BILINGUAL | VOICE ACTRESS | QA SPECIALIST'
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
            
            // If auto-scroll is active, cancel it
            if (autoScrollActive) {
                cancelAutoScroll();
            }
            
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
        console.log('%c║   PARADOX GIRL PORTFOLIO SYSTEM       ║', 'color: #00ff41');
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
    // AUTO-SCROLL THROUGH SECTIONS (START BUTTON)
    // ═══════════════════════════════════════════════════════════════
    const startButton = document.getElementById('start-button');
    let autoScrollActive = false;
    let currentSectionIndex = 0;
    let continueButton = null;
    
    if (startButton) {
        startButton.addEventListener('click', function() {
            if (!autoScrollActive) {
                autoScrollActive = true;
                this.style.display = 'none'; // Hide the button after click
                initAutoScrollThroughSections();
            }
        });
        
        // Also trigger on Enter key when focused
        startButton.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' && !autoScrollActive) {
                autoScrollActive = true;
                this.style.display = 'none';
                initAutoScrollThroughSections();
            }
        });
    }
    
    function initAutoScrollThroughSections() {
        const sectionOrder = ['#home', '#about', '#projects', '#skills', '#contact'];
        currentSectionIndex = 0;
        
        // Create continue button
        createContinueButton();
        
        // Start with first section
        scrollToSection(sectionOrder[currentSectionIndex]);
    }
    
    function createContinueButton() {
        // Remove existing button if any
        if (continueButton) {
            continueButton.remove();
        }
        
        // Create new continue button
        continueButton = document.createElement('div');
        continueButton.id = 'continue-button';
        continueButton.innerHTML = '<span class="blink">&gt;&gt; CONTINUE [PRESS ENTER OR CLICK]</span>';
        continueButton.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            padding: 15px 25px;
            background: rgba(0, 255, 65, 0.1);
            border: 3px solid #00ff41;
            color: #00ff41;
            font-family: 'VT323', monospace;
            font-size: 22px;
            cursor: pointer;
            z-index: 10000;
            box-shadow: 0 0 20px rgba(0, 255, 65, 0.5);
            transition: all 0.3s ease;
        `;
        
        document.body.appendChild(continueButton);
        
        // Hover effect
        continueButton.addEventListener('mouseenter', function() {
            this.style.background = 'rgba(255, 0, 64, 0.2)';
            this.style.borderColor = '#ff0040';
            this.style.color = '#ff0040';
            this.style.boxShadow = '0 0 30px rgba(255, 0, 64, 0.7)';
            this.style.transform = 'scale(1.05)';
        });
        
        continueButton.addEventListener('mouseleave', function() {
            this.style.background = 'rgba(0, 255, 65, 0.1)';
            this.style.borderColor = '#00ff41';
            this.style.color = '#00ff41';
            this.style.boxShadow = '0 0 20px rgba(0, 255, 65, 0.5)';
            this.style.transform = 'scale(1)';
        });
        
        // Click handler
        continueButton.addEventListener('click', goToNextSection);
        
        // Enter key handler
        document.addEventListener('keydown', handleContinueKeyPress);
    }
    
    function handleContinueKeyPress(e) {
        if (e.key === 'Enter' && autoScrollActive && continueButton) {
            goToNextSection();
        }
    }
    
    function goToNextSection() {
        const sectionOrder = ['#home', '#about', '#projects', '#skills', '#contact'];
        currentSectionIndex++;
        
        if (currentSectionIndex < sectionOrder.length) {
            scrollToSection(sectionOrder[currentSectionIndex]);
        } else {
            // Tour complete
            completeTour();
        }
    }
    
    function scrollToSection(sectionId) {
        const targetSection = document.querySelector(sectionId);
        
        if (targetSection) {
            // Show only the current section during auto-scroll
            sections.forEach(section => {
                if (section.id === sectionId.replace('#', '')) {
                    section.classList.add('active');
                } else {
                    section.classList.remove('active');
                }
            });
            
            // Scroll to the section
            targetSection.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
            
            // Update navigation active state
            navLinks.forEach(link => {
                if (link.getAttribute('href') === sectionId) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
            
            // Trigger skill bar animation when reaching skills section
            if (sectionId === '#skills') {
                setTimeout(() => animateSkillBars(), 500);
            }
            
            console.log(`[VIEWING] Section: ${sectionId.replace('#', '').toUpperCase()}`);
        }
    }
    
    function completeTour() {
        console.log('[TOUR COMPLETE] All sections viewed!');
        
        // Remove continue button
        if (continueButton) {
            continueButton.remove();
            continueButton = null;
        }
        
        // Remove keydown listener
        document.removeEventListener('keydown', handleContinueKeyPress);
        
        autoScrollActive = false;
        
        // Show completion message in console
        console.log('%c🎮 PORTFOLIO TOUR FINISHED! 🎮', 'color: #00ff41; font-size: 16px; font-weight: bold;');
        console.log('%cYou can now use the navigation menu freely!', 'color: #00ff41; font-size: 12px;');
    }
    
    function cancelAutoScroll() {
        console.log('[AUTO-SCROLL] Cancelled by user navigation');
        
        // Remove continue button
        if (continueButton) {
            continueButton.remove();
            continueButton = null;
        }
        
        // Remove keydown listener
        document.removeEventListener('keydown', handleContinueKeyPress);
        
        autoScrollActive = false;
        currentSectionIndex = 0;
    }
    
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
