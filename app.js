/**
 * DABAS MOBILITY SERVICES - CLIENT LOGIC & CONFIGURATION
 * Official Contact: +91 93191 12352 | dabasmobilityservices@gmail.com | Delhi, India
 */

const DABAS_CONFIG = {
  businessName: "DABAS Mobility Services",
  location: "Delhi, India",
  phone: "+91 93191 12352",
  phoneRaw: "9319112352",
  email: "dabasmobilityservices@gmail.com",
  whatsappNumber: "919319112352",
  operatingHours: "Monday – Saturday: 9:00 AM – 7:00 PM IST"
};

document.addEventListener('DOMContentLoaded', () => {
  const phoneDisplay = document.getElementById('contact-phone-display');
  if (phoneDisplay) {
    phoneDisplay.textContent = DABAS_CONFIG.phone;
    phoneDisplay.href = `tel:+91${DABAS_CONFIG.phoneRaw}`;
  }
  
  const emailDisplay = document.getElementById('contact-email-display');
  if (emailDisplay) {
    emailDisplay.textContent = DABAS_CONFIG.email;
    emailDisplay.href = `mailto:${DABAS_CONFIG.email}`;
  }
  
  const whatsappBtn = document.getElementById('whatsapp-btn');
  if (whatsappBtn) {
    const msg = encodeURIComponent(`Hello ${DABAS_CONFIG.businessName}, I would like to enquire about your commercial sedan and hatchback car rental services in Delhi.`);
    whatsappBtn.href = `https://wa.me/${DABAS_CONFIG.whatsappNumber}?text=${msg}`;
  }

  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const openIcon = document.getElementById('menu-open-icon');
  const closeIcon = document.getElementById('menu-close-icon');

  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
      const isExpanded = mobileBtn.getAttribute('aria-expanded') === 'true';
      mobileBtn.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.classList.toggle('hidden');
      openIcon.classList.toggle('hidden');
      closeIcon.classList.toggle('hidden');
    });

    const mobileLinks = document.querySelectorAll('.mobile-nav-link');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        openIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
        mobileBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const filterButtons = document.querySelectorAll('.fleet-filter-btn');
  const fleetCards = document.querySelectorAll('.fleet-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');
      filterButtons.forEach(b => {
        b.classList.remove('bg-brand-navy', 'text-white', 'shadow-sm');
        b.classList.add('text-gray-600');
      });
      btn.classList.add('bg-brand-navy', 'text-white', 'shadow-sm');
      btn.classList.remove('text-gray-600');

      fleetCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  const serviceBtns = document.querySelectorAll('.service-select-btn');
  const serviceSelect = document.getElementById('contact-service');
  const contactSection = document.getElementById('contact');

  serviceBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const serviceName = btn.getAttribute('data-service');
      if (serviceSelect && serviceName) {
        for (let i = 0; i < serviceSelect.options.length; i++) {
          if (serviceSelect.options[i].value.includes(serviceName) || serviceName.includes(serviceSelect.options[i].value)) {
            serviceSelect.selectedIndex = i;
            break;
          }
        }
      }
      if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
    });
  });

  const vehicleInfoBtns = document.querySelectorAll('.vehicle-info-btn');
  const modal = document.getElementById('vehicle-modal');
  const modalVehicleName = document.getElementById('modal-vehicle-name');
  const closeModalBtn = document.getElementById('close-modal-btn');
  const modalCancelBtn = document.getElementById('modal-cancel-btn');
  const modalProceedBtn = document.getElementById('modal-proceed-btn');
  const contactMessage = document.getElementById('contact-message');
  let currentSelectedVehicle = '';

  function openModal(vehicleName) {
    currentSelectedVehicle = vehicleName;
    if (modalVehicleName) modalVehicleName.textContent = vehicleName;
    if (modal) modal.classList.remove('hidden');
  }

  function closeModal() {
    if (modal) modal.classList.add('hidden');
  }

  vehicleInfoBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const vName = btn.getAttribute('data-vehicle') || 'Commercial Car Fleet';
      openModal(vName);
    });
  });

  if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
  if (modalCancelBtn) modalCancelBtn.addEventListener('click', closeModal);

  if (modalProceedBtn) {
    modalProceedBtn.addEventListener('click', () => {
      closeModal();
      if (serviceSelect) {
        if (currentSelectedVehicle.toLowerCase().includes('sedan')) {
          serviceSelect.value = 'Commercial Sedan Car Rental';
        } else if (currentSelectedVehicle.toLowerCase().includes('hatchback')) {
          serviceSelect.value = 'Commercial Hatchback Car Rental';
        }
      }
      if (contactMessage && currentSelectedVehicle) {
        contactMessage.value = `Enquiring about rental terms, vehicle availability, and pricing for: ${currentSelectedVehicle}.`;
      }
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        const nameInput = document.getElementById('contact-name');
        if (nameInput) nameInput.focus();
      }
    });
  }

  const enquiryForm = document.getElementById('contact-enquiry-form');
  const nameInput = document.getElementById('contact-name');
  const mobileInput = document.getElementById('contact-mobile');
  const emailInput = document.getElementById('contact-email');
  const messageInput = document.getElementById('contact-message');

  const errorName = document.getElementById('error-name');
  const errorMobile = document.getElementById('error-mobile');
  const errorEmail = document.getElementById('error-email');
  const errorService = document.getElementById('error-service');
  const errorMessage = document.getElementById('error-message');

  const submitBtn = document.getElementById('submit-enquiry-btn');
  const submitSpinner = document.getElementById('submit-spinner');
  const submitText = document.getElementById('submit-btn-text');
  const successBanner = document.getElementById('enquiry-success-banner');
  const refIdDisplay = document.getElementById('enquiry-ref-id');
  const resetBtn = document.getElementById('reset-enquiry-btn');

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function validateMobile(mobile) {
    const cleaned = mobile.replace(/[\s\-\(\)]/g, '');
    return /^(?:\+91|91|0)?[6-9]\d{9}$/.test(cleaned);
  }

  if (enquiryForm) {
    enquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
        errorName.classList.remove('hidden');
        nameInput.classList.add('border-red-500');
        isValid = false;
      } else {
        errorName.classList.add('hidden');
        nameInput.classList.remove('border-red-500');
      }

      if (!validateMobile(mobileInput.value.trim())) {
        errorMobile.classList.remove('hidden');
        mobileInput.classList.add('border-red-500');
        isValid = false;
      } else {
        errorMobile.classList.add('hidden');
        mobileInput.classList.remove('border-red-500');
      }

      if (!validateEmail(emailInput.value.trim())) {
        errorEmail.classList.remove('hidden');
        emailInput.classList.add('border-red-500');
        isValid = false;
      } else {
        errorEmail.classList.add('hidden');
        emailInput.classList.remove('border-red-500');
      }

      if (!serviceSelect.value) {
        errorService.classList.remove('hidden');
        serviceSelect.classList.add('border-red-500');
        isValid = false;
      } else {
        errorService.classList.add('hidden');
        serviceSelect.classList.remove('border-red-500');
      }

      if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
        errorMessage.classList.remove('hidden');
        messageInput.classList.add('border-red-500');
        isValid = false;
      } else {
        errorMessage.classList.add('hidden');
        messageInput.classList.remove('border-red-500');
      }

      if (!isValid) return;

      submitBtn.disabled = true;
      submitSpinner.classList.remove('hidden');
      submitText.textContent = 'Submitting Enquiry...';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitSpinner.classList.add('hidden');
        submitText.textContent = 'Submit Business Enquiry';

        const randomRef = 'DMS-' + Math.floor(100000 + Math.random() * 900000);
        if (refIdDisplay) refIdDisplay.textContent = randomRef;

        if (successBanner) {
          successBanner.classList.remove('hidden');
          successBanner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
        enquiryForm.reset();
      }, 600);
    });
  }

  if (resetBtn && successBanner) {
    resetBtn.addEventListener('click', () => {
      successBanner.classList.add('hidden');
      if (nameInput) nameInput.focus();
    });
  }
});
