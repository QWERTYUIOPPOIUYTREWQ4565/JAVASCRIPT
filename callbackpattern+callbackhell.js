function profilelekarAao(username, cb) {
    setTimeout(() => {
        cb({ 
            _id: 13432, 
            username: username, 
            age: 26, 
            email: "huihui@hui.com" 
        });
    }, 2000);
}

function saarePostLekarAao(id, cb) {
    setTimeout(() => {
        cb({ 
            _id: id, 
            posts: ["hey", "hello", "good morning"] 
        });
    }, 3000);
}

// Function call (Callback Hell Example):
profilelekarAao("harsh", function(data) {
    console.log(data);
    saarePostLekarAao(data._id, function(posts) {
        console.log(posts);
    });
});