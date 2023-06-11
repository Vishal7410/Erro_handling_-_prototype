// Password Checker.

class User {
    constructor(username, password){
        this.username = username;
        this.password = password;
       
    }

    get password(){
        return this ._password.replace(/./g, '*');


}
set password(newPassword){
    if (newPassword.length >= 8 && /\d/.test(newPassword)&& /[A-Z]/.test(newPassword)){

        this._password = newPassword;

    }else {
        console.log('Error: Password should be at least 8 characters long and contain at least one number and one uppercase letter.');

    }
}
}
const user  = new User("mithun","Password123")
console.log(user.password);