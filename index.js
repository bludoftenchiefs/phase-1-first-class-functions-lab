 // Code your solution in this file!

const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = function() {
        return drivers.slice(0,2)
    }
const returnLastTwoDrivers = function() {
        return drivers.slice(2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier() {
        let fareQuintupler = function(fare, x) {
                return fare * 5;
        }
        return fareQuintupler;
}

function fareDoubler(createFareMultiplier) {
        return createFareMultiplier * 2;
}

function fareTripler(createFareMultiplier) {
        return createFareMultiplier * 3;
}

// function selectDifferentDrivers(arrayOfDrivers, driversNames) {
//         driverNames(arrayOfObjects);
function selectDifferentDrivers(arrayOfDrivers, driverFunction){
    return driverFunction(arrayOfDrivers);
}

