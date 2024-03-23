class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}mayur`
    }

    set password(value){
        this._password = value
    }
}

const mayur = new User("d@mayur.ai", "abc")
console.log(mayur.email);