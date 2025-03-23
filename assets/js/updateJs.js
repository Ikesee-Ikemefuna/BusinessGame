document.addEventListener('DOMContentLoaded', function() {
    const username = 'YOUR_USERNAME'; // Replace with the actual username or fetch it dynamically

    // Load data from the server based on the username
    axios.get(`REST_API_URL/${username}`)
        .then(function(response) {
            const data = response.data;
            document.getElementById('username').value = data.username;
            document.getElementById('password').value = data.password;
            document.getElementById('region').value = data.region;
            document.getElementById('email').value = data.email;
            document.getElementById('offer').value = data.offer;
            document.getElementById('search').value = data.search;
        })
        .catch(function(error) {
            console.error('Error loading data:', error);
            alert('Failed to load data. Please try again.');
        });

    document.getElementById('updateForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = {
            username: document.getElementById('username').value,
            password: document.getElementById('password').value,
            region: document.getElementById('region').value,
            email: document.getElementById('email').value,
            offer: document.getElementById('offer').value,
            search: document.getElementById('search').value
        };

        axios.put('REST_API_URL', formData)
            .then(function(response) {
                console.log('Update successful:', response.data);
                alert('Update successful!');
            })
            .catch(function(error) {
                console.error('Error during update:', error);
                alert('Update failed. Please try again.');
            });
    });
});
