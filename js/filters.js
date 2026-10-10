/**
 * PRODUCT FILTERS & CATALOG ENGINE (filters.js)
 * Live search, multi-facet category & brand filtering, sorting,
 * URL query parameter synchronization, and responsive state rendering.
 */

function initializeProductFilters() {
  const catalogGrid = document.getElementById('catalogGrid');
  const resultsCount = document.getElementById('resultsCount');
  const searchInput = document.getElementById('catalogSearch');
  const sortSelect = document.getElementById('catalogSort');
  const activeTagsContainer = document.getElementById('activeFilterTags');
  const clearFiltersBtn = document.getElementById('clearAllFilters');
  const categoryFilters = document.querySelectorAll('input[name="categoryFilter"]');
  const brandFilters = document.querySelectorAll('input[name="brandFilter"]');
  const sidebar = document.querySelector('.catalog-sidebar');
  const mobileFilterToggle = document.getElementById('mobileFilterToggle');
  const mobileSidebarClose = document.getElementById('mobileSidebarClose');
  const sidebarOverlay = document.getElementById('catalogSidebarOverlay');
  const applyMobileBtn = document.getElementById('applyMobileFiltersBtn');

  if (!catalogGrid) return; // Not on catalog page or container missing

  // State object
  const state = {
    search: '',
    selectedCategory: 'all',
    selectedBrands: [],
    sortBy: 'default'
  };

  // 1. Read URL query parameters (e.g. products.html?category=Waterproofing+Solutions)
  const urlParams = new URLSearchParams(window.location.search);
  const paramCategory = urlParams.get('category');
  const paramSearch = urlParams.get('search');
  const paramBrand = urlParams.get('brand');

  if (paramCategory) {
    state.selectedCategory = paramCategory;
    const matchingRadio = document.querySelector(`input[name="categoryFilter"][value="${paramCategory}"]`);
    if (matchingRadio) matchingRadio.checked = true;
  }

  if (paramSearch) {
    state.search = paramSearch;
    if (searchInput) searchInput.value = paramSearch;
  }

  if (paramBrand) {
    state.selectedBrands = [paramBrand];
    const matchingCheckbox = document.querySelector(`input[name="brandFilter"][value="${paramBrand}"]`);
    if (matchingCheckbox) matchingCheckbox.checked = true;
  }

  // Helper: Debounce function for smooth search typing
  function debounce(func, wait = 250) {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }

  // 2. Filter & Sort Logic
  function getFilteredProducts() {
    let list = [...window.BuildSupplyData.getAllProducts()];

    // Search filter (name, brand, category, description, applications)
    if (state.search.trim()) {
      const q = state.search.toLowerCase().trim();
      list = list.filter(item => 
        item.name.toLowerCase().includes(q) ||
        item.brand.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.shortDesc.toLowerCase().includes(q) ||
        item.applications.some(app => app.toLowerCase().includes(q))
      );
    }

    // Category filter
    if (state.selectedCategory && state.selectedCategory !== 'all') {
      list = list.filter(item => item.category.toLowerCase() === state.selectedCategory.toLowerCase());
    }

    // Brand filter (multi-select)
    if (state.selectedBrands.length > 0) {
      list = list.filter(item => state.selectedBrands.includes(item.brand));
    }

    // Sorting
    if (state.sortBy === 'name-asc') {
      list.sort((a, b) => a.name.localeCompare(b.name));
    } else if (state.sortBy === 'name-desc') {
      list.sort((a, b) => b.name.localeCompare(a.name));
    } else if (state.sortBy === 'brand') {
      list.sort((a, b) => a.brand.localeCompare(b.brand));
    }

    return list;
  }

  // 3. Render Card HTML
  function renderProductCard(p) {
    return `
      <article class="product-card" data-id="${p.id}" data-category="${p.category}" data-brand="${p.brand}">
        <div class="product-card__image-wrap">
          <span class="badge badge--accent product-card__badge">${p.badge || 'Verified Solution'}</span>
          <img src="${p.image}" alt="${p.name}" class="product-card__image" loading="lazy">
        </div>
        <div class="product-card__content">
          <div class="product-card__meta">
            <span class="product-card__brand">${p.brand}</span>
            <span class="product-card__category">${p.category}</span>
          </div>
          <h3 class="product-card__title">${p.name}</h3>
          <p class="product-card__description">${p.shortDesc}</p>
          <div class="product-card__specs">
            <span class="badge">${p.packaging[0] || 'Standard Pack'}</span>
          </div>
          <div class="product-card__actions">
            <a href="product-details.html?id=${p.id}" class="btn btn--outline btn--sm">View Details</a>
            <button type="button" class="btn btn--primary btn--sm js-quick-quote-trigger" data-product-id="${p.id}" data-product-name="${p.name}" data-product-brand="${p.brand}">
              Enquire Now
            </button>
          </div>
        </div>
      </article>
    `;
  }

  // 4. Render Empty State
  function renderEmptyState() {
    return `
      <div class="empty-state" style="grid-column: 1 / -1;">
        <svg class="empty-state__icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 class="empty-state__title">No matching products found</h3>
        <p class="empty-state__description">We couldn't find any products matching your specific search or filter criteria. Try adjusting your selections or contact our technical team for custom supply requests.</p>
        <button type="button" class="btn btn--secondary btn--sm" id="emptyStateResetBtn">
          Clear All Filters
        </button>
      </div>
    `;
  }

  // 5. Update Active Tags UI
  function updateActiveTags() {
    if (!activeTagsContainer) return;
    let html = '';

    if (state.selectedCategory !== 'all') {
      html += `
        <span class="active-filter-tag">
          Category: ${state.selectedCategory}
          <button type="button" data-tag-type="category" aria-label="Remove category filter">&times;</button>
        </span>
      `;
    }

    state.selectedBrands.forEach(b => {
      html += `
        <span class="active-filter-tag">
          Brand: ${b}
          <button type="button" data-tag-type="brand" data-tag-value="${b}" aria-label="Remove brand filter">&times;</button>
        </span>
      `;
    });

    if (state.search.trim()) {
      html += `
        <span class="active-filter-tag">
          Search: "${state.search}"
          <button type="button" data-tag-type="search" aria-label="Remove search query">&times;</button>
        </span>
      `;
    }

    if (html.length > 0) {
      html += `<span class="clear-all-tags" id="clearTagsAction">Reset All</span>`;
      activeTagsContainer.innerHTML = html;
      activeTagsContainer.style.display = 'flex';
    } else {
      activeTagsContainer.innerHTML = '';
      activeTagsContainer.style.display = 'none';
    }
  }

  // 6. Update Catalog Display
  function render() {
    const filtered = getFilteredProducts();

    if (resultsCount) {
      resultsCount.innerHTML = `Showing <strong>${filtered.length}</strong> of <strong>${window.BuildSupplyData.products.length}</strong> products`;
    }

    if (filtered.length === 0) {
      catalogGrid.innerHTML = renderEmptyState();
      const emptyReset = document.getElementById('emptyStateResetBtn');
      if (emptyReset) emptyReset.addEventListener('click', resetAllFilters);
    } else {
      catalogGrid.innerHTML = filtered.map(renderProductCard).join('');
    }

    updateActiveTags();

    // Re-bind quick quote modal triggers for dynamically created cards
    if (window.bindQuickQuoteTriggers) {
      window.bindQuickQuoteTriggers();
    }
  }

  // 7. Reset all filters
  function resetAllFilters() {
    state.search = '';
    state.selectedCategory = 'all';
    state.selectedBrands = [];
    state.sortBy = 'default';

    if (searchInput) searchInput.value = '';
    if (sortSelect) sortSelect.value = 'default';

    const allCatRadio = document.querySelector('input[name="categoryFilter"][value="all"]');
    if (allCatRadio) allCatRadio.checked = true;

    brandFilters.forEach(cb => cb.checked = false);

    // Clean URL query string
    window.history.replaceState({}, '', window.location.pathname);
    render();
  }

  // 8. Event Listeners
  if (searchInput) {
    searchInput.addEventListener('input', debounce((e) => {
      state.search = e.target.value;
      render();
    }));
  }

  categoryFilters.forEach(radio => {
    radio.addEventListener('change', (e) => {
      state.selectedCategory = e.target.value;
      render();
    });
  });

  brandFilters.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      state.selectedBrands = Array.from(brandFilters)
        .filter(cb => cb.checked)
        .map(cb => cb.value);
      render();
    });
  });

  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      state.sortBy = e.target.value;
      render();
    });
  }

  if (clearFiltersBtn) {
    clearFiltersBtn.addEventListener('click', resetAllFilters);
  }

  if (activeTagsContainer) {
    activeTagsContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('button');
      const reset = e.target.closest('#clearTagsAction');

      if (reset) {
        resetAllFilters();
        return;
      }

      if (btn) {
        const type = btn.getAttribute('data-tag-type');
        if (type === 'category') {
          state.selectedCategory = 'all';
          const allCatRadio = document.querySelector('input[name="categoryFilter"][value="all"]');
          if (allCatRadio) allCatRadio.checked = true;
        } else if (type === 'brand') {
          const val = btn.getAttribute('data-tag-value');
          state.selectedBrands = state.selectedBrands.filter(b => b !== val);
          const cb = document.querySelector(`input[name="brandFilter"][value="${val}"]`);
          if (cb) cb.checked = false;
        } else if (type === 'search') {
          state.search = '';
          if (searchInput) searchInput.value = '';
        }
        render();
      }
    });
  }

  // 9. Mobile Filter Drawer Open / Close
  function openMobileFilters() {
    if (sidebar) sidebar.classList.add('is-open');
    if (sidebarOverlay) sidebarOverlay.classList.add('is-active');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileFilters() {
    if (sidebar) sidebar.classList.remove('is-open');
    if (sidebarOverlay) sidebarOverlay.classList.remove('is-active');
    document.body.style.overflow = '';
  }

  if (mobileFilterToggle) {
    mobileFilterToggle.addEventListener('click', openMobileFilters);
  }

  if (mobileSidebarClose) {
    mobileSidebarClose.addEventListener('click', closeMobileFilters);
  }

  if (sidebarOverlay) {
    sidebarOverlay.addEventListener('click', closeMobileFilters);
  }

  if (applyMobileBtn) {
    applyMobileBtn.addEventListener('click', closeMobileFilters);
  }

  // Close filter drawer on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sidebar && sidebar.classList.contains('is-open')) {
      closeMobileFilters();
    }
  });

  // Initial render
  render();
}

document.addEventListener('DOMContentLoaded', initializeProductFilters);
