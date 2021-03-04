class Table{
    constructor(na, ph, em, id ){
        this.name = na;
        this.phone = ph;
        this.email = em;
        this.id = id;
    }
    getName(){
        return this.name;

    }
    getPhoneNumber(){
        return this.phone;
    }
    getEmail(){
        return this.email;
    }
    getID(){
        return this.id;
    }
}
module.exports = Table;