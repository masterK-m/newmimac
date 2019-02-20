var relationship1 = {
    name : 'zero',
    friends : ['nero','hero','xero'],
    logFriends : function(){
        var that = this;
        this.friends.forEach(function(friends){
            console.log(that.name, friends);
        });
    },
};
relationship1.logFriends();

const relationship2 = {
    name : 'zero',
    friends : ['nero','hero','xero'],
    logFriends(){
        this.friends.forEach(friends => {
            console.log(this.name, friends);
        });
    },
};
relationship2.logFriends();

