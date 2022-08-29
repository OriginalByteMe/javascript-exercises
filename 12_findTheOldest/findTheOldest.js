const findTheOldest = function(people) {
    for(let i = 0; i < people.length; i++) {
        if(!people[i].yearOfDeath){
            people[i].yearOfDeath = new Date().getFullYear();
        }
    }

    
    const oldest = people.reduce((a, b) => a.yearOfDeath - a.yearOfBirth > b.yearOfDeath - b.yearOfBirth ? a : b);
    
    return oldest;
};

findTheOldest
// Do not edit below this line
module.exports = findTheOldest;
