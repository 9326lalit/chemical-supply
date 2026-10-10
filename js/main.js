/**
 * MAIN ORCHESTRATOR (main.js)
 * Connects page templates, injects universal RFQ modal and WhatsApp button,
 * dynamically loads product details on product-details.html, and handles homepage tabs.
 */

(function () {
  'use strict';

  // 1. Universal UI Injection: RFQ Modal & WhatsApp Floating Button
  function injectUniversalComponents() {
    // Inject Quote Modal if not already present
    if (!document.getElementById('quoteModal')) {
      const modalHtml = `
        <div class="modal-overlay" id="quoteModal" aria-hidden="true" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
          <div class="modal-container">
            <div class="modal-header">
              <div>
                <h3 class="modal-title" id="modalTitle">Request a B2B Quotation</h3>
                <p id="modalProductContext" style="font-size:0.85rem;color:var(--color-accent);margin-top:4px;display:none;"></p>
              </div>
              <button type="button" class="modal-close" aria-label="Close dialog">&times;</button>
            </div>
            <div class="modal-body">
              <form class="js-validate-form" id="modalQuoteForm" novalidate>
                <div class="form-row">
                  <div class="form-group">
                    <label class="form-label" for="modalName">Full Name <span class="required">*</span></label>
                    <input type="text" id="modalName" name="fullName" class="form-input" placeholder="e.g. John Doe" required>
                  </div>
                  <div class="form-group">
                    <label class="form-label" for="modalCompany">Company / Business Name <span class="required">*</span></label>
                    <input type="text" id="modalCompany" name="companyName" class="form-input" placeholder="e.g. Skyline Builders Ltd." required>
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group">
                    <label class="form-label" for="modalPhone">Phone / Mobile <span class="required">*</span></label>
                    <input type="tel" id="modalPhone" name="phoneNumber" class="form-input" placeholder="+1 (555) 000-0000" required>
                  </div>
                  <div class="form-group">
                    <label class="form-label" for="modalEmail">Business Email <span class="required">*</span></label>
                    <input type="email" id="modalEmail" name="email" class="form-input" placeholder="purchasing@company.com" required>
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group">
                    <label class="form-label" for="modalRequirement">Product / Requirement <span class="required">*</span></label>
                    <input type="text" id="modalRequirement" name="productRequirement" class="form-input" placeholder="e.g. Micro Concrete 500 bags" required>
                  </div>
                  <div class="form-group">
                    <label class="form-label" for="modalQuantity">Estimated Quantity / Volume</label>
                    <input type="text" id="modalQuantity" name="quantity" class="form-input" placeholder="e.g. 200 bags / 5 barrels">
                  </div>
                </div>

                <div class="form-group">
                  <label class="form-label" for="modalProject">Project Sector / Delivery Location</label>
                  <input type="text" id="modalProject" name="projectType" class="form-input" placeholder="e.g. Commercial Metro Project, Site Depot A">
                </div>

                <div class="form-group">
                  <label class="form-label" for="modalMessage">Specifications / Notes <span class="required">*</span></label>
                  <textarea id="modalMessage" name="message" class="form-textarea" rows="3" placeholder="Specify any delivery deadlines, technical standards, or specific brand preferences..." required></textarea>
                </div>

                <button type="submit" class="btn btn--primary btn--full btn--lg">
                  Submit Quotation Request
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      `;
      document.body.insertAdjacentHTML('beforeend', modalHtml);
    }

    // Inject WhatsApp Floating Button if not already present
    if (!document.querySelector('.whatsapp-float')) {
      const waHtml = `
        <a href="#" class="whatsapp-float js-whatsapp-link" aria-label="Chat on WhatsApp" data-whatsapp-msg="Hello, I would like to enquire about your construction chemicals and building solutions supply.">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.06-2.18-.553-1.614-.666-2.613-2.316-2.694-2.424-.079-.108-.644-.86-.644-1.637 0-.777.408-1.161.552-1.32.144-.16.315-.2.421-.2.105 0 .21.002.302.006.098.005.228-.037.357.274.131.316.446 1.087.485 1.167.039.079.065.174.013.28-.052.105-.078.172-.157.264-.079.092-.165.205-.236.276-.079.078-.162.164-.07.322.092.158.408.673.874 1.088.6.534 1.106.699 1.264.778.158.079.25.066.342-.039.092-.105.394-.46.499-.618.105-.158.21-.131.355-.079.145.053.918.433 1.076.512.158.079.263.118.302.184.039.066.039.382-.105.787zM12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.98-1.306C8.423 21.536 10.15 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
          </svg>
          <span class="whatsapp-float__text">Chat with Sales</span>
        </a>
      `;
      document.body.insertAdjacentHTML('beforeend', waHtml);
    }

    // Inject Back to Top button
    if (!document.querySelector('.back-to-top')) {
      const topBtnHtml = `
        <button type="button" class="back-to-top" aria-label="Back to top">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      `;
      document.body.insertAdjacentHTML('beforeend', topBtnHtml);
    }
  }

  // 2. Home Page Featured Tab Filters
  function initializeHomeFeaturedPills() {
    const pills = document.querySelectorAll('.featured-pill');
    const grid = document.getElementById('homeFeaturedGrid');
    if (!pills.length || !grid) return;

    pills.forEach(pill => {
      pill.addEventListener('click', function () {
        pills.forEach(p => p.classList.remove('is-active'));
        this.classList.add('is-active');

        const cat = this.getAttribute('data-category');
        renderHomeFeaturedProducts(cat);
      });
    });

    renderHomeFeaturedProducts('all');
  }

  function renderHomeFeaturedProducts(category) {
    const grid = document.getElementById('homeFeaturedGrid');
    if (!grid) return;

    let items = window.BuildSupplyData.getFeaturedProducts();
    if (category !== 'all') {
      items = items.filter(p => p.category === category);
    }

    grid.innerHTML = items.map(p => `
      <article class="product-card">
        <div class="product-card__image-wrap">
          <span class="badge badge--accent product-card__badge">${p.badge}</span>
          <img src="${p.image}" alt="${p.name}" class="product-card__image" loading="lazy">
        </div>
        <div class="product-card__content">
          <div class="product-card__meta">
            <span class="product-card__brand">${p.brand}</span>
            <span class="product-card__category">${p.category}</span>
          </div>
          <h3 class="product-card__title">${p.name}</h3>
          <p class="product-card__description">${p.shortDesc}</p>
          <div class="product-card__actions">
            <a href="product-details.html?id=${p.id}" class="btn btn--outline btn--sm">View Details</a>
            <button type="button" class="btn btn--primary btn--sm js-quick-quote-trigger" data-product-id="${p.id}" data-product-name="${p.name}" data-product-brand="${p.brand}">
              Enquire Now
            </button>
          </div>
        </div>
      </article>
    `).join('');

    if (window.bindQuickQuoteTriggers) {
      window.bindQuickQuoteTriggers();
    }
  }

  // 3. Product Details Page Dynamic Loader
  function initializeProductDetailsPage() {
    const detailContainer = document.getElementById('productDetailContainer');
    if (!detailContainer) return;

    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id') || '1'; // Default to first product if none specified
    const product = window.BuildSupplyData.getProductById(id) || window.BuildSupplyData.products[0];

    // Update document title & metadata
    document.title = `${product.name} | BuildSupply B2B Distributor`;

    // Update breadcrumb
    const breadcrumbCategory = document.getElementById('detailBreadcrumbCategory');
    const breadcrumbCurrent = document.getElementById('detailBreadcrumbCurrent');
    if (breadcrumbCategory) {
      breadcrumbCategory.textContent = product.category;
      breadcrumbCategory.href = `products.html?category=${encodeURIComponent(product.category)}`;
    }
    if (breadcrumbCurrent) breadcrumbCurrent.textContent = product.name;

    // Render specifications table rows
    const specsRows = Object.entries(product.techHighlights).map(([key, val]) => `
      <tr>
        <th>${key}</th>
        <td>${val}</td>
      </tr>
    `).join('');

    // Render packaging tags
    const packagingTags = product.packaging.map(pkg => `
      <span class="packaging-pill">${pkg}</span>
    `).join('');

    // Render key benefits
    const benefitsList = product.benefits.map(b => `
      <li class="benefits-item">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
        </svg>
        <span>${b}</span>
      </li>
    `).join('');

    // Render applications
    const appsList = product.applications.map(app => `
      <li class="benefits-item">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>${app}</span>
      </li>
    `).join('');

    // Render suitable for badges
    const suitableBadges = product.suitableFor.map(s => `
      <span class="badge badge--blue">${s}</span>
    `).join('');

    detailContainer.innerHTML = `
      <div class="product-detail-layout">
        <!-- Gallery Column -->
        <div class="product-gallery">
          <div class="product-gallery__main">
            <span class="badge badge--accent product-gallery__badge">${product.badge}</span>
            <img src="${product.image}" alt="${product.name}" id="mainDetailImage">
          </div>
          <div class="product-gallery__thumbs">
            <div class="gallery-thumb is-active" data-src="${product.image}">
              <img src="${product.image}" alt="View 1">
            </div>
            <div class="gallery-thumb" data-src="${product.image}">
              <img src="${product.image}" alt="View 2">
            </div>
          </div>
        </div>

        <!-- Info Column -->
        <div class="product-info-wrap">
          <div class="product-info-meta">
            <span class="product-info-brand">${product.brand}</span>
            <span class="badge badge--blue">${product.category}</span>
          </div>

          <h1 class="product-info-title">${product.name}</h1>
          <p class="product-info-desc">${product.shortDesc}</p>

          <!-- Packaging & Supply Details -->
          <div class="product-spec-block">
            <h3 class="product-spec-block__title">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
              Available Packaging & Estimated Coverage
            </h3>
            <div class="packaging-tags" style="margin-bottom: 12px;">
              ${packagingTags}
            </div>
            <p style="font-size:0.88rem;color:var(--color-text-muted);">${product.coverage}</p>
          </div>

          <!-- Key Benefits -->
          <div class="product-spec-block">
            <h3 class="product-spec-block__title">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Key Performance Advantages
            </h3>
            <ul class="benefits-list">
              ${benefitsList}
            </ul>
          </div>

          <!-- Recommended Applications -->
          <div class="product-spec-block">
            <h3 class="product-spec-block__title">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              Recommended Site Applications
            </h3>
            <ul class="benefits-list" style="margin-bottom:16px;">
              ${appsList}
            </ul>
            <div style="font-size:0.85rem;color:var(--color-text-muted);margin-bottom:6px;font-weight:600;">Suitable Customer Sectors:</div>
            <div style="display:flex;flex-wrap:wrap;gap:6px;">
              ${suitableBadges}
            </div>
          </div>

          <!-- Technical Specifications Table -->
          <div class="product-spec-block">
            <h3 class="product-spec-block__title">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Technical Highlights & Manufacturer Lab Specs
            </h3>
            <table class="tech-spec-table">
              <tbody>
                ${specsRows}
              </tbody>
            </table>
            <div style="font-size:0.75rem;color:var(--color-text-subtle);margin-top:10px;font-style:italic;">
              * Note: Data figures represent typical laboratory averages provided by manufacturer technical sheets. Specific batch test certificates provided upon dispatch.
            </div>
          </div>

          <!-- Commercial Action Bar -->
          <div class="product-cta-bar">
            <button type="button" class="btn btn--primary btn--lg js-quick-quote-trigger" data-product-id="${product.id}" data-product-name="${product.name}" data-product-brand="${product.brand}">
              Request Official Quotation
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            <a href="contact.html" class="btn btn--secondary btn--lg">Talk to Technical Desk</a>
            <button type="button" class="btn btn--outline btn--lg" id="downloadTdsBtn">
              Download Technical Sheet (PDF)
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    `;

    // TDS Download button simulation
    const tdsBtn = document.getElementById('downloadTdsBtn');
    if (tdsBtn) {
      tdsBtn.addEventListener('click', () => {
        alert(`Downloading Technical Data Sheet (TDS) for ${product.name}...\n\n[In production: Direct link to manufacturer PDF certificate repository]`);
      });
    }

    // Interactive thumbnail switcher
    const thumbs = detailContainer.querySelectorAll('.gallery-thumb');
    const mainImg = document.getElementById('mainDetailImage');
    thumbs.forEach(thumb => {
      thumb.addEventListener('click', function () {
        thumbs.forEach(t => t.classList.remove('is-active'));
        this.classList.add('is-active');
        const newSrc = this.getAttribute('data-src');
        if (mainImg && newSrc) {
          mainImg.src = newSrc;
        }
      });
    });

    // Re-bind modal triggers
    if (window.bindQuickQuoteTriggers) {
      window.bindQuickQuoteTriggers();
    }
  }

  // DOMContentLoaded init
  document.addEventListener('DOMContentLoaded', () => {
    injectUniversalComponents();
    initializeHomeFeaturedPills();
    initializeProductDetailsPage();
  });
})();
