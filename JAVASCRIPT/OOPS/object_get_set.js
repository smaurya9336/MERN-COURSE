const User={
    _email:"sarita@gmail.com",
    _password:"123abc",


    get email(){
        return this._email.toUpperCase()

    },
    set email(value){
        this._email=value

    },

    get password(){
        return this._password.toUpperCase()

    },
    set password(value){
        this._password=value

    }

}
const sarita=Object.create(User)
console.log(sarita.email);
console.log(sarita.password);