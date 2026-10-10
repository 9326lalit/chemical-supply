/**
 * MODAL DIALOG CONTROLLER (modal.js)
 * Manages accessible modal states (RFQ enquiry modal & quick view),
 * traps focus, prevents background scrolling, and pre-populates product RFQ contexts.
 */

function initializeModalController() {
  const modalOverlay = document.getElementById('quoteModal');
  if (!modalOverlay) return;

  const modalCloseBtn = modalOverlay.querySelector('.modal-close');
  const modalReqInput = document.getElementById('modalRequirement');
  const modalSubtitle = document.getElementById('modalProductContext');

  // Open Quote Modal
  function openQuoteModal(productName = '', productBrand = '') {
    if (modalReqInput) {
      if (productName) {
        modalReqInput.value = `Enquiry for: ${productName} (${productBrand || 'Manufacturer Brand'})`;
        if (modalSubtitle) {
          modalSubtitle.textContent = `Requesting quotation for ${productName}`;
          modalSubtitle.style.display = 'block';
        }
      } else {
        modalReqInput.value = '';
        if (modalSubtitle) {
          modalSubtitle.textContent = 'Submit your project specifications or bill of materials for bulk quotation.';
        }
      }
    }

    modalOverlay.classList.add('is-active');
    modalOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Focus first input
    const firstInput = modalOverlay.querySelector('input:not([type="hidden"]), select, textarea');
    if (firstInput) {
      setTimeout(() => firstInput.focus(), 100);
    }
  }

  // Close Quote Modal
  function closeQuoteModal() {
    modalOverlay.classList.remove('is-active');
    modalOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // Close on backdrop click
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      closeQuoteModal();
    }
  });

  // Close on close button click
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeQuoteModal);
  }

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('is-active')) {
      closeQuoteModal();
    }
  });

  // Attach global triggers
  function bindQuickQuoteTriggers() {
    const triggers = document.querySelectorAll('.js-quick-quote-trigger, a[href="#quote"], .header__cta-btn');
    triggers.forEach(trigger => {
      // Remove old listener to avoid duplicates
      trigger.removeEventListener('click', handleTriggerClick);
      trigger.addEventListener('click', handleTriggerClick);
    });
  }

  function handleTriggerClick(e) {
    e.preventDefault();
    const productName = this.getAttribute('data-product-name') || '';
    const productBrand = this.getAttribute('data-product-brand') || '';
    openQuoteModal(productName, productBrand);
  }

  // Expose to window for dynamic use
  window.openQuoteModal = openQuoteModal;
  window.closeQuoteModal = closeQuoteModal;
  window.bindQuickQuoteTriggers = bindQuickQuoteTriggers;

  bindQuickQuoteTriggers();
}

document.addEventListener('DOMContentLoaded', initializeModalController);
