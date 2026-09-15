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
            <button onclick="editUser(${user.id}, '${user.username}', '${user.email}')">
                Edit
            </button>
            <hr>
        `;

        usersList.appendChild(userCard);
    });
}

getUsers();
document.getElementById("userForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                email: email
            })
        });

        const result = await response.json();

        if (response.ok) {
            alert("User added successfully!");

            document.getElementById("userForm").reset();

            getUsers();
        } else {
            alert(result.message);
        }

    } catch (error) {
        console.error("Error:", error);
        alert("Failed to add user");
    }
});