class Buildings{
    constructor(name){
        this.building = name,
        this.floor=[]
    }

    addfloor(floor){
        return this.floor.push(floor);
    }

    addConference(conference){
        return this.conference.push(conference);
    }
}


class Floor extends Buildings {
    constructor(floor){
        super(floor)

    }
    
}

//creating building
const b1=new Buildings("b1");

const f1=new Floor(1);
console.log(f1);

//adding floor to the building
// b1.addfloor(1);
// b1.addfloor(2);

// b1.addConference("c1");

// console.log(b1);