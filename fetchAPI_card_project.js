const card = document.querySelector("article");

fetch("https://randomuser.me/api/?results=1")
    .then((response) => {
        if (!response.ok) {
            throw new Error(`Request failed: ${response.status}`);
        }
        return response.json();
    })
    .then(({ results }) => {
        const user = results[0];
        if (!user || !card) {
            throw new Error("User card could not be rendered");
        }

        const image = card.querySelector("img");
        const name = card.querySelector("h1");
        const role = card.querySelector("p");
        const description = card.querySelector("p:nth-of-type(2)");

        image.src = user.picture.large;
        image.alt = `${user.name.first} ${user.name.last}`;
        name.textContent = `${user.name.first} ${user.name.last}`;
        role.textContent = user.email;
        description.textContent = `${user.location.city}, ${user.location.country}`;
    })
    .catch((error) => {
        console.error("Unable to load user card:", error);
    });