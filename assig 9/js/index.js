// Select button and containers
const showHeartButton = document.getElementById('showHeartButton');
const heartContainer = document.getElementById('heartContainer');
const messageContainer = document.getElementById('messageContainer');

// Add event listener to display heart container and hide initial message
showHeartButton.addEventListener('click', () => {
  heartContainer.style.display = 'block'; // Show heart container
  messageContainer.style.display = 'none'; // Hide message container
});
