document.addEventListener('DOMContentLoaded', function () {
    async function fetchUserData() {
        const apiUrl = 'https://jsonplaceholder.typicode.com/users';
        const dataContainer = document.getElementById('api-data');

        try {
            // Fetch user data from API
            const response = await fetch(apiUrl);
            const users = await response.json();

            // Clear loading message
            dataContainer.innerHTML = '';

            // Create and append a list of users
            const userList = document.createElement('ul');
            users.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = user.name;
                userList.appendChild(listItem);
            });

            // Append the user list to the container
            dataContainer.appendChild(userList);
        } catch (error) {
            // Handle errors and show a failure message
            dataContainer.innerHTML = 'Failed to load user data.';
        }
    }

    // Invoke fetchUserData when DOM content is fully loaded
    fetchUserData();
});
