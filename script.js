let users = [
    {
        name: "amisha rathore",
        pic: "https://images.unsplash.com/photo-1788938594249-407d8be94d89?w=500&auto=format&fit=crop&q=60",
        bio: "silent chaos in a loud world | not for everyone"
    },
    {
        name: "riya sharma",
        pic: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&auto=format&fit=crop&q=60",
        bio: "finding peace in little things | coffee & sunsets"
    },
    {
        name: "aarav mehta",
        pic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60",
        bio: "lost in thoughts | chasing better days"
    },
    {
        name: "sneha kapoor",
        pic: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=500&auto=format&fit=crop&q=60",
        bio: "soft heart, strong mind | creating my own story"
    },
    {
        name: "kabir singh",
        pic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60",
        bio: "less perfection, more authenticity | just vibing"
    },
    {
        name: "meera joshi",
        pic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60",
        bio: "romanticizing ordinary days | always curious"
    },
    {
        name: "aditya malhotra",
        pic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60",
        bio: "quiet ambition | building something meaningful"
    },
    {
        name: "tara verma",
        pic: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=500&auto=format&fit=crop&q=60",
        bio: "sunshine mixed with a little chaos | stay kind"
    }
];

let cards = document.querySelector(".cards");
let searchInput = document.querySelector("#searchInput");

function showUsers(arr) {

    cards.innerHTML = "";

    if(arr.length === 0){
        cards.innerHTML = "<h2>No Users Found</h2>";
        return;
    }
    arr.forEach(function (user) {

     let card = document.createElement("div");
        card.classList.add("card");

        let img = document.createElement("img");
        img.classList.add("bg-img");
        img.src = user.pic;
        img.alt = user.name;

        let blurredLayer = document.createElement("div");
        blurredLayer.classList.add("blurred-layer");
        blurredLayer.style.backgroundImage = `url("${user.pic}")`;

        let content = document.createElement("div");
        content.classList.add("content");

        let h3 = document.createElement("h3");
        h3.textContent = user.name;

        let p = document.createElement("p");
        p.textContent = user.bio;

        content.append(h3, p);
        card.append(img, blurredLayer, content);
        cards.appendChild(card);
    });
}


// Search whenever user types
searchInput.addEventListener("input", function () {

    let searchValue = searchInput.value.toLowerCase().trim();

    let filteredUsers = users.filter(function (user) {
        return user.name.toLowerCase().includes(searchValue);
    });

    showUsers(filteredUsers);
});


// Show all users when page loads
showUsers(users);


/*
==================== OPTIMIZATIONS DONE ====================

1. Removed the second search event listener
   ------------------------------------------------
   Earlier you had two different search systems:

   searchInput.addEventListener(...)
   inp.addEventListener(...)

   Only one is needed.


2. Fixed the "user.filter" error
   ------------------------------------------------
   Earlier:

   user.filter(...)

   Correct:

   users.filter(...)

   "users" is the array, while "user" represents
   one individual object.


3. Removed unnecessary ".inp" input
   ------------------------------------------------
   You already have "#searchInput", so another input
   and another event listener were unnecessary.


4. Made search case-insensitive
   ------------------------------------------------
   Both values are converted to lowercase:

   user.name.toLowerCase()
   searchValue.toLowerCase()

   So "Amisha", "amisha" and "AMISHA" can match.


5. Added trim()
   ------------------------------------------------
   trim() removes extra spaces from the beginning
   and end of the search input.

   Example:

   "  amisha  "

   becomes:

   "amisha"


6. Fixed the image URLs
   ------------------------------------------------
   The original pic values contained Markdown-style
   [text](URL) formatting.

   JavaScript needs the actual URL string.


7. Kept showUsers() reusable
   ------------------------------------------------
   The same function handles:

   showUsers(users);

   and:

   showUsers(filteredUsers);

   This avoids writing the card-generation code twice.


8. Kept the code simple
   ------------------------------------------------
   No unnecessary advanced methods or complicated
   JavaScript were added.

============================================================
*/

