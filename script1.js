// script1.js

// Add interactivity for "Get Started" button
const getStartedButton = document.querySelector('.get-started-btn');
getStartedButton.addEventListener('click', () => {
  alert('Welcome to Constitution Learn! Explore our courses to get started.');
  window.scrollTo({
    top: document.querySelector('.courses').offsetTop,
    behavior: 'smooth',
  });
});

// Add interactivity for "Learn More" button in the About section
const learnMoreButton = document.querySelector('.learn-more');
learnMoreButton.addEventListener('click', () => {
  alert('Learn more about how Constitution Learn can help you understand the Constitution of India.');
});

// Add functionality for search button
const searchButton = document.querySelector('.searchpanel button');
const searchInput = document.querySelector('.searchpanel input');
searchButton.addEventListener('click', () => {
  const query = searchInput.value.trim();
  if (query) {
    alert(`Searching for: ${query}`);
    // Implement actual search logic here
  } else {
    alert('Please enter a search term.');
  }
});

// Add hover effect for social icons
const socialIcons = document.querySelectorAll('.footer-social a');
socialIcons.forEach(icon => {
  icon.addEventListener('mouseover', () => {
    icon.style.color = 'blue';
  });
  icon.addEventListener('mouseout', () => {
    icon.style.color = '';
  });
});

// Add enrollment button click alert
const enrollButtons = document.querySelectorAll('.enroll-btn');
enrollButtons.forEach(button => {
  button.addEventListener('click', () => {
    alert('Thank you for your interest! Enrollment functionality is coming soon.');
  });
});