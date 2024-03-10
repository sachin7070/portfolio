// Get all the navigation bar items
const navbarItems = document.querySelectorAll('.navbar-item');

// Get all the pages
const pages = document.querySelectorAll('.page');

// Add a click event listener to each navigation bar item
navbarItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    // Remove the active class from all navigation bar items
    navbarItems.forEach(item => item.classList.remove('active'));
    // Add the active class to the clicked navigation bar item
    item.classList.add('active');
    // Remove the active class from all pages
    pages.forEach(page => page.classList.remove('active'));
    // Add the active class to the corresponding page based on the index of the clicked navigation bar item
    pages[index].classList.add('active');
  });
});

// Get the filter buttons in the portfolio section
const filterButtons = document.querySelectorAll('.filter-button');

// Add a click event listener to each filter button
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove the active class from all filter buttons
    filterButtons.forEach(button => button.classList.remove('active'));
    // Add the active class to the clicked filter button
    button.classList.add('active');
    // Get the selected filter value
    const filterValue = button.dataset.filter;
    // Hide all portfolio items
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => item.style.display = 'none');
    // Show only the portfolio items that match the selected filter value
    if (filterValue === 'all') {
      portfolioItems.forEach(item => item.style.display = 'block');
    } else {
      portfolioItems.forEach(item => {
        if (item.dataset.category === filterValue) {
          item.style.display = 'block';
        }
      });
    }
  });
});

// Get the contact form
const contactForm = document.querySelector('.contact-form');

// Add a submit event listener to the contact form
contactForm.addEventListener('submit', (event) => {
  // Prevent the form from submitting normally
  event.preventDefault();
  // Get the form data
  const formData = new FormData(contactForm);
  // Send the form data to the server using AJAX
  const xhr = new XMLHttpRequest();
  xhr.open('POST', '/contact');
  xhr.send(formData);
  // Show a success message
  alert('Message sent successfully!');
  // Reset the form
  contactForm.reset();
});