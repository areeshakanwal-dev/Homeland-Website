/**
 * Homeland Hero Slider - Property details displayed on image
 */

(function () {
    'use strict';

    // Property data
    const properties = [{
        tag: 'FOR SALE',
        tagClass: 'for-sale',
        address: '625 S. BERENDO ST',
        description: 'Beautiful home with modern amenities',
        price: '$1000.500',
        originalPrice: null,
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&h=900&fit=crop'
    }, {
        tag: 'FORECLOSURE',
        tagClass: 'foreclosure',
        address: '1420 OAK HILL DR',
        description: 'Great investment opportunity',
        price: '$349.900',
        originalPrice: '$420.000',
        image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1600&h=900&fit=crop'
    }, {
        tag: 'FOR SALE',
        tagClass: 'for-sale',
        address: '871 CRENSHAW BLVD',
        description: 'Luxury home with pool and garden',
        price: '$2,250.500',
        originalPrice: null,
        image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1600&h=900&fit=crop'
    }, {
        tag: 'FOR RENT',
        tagClass: 'for-rent',
        address: '9021 SUNSET BLVD',
        description: 'Modern apartment in prime location',
        price: '$1,850.00',
        originalPrice: null,
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&h=900&fit=crop'
    }, {
        tag: 'FOR SALE',
        tagClass: 'for-sale',
        address: '12 BEL AIR RD',
        description: 'Mansion with panoramic views',
        price: '$2,450.000',
        originalPrice: null,
        image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1600&h=900&fit=crop'
    }];

    let currentIndex = 0;
    const totalProperties = properties.length;

    // DOM Elements
    const heroSection = document.getElementById('heroSection');
    const propertyTag = document.getElementById('propertyTag');
    const propertyAddress = document.getElementById('propertyAddress');
    const propertyDescription = document.getElementById('propertyDescription');
    const propertyPrice = document.getElementById('propertyPrice');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const propertyDetails = document.querySelector('.property-details');

    /**
     * Update the property details
     */
    function updateProperty(index) {
        const property = properties[index];

        // Update background image
        heroSection.style.backgroundImage = `url('${property.image}')`;

        // Update tag
        propertyTag.textContent = property.tag;
        propertyTag.className = `property-tag ${property.tagClass}`;

        // Update address
        propertyAddress.textContent = property.address;

        // Update description
        propertyDescription.textContent = property.description;

        // Update price
        if (property.originalPrice) {
            propertyPrice.innerHTML = `${property.price} <span class="original-price">${property.originalPrice}</span>`;
        } else {
            propertyPrice.innerHTML = property.price;
        }

        // Add animation
        propertyDetails.style.animation = 'none';
        setTimeout(() => {
            propertyDetails.style.animation = 'fadeInUp 0.6s ease-out';
        }, 10);
    }

    /**
     * Go to next property
     */
    function nextProperty() {
        currentIndex = (currentIndex + 1) % totalProperties;
        updateProperty(currentIndex);
    }

    /**
     * Go to previous property
     */
    function prevProperty() {
        currentIndex = (currentIndex - 1 + totalProperties) % totalProperties;
        updateProperty(currentIndex);
    }

    // Event Listeners
    nextBtn.addEventListener('click', nextProperty);
    prevBtn.addEventListener('click', prevProperty);

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            e.preventDefault();
            nextProperty();
        }
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            prevProperty();
        }
    });

    // Touch/swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    heroSection.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    heroSection.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                nextProperty();
            } else {
                prevProperty();
            }
        }
    }

    // Initialize with first property
    updateProperty(0);

    console.log('🏠 Homeland Hero Slider initialized!');

})();


/**
 * FAQ Accordion - Only one open at a time
 */

function toggleFAQ(element) {
    // Get the clicked faq-item
    var clickedItem = element.closest('.faq-item');

    // Check if clicked item is already active
    var isActive = clickedItem.classList.contains('active');

    // Get all faq items
    var allItems = document.querySelectorAll('.faq-item');

    // Close all items
    allItems.forEach(function (item) {
        item.classList.remove('active');
    });

    // If clicked item was not active, open it
    if (!isActive) {
        clickedItem.classList.add('active');
    }
}