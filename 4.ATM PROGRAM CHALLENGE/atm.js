// Creating the user details
const userAccount = {
    name : "Allan Adambo",
    password: "Adambo12",
    balance : 20000,
    checkBalance : function(){
        const userpass = prompt("Input password to check balance");
        if(userpass === this.password){
            alert("Dear " + this.name + " your account balance is " + this.balance);
        }else{
            alert("Input the correct password");
        }
    },
    topUp: function(){
        const amount = Number(prompt("Enter the amount you wish to top up"));
        this.balance= Number(this.balance + amount) ;
        return "Amount succesfully topped up";
    }
};