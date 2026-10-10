/**
 * CONTACT & RFQ ENQUIRY CONTROLLER (contact.js)
 * Robust client-side validation, error messaging, submission simulation,
 * future CRM/REST API readiness, and WhatsApp deep-link generation.
 */

// Configurable B2B Communication Constants
const WHATSAPP_NUMBER = "+1234567890"; // Placeholder: REPLACE_WITH_ACTUAL_PHONE_NUMBER
const DEFAULT_WHATSAPP_MESSAGE = "Hello, I would like to enquire about your construction chemicals and building products supply.";

function initializeContactForms() {
  const forms = document.querySelectorAll('.js-validate-form');

  forms.forEach(form => {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      handleFormSubmit(this);
    });

    // Clear error on input
    const inputs = form.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
      input.addEventListener('input', () => {
        clearFieldError(input);
      });
      input.addEventListener('change', () => {
        clearFieldError(input);
      });
    });
  });

  // Setup WhatsApp deep links
  setupWhatsAppTriggers();
}

// Field validation helper
function validateField(input) {
  const val = input.value.trim();
  const name = input.getAttribute('name') || input.id;
  const isRequired = input.hasAttribute('required');

  if (isRequired && !val) {
    showFieldError(input, 'This field is required.');
    return false;
  }

  if (input.type === 'email' && val) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(val)) {
      showFieldError(input, 'Please enter a valid email address.');
      return false;
    }
  }

  if (input.type === 'tel' && val) {
    const phoneDigits = val.replace(/\D/g, '');
    if (phoneDigits.length < 7 || phoneDigits.length > 15) {
      showFieldError(input, 'Please enter a valid contact phone number.');
      return false;
    }
  }

  if (input.tagName.toLowerCase() === 'textarea' && isRequired && val.length < 10) {
    showFieldError(input, 'Please provide at least 10 characters detailing your requirement.');
    return false;
  }

  clearFieldError(input);
  return true;
}

function showFieldError(input, message) {
  input.classList.add('is-invalid');
  const group = input.closest('.form-group') || input.parentElement;
  let errorEl = group.querySelector('.form-error');

  if (!errorEl) {
    errorEl = document.createElement('div');
    errorEl.className = 'form-error is-visible';
    group.appendChild(errorEl);
  } else {
    errorEl.classList.add('is-visible');
  }

  errorEl.textContent = message;
}

function clearFieldError(input) {
  input.classList.remove('is-invalid');
  const group = input.closest('.form-group') || input.parentElement;
  const errorEl = group.querySelector('.form-error');
  if (errorEl) {
    errorEl.classList.remove('is-visible');
    errorEl.textContent = '';
  }
}

// Form Submission Handler
function handleFormSubmit(form) {
  const inputs = form.querySelectorAll('input:not([type="hidden"]), select, textarea');
  let isValid = true;

  inputs.forEach(input => {
    if (!validateField(input)) {
      isValid = false;
    }
  });

  if (!isValid) {
    const firstInvalid = form.querySelector('.is-invalid');
    if (firstInvalid) firstInvalid.focus();
    return;
  }

  // Gather payload data for future API backend
  const formData = new FormData(form);
  const payload = Object.fromEntries(formData.entries());
  console.log('[BUILDSUPPLY RFQ PAYLOAD READY FOR REST API]:', payload);

  // Submit button loading animation
  const submitBtn = form.querySelector('button[type="submit"]');
  const originalText = submitBtn ? submitBtn.innerHTML : 'Submit';

  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg class="animate-spin" style="width:16px;height:16px;display:inline-block;animation:spin 1s linear infinite;" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <circle cx="12" cy="12" r="10" stroke-width="4" stroke="currentColor" stroke-opacity="0.3"></circle>
        <path d="M4 12a8 8 0 018-8" stroke-width="4" stroke="currentColor"></path>
      </svg>
      Processing RFQ...
    `;
  }

  // Simulate network response latency (800ms)
  setTimeout(() => {
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
    }

    form.reset();

    // Check for success feedback element
    const successCard = form.parentElement.querySelector('.form-success-alert') || form.querySelector('.form-success-alert');
    if (successCard) {
      successCard.classList.add('is-visible');
      form.style.display = 'none';
      successCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } else {
      // In modal: show clean alert and close
      alert('Thank you. Your quotation request has been received. Our technical sales team will review your specifications and contact you promptly.');
      if (window.closeQuoteModal) {
        window.closeQuoteModal();
      }
    }
  }, 800);
}

// Quick Category Chips Selection Interaction
function setupRequirementChips() {
  const chips = document.querySelectorAll('.enquiry-chip');
  chips.forEach(chip => {
    chip.addEventListener('click', function () {
      chips.forEach(c => c.classList.remove('is-active'));
      this.classList.add('is-active');

      const cat = this.getAttribute('data-category') || this.textContent.trim();
      const form = this.closest('form') || document.getElementById('homeContactForm') || document.getElementById('modalQuoteForm');
      if (form) {
        const reqInput = form.querySelector('input[name="productRequirement"]');
        if (reqInput) {
          reqInput.value = cat;
          reqInput.classList.remove('is-invalid');
          const group = reqInput.closest('.form-group');
          if (group) {
            const err = group.querySelector('.form-error');
            if (err) err.classList.remove('is-visible');
          }
        }
      }
    });
  });
}

// Simulated BOQ File Upload Interaction
function setupFileUploadMock() {
  const dropzones = document.querySelectorAll('.file-upload-mock');
  dropzones.forEach(zone => {
    zone.addEventListener('click', function () {
      const sub = this.querySelector('.file-upload-mock__sub');
      const text = this.querySelector('.file-upload-mock__text');
      if (sub && text) {
        text.innerHTML = '<span style="color:var(--color-success);font-weight:700;">&#10003; Document Attached: tender_boq_specification.pdf</span>';
        sub.textContent = '2.4 MB &bull; File ready for quotation estimator review.';
        this.style.borderColor = 'var(--color-success)';
        this.style.backgroundColor = '#ECFDF5';
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initializeContactForms();
  setupRequirementChips();
  setupFileUploadMock();
});
