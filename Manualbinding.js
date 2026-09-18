let form = document.querySelector("form");

const userManager = {
    users: [],
    init : function(){
        form.addEventListener("submit", this.submitForm.bind(this));
    },
    submitForm: function (e){
        e.preventDefault();
        this.users.push({
            username : username.value ,
            role : role.value,
            bio : bio.value,
        });
    },
    addUser : function() {},
    removeUser: function() {},
};

userManager.init();