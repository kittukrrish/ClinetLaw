// Dummy Data for Lawyers
const lawyers = [
    { name: "John Doe", expertise: "Criminal Law", location: "New York", rating: 4.5 },
    { name: "Jane Smith", expertise: "Family Law", location: "California", rating: 4.0 },
    { name: "Mark Johnson", expertise: "Corporate Law", location: "Texas", rating: 4.8 }
];

// Search Functionality
document.querySelector('.btn-search').addEventListener('click', function() {
    const query = document.querySelector('#search-bar').value.toLowerCase();
    const results = lawyers.filter(lawyer => 
        lawyer.expertise.toLowerCase().includes(query) ||
        lawyer.location.toLowerCase().includes(query)
    );

    displayResults(results);
});

// Display Search Results
function displayResults(results) {
    const resultContainer = document.querySelector('#results');
    resultContainer.innerHTML = ''; // Clear previous results

    if (results.length === 0) {
        resultContainer.innerHTML = '<h4>No lawyers found.</h4>';
    } else {
        results.forEach(lawyer => {
            const lawyerCard = document.createElement('div');
            lawyerCard.classList.add('lawyer-card');
            lawyerCard.innerHTML = `
                <h3>${lawyer.name}</h3>
                <p>Expertise: ${lawyer.expertise}</p>
                <p>Location: ${lawyer.location}</p>
                <p>Rating: ${lawyer.rating} stars</p>
            `;
            resultContainer.appendChild(lawyerCard);
        });
    }
}

// Dummy Data for Online Lawyers (25+ lawyers example)
const onlineLawyers = [
    { name: "Anna Lee", expertise: "Family Law", location: "California", rating: 4.7, img: "https://randomuser.me/api/portraits/women/1.jpg" },
    { name: "David Adams", expertise: "Criminal Law", location: "New York", rating: 4.9, img: "https://randomuser.me/api/portraits/men/2.jpg" },
    { name: "Sophia Wu", expertise: "Corporate Law", location: "Texas", rating: 4.6, img: "https://randomuser.me/api/portraits/women/3.jpg" },
    // Add more lawyers here (25+ total)
];

// Store the initial number of lawyers to display
let displayedLawyersCount = 6; // Initially showing 6 lawyers

// Function to Display Online Lawyers
function displayOnlineLawyers() {
    const onlineLawyerList = document.getElementById('online-lawyer-list');
    onlineLawyerList.innerHTML = ''; // Clear previous content

    const displayedLawyers = onlineLawyers.slice(0, displayedLawyersCount); // Display a subset of lawyers

    displayedLawyers.forEach(lawyer => {
        const lawyerCard = document.createElement('div');
        lawyerCard.classList.add('online-lawyer-card');
        lawyerCard.innerHTML = `
            <img src="${lawyer.img}" alt="${lawyer.name}">
            <h4>${lawyer.name}</h4>
            <p>${lawyer.expertise}</p>
            <p>${lawyer.location}</p>
            <p>Rating: ${lawyer.rating} stars</p>
            <div class="online-status"></div> <!-- Green blinking online status -->
        `;
        onlineLawyerList.appendChild(lawyerCard);
    });
}

// Add Event Listener to "Find More" Button
document.getElementById('find-more-btn').addEventListener('click', function() {
    displayedLawyersCount += 6; // Load 6 more lawyers when button is clicked
    displayOnlineLawyers(); // Re-render the list with more lawyers
    if (displayedLawyersCount >= onlineLawyers.length) {
        // Disable the button if no more lawyers are left to display
        document.getElementById('find-more-btn').disabled = true;
        document.getElementById('find-more-btn').innerText = 'No More Lawyers Available';
    }
});

// Call the function to display online lawyers when the page loads
window.onload = displayOnlineLawyers;
