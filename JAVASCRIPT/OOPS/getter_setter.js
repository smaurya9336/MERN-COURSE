class User{
    constructor(email, password){
        this.email=email;
        this.password=password
    }
    get password(){
        return this._password

    }
    set password(value){
        this._password=this.value
    }
}

const sarita = new User("sarita@gmail.com","abc");
console.log(sarita.password);