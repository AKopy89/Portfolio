const portfolioLink = document.querySelector('a[href="#portfolio"]');
const statusMessage = document.querySelector('#status-message');

portfolioLink.addEventListener('click', function () {
  statusMessage.textContent = 'You opened the Portfolio section.';
});