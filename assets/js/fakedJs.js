//change matchedProfile.html js loader to matchedJs.js when implementing to backend
//this is dummy data for testing if the code works only

document.addEventListener('DOMContentLoaded', function() {
    //Fake profiles data in JSON format for testing only
    const profiles = [
        {
            region: 'Pfarrkirchen',
            email: 'gaa@gmail.com.com',
            offer: 'coding lesson',
            search: 'free food'
        },
        {
            region: 'Berlin',
            email: 'another.gaa@hotmail.com',
            offer: 'house cleaning',
            search: 'faucet repair'
        }
    ];

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
});

function sendEmail(email) {
    window.location.href = `mailto:${email}`;
}
