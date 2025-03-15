const drivers = [
    { name: "Bobby", hometown: "Kileleshwa" },
    { name: "Otieno", hometown: "Lang'ata" },
    { name: "Kamau", hometown: "Westlands" },
    { name: "Mwende", hometown: "Karen" },
    { name: "Hassan", hometown: "Eastleigh" },
    { name: "Sarah", hometown: "Kilimani" }
];

function findMatching(drivers, name) {
    return drivers
        .filter(driver => driver.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch(drivers, letters) {
    return drivers
        .filter(driver => driver.startsWith(letters));
}

function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
}


console.log(findMatching(drivers, "Bobby")); 
console.log(fuzzyMatch(drivers, "Sa"));      
console.log(matchName(drivers, "Kamau")); 