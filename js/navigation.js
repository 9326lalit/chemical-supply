/**
 * NAVIGATION SCRIPT (navigation.js)
 * Controls sticky header, scroll state transitions, mobile drawer menu,
 * accessibility attributes (aria-expanded), and active page link detection.
 */

function initializeNavigation() {
  const header = document.querySelector('.header');
  const toggleBtn = document.querySelector('.header__toggle');
  const mobileDrawer = document.querySelector('.mobile-drawer');
  const drawerOverlay = document.querySelector('.mobile-drawer-overlay');
  const drawerCloseBtn = document.querySelector('.mobile-drawer__close');
  const navLinks = document.querySelectorAll('.header__nav-link, .mobile-drawer__link');

  // 1. Sticky Header scroll detection
  function handleScroll() {
    if (!header) return;
    if (window.scrollY > 20) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check

  // 2. Mobile Menu Drawer
  function openMobileMenu() {
    if (!mobileDrawer || !drawerOverlay) return;
    mobileDrawer.classList.add('is-active');
    drawerOverlay.classList.add('is-active');
    if (toggleBtn) {
      toggleBtn.classList.add('is-active');
      toggleBtn.setAttribute('aria-expanded', 'true');
    }
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    if (!mobileDrawer || !drawerOverlay) return;
    mobileDrawer.classList.remove('is-active');
    drawerOverlay.classList.remove('is-active');
    if (toggleBtn) {
      toggleBtn.classList.remove('is-active');
      toggleBtn.setAttribute('aria-expanded', 'false');
    }
    document.body.style.overflow = '';
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = mobileDrawer && mobileDrawer.classList.contains('is-active');
      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });
  }

  if (drawerCloseBtn) {
    drawerCloseBtn.addEventListener('click', closeMobileMenu);
  }

  if (drawerOverlay) {
    drawerOverlay.addEventListener('click', closeMobileMenu);
  }

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileDrawer && mobileDrawer.classList.contains('is-active')) {
      closeMobileMenu();
    }
  });

  // Close mobile drawer when clicking any link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMobileMenu();
    });
  });

  // 3. Highlight Active Page Link based on pathname
  const currentPath = window.location.pathname.toLowerCase();
  const currentFile = currentPath.substring(currentPath.lastIndexOf('/') + 1) || 'index.html';

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    const linkFile = href.substring(href.lastIndexOf('/') + 1);

    if (linkFile === currentFile || (currentFile === '' && linkFile === 'index.html')) {
      link.classList.add('is-active');
    } else {
      link.classList.remove('is-active');
    }
  });
}

document.addEventListener('DOMContentLoaded', initializeNavigation);
