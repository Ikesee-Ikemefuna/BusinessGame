document.addEventListener('DOMContentLoaded', function() {
    fetch("https://backend-2hw1.onrender.com/api/v1/auth/").get('REST_API_URL')
        .then(function(response) {
            const profiles = response.data;
            const profileList = document.getElementById('profileList');

            profiles.forEach(function(profile) {
                const profileContainer = document.createElement('div');
                profileContainer.className = 'profile-container';

                profileContainer.innerHTML = `

                    <label for="region">Region:</label>
                    <input type="text" id="region" name="region" value="${profile.region}" readonly>

                    <label for="email">Email:</label>
                    <input type="text" id="email" name="email" value="${profile.email}" readonly>

                    <label for="offer">Offer:</label>
                    <input type="text" id="offer" name="offer" value="${profile.offer}" readonly>

                    <label for="search">Search:</label>
                    <input type="text" id="search" name="search" value="${profile.search}" readonly>

                    <button onclick="sendEmail('${profile.email}')">Send Email</button>
                `;

                profileList.appendChild(profileContainer);
            });
        })
        .catch(function(error) {
            console.error('Error loading profiles:', error);
            alert('Failed to load profiles. Please try again.');
        });
});

function sendEmail(email) {
    window.location.href = `mailto:${email}`;
}
