class YoutubeChannel {
    constructor(){
        this.subsrcibers =[];
    }
    subscribe(user){
        this.subscribers.push(user);
        user.update(`${user.name}, You have subscribed the Channel.`);
    }
    unsubsribe(user){
        this.subscribers = this.subscribers.filter((sub) => sub !== user);
        user.update(`You have un-subsribed the channel.`);
    }
    notify(message){
        this.subscribers.forEach((sub) => sub.update(message));
    }
}
class User{
    constructor(name){
        this.name = name;
    }
    update(data){
        console.log(`${this.name}, ${data}`);
    }
}
let sheryians = new YoutubeChannel();
let user1 = new User("Harsh");

sheryians.subscribe(user1);
sheryians.notify("we are closing the channel, because its april 1st");