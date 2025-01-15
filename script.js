// Particles.js Configuration
document.addEventListener('DOMContentLoaded', () => {
    particlesJS('particles', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: '#2563eb'  // Primary color
            },
            shape: {
                type: 'circle',
                stroke: {
                    width: 0,
                    color: '#000000'
                },
                polygon: {
                    nb_sides: 5
                }
            },
            opacity: {
                value: 0.3,
                random: false,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#7c3aed',  // Secondary color
                opacity: 0.2,
                width: 1
            },
            move: {
                enable: true,
                speed: 3,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'repulse'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 400,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                },
                repulse: {
                    distance: 200,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: true
    });
});

// Scroll Reveal Animations
document.addEventListener('DOMContentLoaded', () => {
    // Reveal elements on scroll
    const revealElements = document.querySelectorAll('.category-card, .feature-card, .stat-item');
    
    const revealOnScroll = () => {
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Initial styles for reveal elements
    revealElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.6s ease-out';
    });

    // Add scroll event listener
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check

    // Smooth scroll for navigation links
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

    // Mobile navigation toggle
    const mobileNav = document.querySelector('.nav-links');
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');

    if (mobileNavToggle) {
        mobileNavToggle.addEventListener('click', () => {
            mobileNav.classList.toggle('active');
        });
    }

    // Close mobile nav when clicking outside
    document.addEventListener('click', (e) => {
        if (mobileNav && mobileNav.classList.contains('active')) {
            if (!e.target.closest('.nav-links') && !e.target.closest('.mobile-nav-toggle')) {
                mobileNav.classList.remove('active');
            }
        }
    });

    // Gradient text animation
    const gradientText = document.querySelector('.text-gradient');
    if (gradientText) {
        let hue = 0;
        setInterval(() => {
            hue = (hue + 1) % 360;
            gradientText.style.background = `linear-gradient(135deg, 
                hsl(${hue}, 100%, 50%), 
                hsl(${(hue + 60) % 360}, 100%, 50%))`;
            gradientText.style.webkitBackgroundClip = 'text';
            gradientText.style.webkitTextFillColor = 'transparent';
        }, 50);
    }
});

// Add animation to stats when they come into view
const stats = document.querySelectorAll('.stat-item');
const animateStats = () => {
    stats.forEach(stat => {
        const rect = stat.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight && rect.bottom >= 0;
        
        if (isInView) {
            stat.style.opacity = '1';
            stat.style.transform = 'translateY(0)';
        }
    });
};

// Initial setup for stats
stats.forEach(stat => {
    stat.style.opacity = '0';
    stat.style.transform = 'translateY(20px)';
    stat.style.transition = 'all 0.6s ease-out';
});

// Handle contact form submission
const handleSubmit = (event) => {
    event.preventDefault();
    
    // Get form data
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    
    // Here you would typically send the data to a server
    console.log('Form submitted:', data);
    
    // Show success message
    alert('Thank you for your message! We will get back to you soon.');
    
    // Reset form
    event.target.reset();
    
    return false;
};

// Add animation to solution cards
const solutionCards = document.querySelectorAll('.solution-card');
solutionCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
        card.style.transition = 'transform 0.3s ease';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Initialize mobile navigation on small screens
if (window.innerWidth <= 768) {
    const createMobileNav = () => {
        const nav = document.querySelector('.nav-links');
        const burger = document.createElement('div');
        burger.className = 'mobile-nav-toggle';
        burger.innerHTML = '☰';
        
        burger.addEventListener('click', () => {
            nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
        });
        
        document.querySelector('.nav-bar .container').appendChild(burger);
    };
    createMobileNav();
}

// Listen for scroll events to animate stats
window.addEventListener('scroll', animateStats);
window.addEventListener('load', animateStats);

// Add scroll reveal animation to sections
const revealOnScroll = () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight * 0.75;
        
        if (isInView) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
};

