// Code your solution in this file!
function distanceFromHqInBlocks(street) {
    let hq = 42
    let distance
    if (street > hq) {
        distance = street - hq
    } else {
        distance = hq - street
    }
    return distance

}


function distanceFromHqInFeet(street) {
    const noOfFeet = 264;
    const blocks = distanceFromHqInBlocks(street);
    return (noOfFeet * blocks)

}

function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled

    let feetPerBlock = 264
    let distance = start - destination
    if (start > destination) {

        distance = start - destination
    } else {
        distance = destination - start
    }
    return distance * feetPerBlock
}

function calculatesFarePrice(start, destination) {
    //returns the fare for the customer

    const distance = distanceTravelledInFeet(start, destination)
    let fare

    if (distance <= 400) {
        return fare = distance * 0

    } else if (distance > 400 && distance <= 2000) {
        return (distance-400) * 0.02

    } else if (distance > 2000 && distance <= 2500) {
        return fare = 25
    }
    else if (distance > 2500) {
        return 'cannot travel that far'
    }

}
