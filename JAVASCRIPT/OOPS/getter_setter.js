// getter and setter

class User{
    constructor(email, password){
        this.email=email;
        this.password=password
    }
    get email(){
        return `${this._email}`
    }

    set email(value){
        this._email=value
    }

    get password(){
        return `${this._password}sarita`

    }

    set password(value){
        this._password=value
    }
}

const sarita = new User("sarita@gmail.com","abc");
console.log(sarita.email);
console.log(sarita.password);