// Initialize scroll reveal
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.6s ease-out';
});

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add scroll animation for elements
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.service-card, .stat-card, .element');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const isVisible = (elementTop < window.innerHeight) && (elementBottom >= 0);
        
        if (isVisible) {
            element.classList.add('animate');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Interactive Background Animation
function initInteractiveBackground() {
    const background = document.querySelector('.background');
    const canvas = document.createElement('canvas');
    canvas.classList.add('interactive-bg');
    background.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    
    // Smooth cursor tracking
    let mouseX = width / 2;
    let mouseY = height / 2;
    let currentX = mouseX;
    let currentY = mouseY;
    
    // Particle settings
    const particleCount = 80;
    const particles = [];
    
    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.size = Math.random() * 2 + 0.5;
            this.baseX = this.x;
            this.baseY = this.y;
            this.density = (Math.random() * 20) + 5;
            this.velocityX = 0;
            this.velocityY = 0;
            this.friction = 0.95; // Add friction for smoother movement
            this.springFactor = 0.08; // Spring force for return movement
        }
        
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(124, 58, 237, 0.5)';
            ctx.fill();
        }
        
        update() {
            // Calculate distance to cursor
            let dx = currentX - this.x;
            let dy = currentY - this.y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            let force = (Math.max(100 - distance, 0) / 100) * this.density;
            
            if (distance < 100) {
                // Apply smooth force towards cursor
                this.velocityX += (dx / distance) * force * 0.2;
                this.velocityY += (dy / distance) * force * 0.2;
            }
            
            // Spring force back to original position
            let homeX = this.baseX - this.x;
            let homeY = this.baseY - this.y;
            this.velocityX += homeX * this.springFactor;
            this.velocityY += homeY * this.springFactor;
            
            // Apply friction
            this.velocityX *= this.friction;
            this.velocityY *= this.friction;
            
            // Update position
            this.x += this.velocityX;
            this.y += this.velocityY;
        }
    }
    
    function init() {
        particles.length = 0;
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }
    
    function animate() {
        ctx.clearRect(0, 0, width, height);
        
        // Smooth cursor movement
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;
        
        // Update and draw particles
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        // Draw connecting lines with smooth opacity
        particles.forEach((particle, index) => {
            for (let j = index + 1; j < particles.length; j++) {
                let dx = particle.x - particles[j].x;
                let dy = particle.y - particles[j].y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 150) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(124, 58, 237, ${0.15 * (1 - distance/150)})`; // Smoother line opacity
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(particle.x, particle.y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        });
        
        requestAnimationFrame(animate);
    }
    
    // Smooth cursor tracking
    let throttleTimer;
    const throttle = (callback, time) => {
        if (throttleTimer) return;
        throttleTimer = setTimeout(() => {
            callback();
            throttleTimer = null;
        }, time);
    };
    
    window.addEventListener('mousemove', (e) => {
        throttle(() => {
            mouseX = e.x;
            mouseY = e.y;
        }, 10);
    });
    
    // Touch support with smooth tracking
    window.addEventListener('touchmove', (e) => {
        e.preventDefault();
        throttle(() => {
            mouseX = e.touches[0].clientX;
            mouseY = e.touches[0].clientY;
        }, 10);
    });
    
    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        init();
    });
    
    init();
    animate();
}

// Mobile Navigation
function initMobileNav() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navLinks.contains(e.target) && !navToggle.contains(e.target) && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }
}

// Enhanced Logo Switching Mechanism
function setupLogoBlink() {
    const logoImg = document.querySelector('.logo-img');
    if (!logoImg) return;

    // Add cache-busting and logging
    const logos = [
        'images/vd-logo.svg?v=' + Date.now(), 
        'images/vd-logo1.svg?v=' + Date.now()
    ];
    let currentLogoIndex = 0;

    function blinkLogo() {
        try {
            // Alternate logos
            currentLogoIndex = (currentLogoIndex + 1) % logos.length;
            logoImg.src = logos[currentLogoIndex];
            
            // Set next blink with some randomness to feel more natural
            const nextBlinkTime = getRandomInterval(800, 3000); // Between 0.8 and 3 seconds
            setTimeout(blinkLogo, nextBlinkTime);
        } catch (error) {
            console.error('Logo Blinking Error:', error);
        }
    }

    // Initial logo setup with error handling
    try {
        // Start logo blinking
        blinkLogo();
    } catch (initError) {
        console.error('Logo Initialization Error:', initError);
    }
}

// Ensure logo setup runs after DOM is fully loaded
document.addEventListener('DOMContentLoaded', setupLogoBlink);

// Initialize all scripts
document.addEventListener('DOMContentLoaded', () => {
    initMobileNav();
    initInteractiveBackground();
});
