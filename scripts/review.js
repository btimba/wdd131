// Retrieve existing count or initialize
let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;

// Increment for the new review submission
reviewCount++;

// Save updated count to localStorage
localStorage.setItem("reviewCount", reviewCount);

// Display count in the page
document.getElementById("reviewCount").textContent = reviewCount;


