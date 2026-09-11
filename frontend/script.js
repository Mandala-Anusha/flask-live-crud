const API_URL = "http://localhost:4000/users";

async function getUsers() {
    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }

        const users = await response.json();

        displayUsers(users);

    } catch (error) {
        console.error("Error:", error);
    }
}

function displayUsers(users) {
    const usersList = document.getElementById("usersList");

    usersList.innerHTML = "";

    users.forEach(user => {
        const userCard = document.createElement("div");

        userCard.innerHTML = `
            <p>ID: ${user.id}</p>
            <p>Username: ${user.username}</p>
            <p>Email: ${user.email}</p>
            <hr>
        `;

        usersList.appendChild(userCard);
    });
}

getUsers();