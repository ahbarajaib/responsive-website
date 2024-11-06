// JavaScript to change header style on scroll
window.addEventListener('scroll', function () {
    const header = document.querySelector('.fixed-top');
    if (window.scrollY > 50) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
});

// Sidebar toggle functionality
const burgerIcon = document.getElementById('burger-icon');
const sidebar = document.getElementById('sidebar');
const closeSidebarButton = document.getElementById('close-sidebar');
const searchInput = document.getElementById('search-input');
const searchIcon = document.getElementById('search-icon');

burgerIcon.addEventListener('click', () => {
    sidebar.style.left = '0';
});

closeSidebarButton.addEventListener('click', () => {
    sidebar.style.left = '-250px';
});

searchIcon.addEventListener('click', () => {
    searchInput.style.display = searchInput.style.display === 'none' ? 'block' : 'none';
});

// Close sidebar when clicking outside or selecting an item in the sidebar
document.addEventListener('click', function (event) {
    const sidebar = document.getElementById('sidebar');
    const burgerIcon = document.getElementById('burger-icon');

    // Check if the click is outside the sidebar and burger icon
    if (!sidebar.contains(event.target) && !burgerIcon.contains(event.target)) {
        sidebar.style.left = '-250px';
    }
});

const sidebarLinks = document.querySelectorAll('#sidebar a.nav-link');

sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
        sidebar.style.left = '-250px';
    });
});

// Toggle search input visibility
searchIcon.addEventListener('click', () => {
    searchInput.style.display = searchInput.style.display === 'none' ? 'block' : 'none';
});

// For the tabs dynamically change
document.addEventListener('DOMContentLoaded', function () {
    const tabLinks = document.querySelectorAll('.nav-link');
    const tabPanes = document.querySelectorAll('.tab-pane');
    const homeContent = document.getElementById('homeContent');
    const homeOverlay = document.getElementById('home-overlay');
    const bodyElement = document.body;
    const navbar = document.querySelector('.navbar');
    const burgerIcon = document.getElementById('burger-icon').querySelector('i');

    // Function to activate a tab
    const activateTab = (targetId) => {
        tabLinks.forEach(link => link.classList.remove('active'));
        tabPanes.forEach(pane => pane.classList.remove('show', 'active'));

        const activeLink = document.querySelector(`.nav-link[href="#${targetId}"]`);
        const targetTabContent = document.getElementById(targetId);

        if (activeLink && targetTabContent) {
            activeLink.classList.add('active');
            targetTabContent.classList.add('show', 'active');
        }

        if (targetId === 'home') {
            bodyElement.classList.add('home-tab-active');
            if (homeOverlay) homeOverlay.style.display = 'block';
            navbar.classList.remove('navbar-black-text');
            burgerIcon.classList.remove('burger-icon');
            homeContent.style.display = 'block';
        } else {
            bodyElement.classList.remove('home-tab-active');
            if (homeOverlay) homeOverlay.style.display = 'none';
            navbar.classList.add('navbar-black-text');
            burgerIcon.classList.add('burger-icon-black');
            homeContent.style.display = 'none';
        }
    };

    const initialTabId = window.location.hash ? window.location.hash.substring(1) : 'home';
    activateTab(initialTabId);

    tabLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            history.pushState(null, null, `#${targetId}`);
            activateTab(targetId);
        });
    });
});
