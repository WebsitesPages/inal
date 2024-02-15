document.addEventListener('DOMContentLoaded', function() {

    const video = document.getElementById('background-video');
    const playButton = document.getElementById('playVideoButton');

    playButton.addEventListener('click', function() {
        video.muted = true;
        video.play().catch(error => {
            console.error("Video play failed:", error);
        });
    });
    video.play().catch(error => {
        console.error("Video play failed:", error);
        // Zeigen Sie hier eine Benachrichtigung oder einen Button an, um das Video manuell abzuspielen.
    });

    setTimeout(function() {
        const header = document.getElementById('myHeader');
        header.style.visibility = 'visible';
        header.style.opacity = '1';
    }, 3000); // 3000 Millisekunden Verzögerung

    document.addEventListener('scroll', function() {
        var scrollPosition = window.pageYOffset;
        var video = document.getElementById('background-video');
        video.style.top = -(scrollPosition * 2) + 'px'; // Geschwindigkeit des Effekts anpassen
    });
    
// Funktion zum Registrieren der Event-Listener für einen bestimmten Header
function registerHeaderEventListeners(header) {
    const menuIcon = header.querySelector('.menu-icon');
    const menu = header.querySelector('.menu');
    const closeIcon = header.querySelector('.close-icon');
    const menuItems = header.querySelectorAll('.menu li a');
    
    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('active');
        menu.classList.toggle('active');
        document.body.classList.add('no-scroll');

    });

    closeIcon.addEventListener('click', () => {
        menuIcon.classList.remove('active');
        menu.classList.remove('active');
        document.body.classList.remove('no-scroll');

    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && menu.classList.contains('active')) {
            menuIcon.classList.remove('active');
            menu.classList.remove('active');
        }
    });

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            menuIcon.classList.remove('active');
            menu.classList.remove('active');
        });
    });

    // Smooth scrolling für Anker-Links
    header.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            let target = document.querySelector(this.getAttribute('href'));
            if (target) {
                let headerHeight = header.offsetHeight;
                let targetPosition = target.getBoundingClientRect().top + window.pageYOffset;

                window.scrollTo({
                    top: targetPosition - headerHeight - parseInt(getComputedStyle(target).marginTop),
                    behavior: 'smooth'
                });
            }
        });
    });
}
// Header visibility
window.addEventListener('DOMContentLoaded', (event) => {
    const originalHeader = document.getElementById('myHeader');
    let clonedHeader = originalHeader.cloneNode(true);
    clonedHeader.id = 'stickyHeader';
    clonedHeader.classList.add('sticky');
    document.body.appendChild(clonedHeader);

    // Registrieren Sie die Event-Listener für beide Header
    registerHeaderEventListeners(originalHeader);
    registerHeaderEventListeners(clonedHeader);
});

// Aktualisieren Sie Ihren Scroll-Event-Listener, um den neuen Header anzuzeigen/zu verbergen
window.addEventListener('scroll', function () {
    let stickyHeader = document.getElementById('stickyHeader');
    let menuIcon = stickyHeader.querySelector('.menu-icon');
    
    if (window.pageYOffset > 100) {
        stickyHeader.style.visibility = "visible";
        stickyHeader.style.opacity = "1";
        menuIcon.classList.add('menu-icon-raised');  // Hinzufügen der Klasse
    } 
    else {
        stickyHeader.style.visibility = "hidden";
        stickyHeader.style.opacity = "0";
        menuIcon.classList.remove('menu-icon-raised');  // Entfernen der Klasse
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        let target = document.querySelector(this.getAttribute('href'));
        if (target) {
            let headerHeight = document.getElementById('myHeader').offsetHeight;
            let targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
            
            window.scrollTo({
                top: targetPosition - headerHeight - parseInt(getComputedStyle(target).marginTop),
                behavior: 'smooth'
            });
        }
    });
});




});

