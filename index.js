// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    const hqlocation = 42;
    return Math.abs(someValue - hqlocation);
  }
  
  function distanceFromHqInFeet(someValue) {
    const feetPerBlock = 264
    const distanceInBlocks = distanceFromHqInBlocks(someValue)
    return distanceInBlocks*feetPerBlock
  }
  function distanceTravelledInFeet(start,destination) {
    const blockDistance= (start - destination)
    const feetPerBlock=264
    return Math.abs(blockDistance*feetPerBlock)
  }
  function calculatesFarePrice(start,destination) {
    if (distanceTravelledInFeet(start, destination) < 400) {
      return 0
    }
    else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) <= 2000) {
      return Math.abs((distanceTravelledInFeet(start, destination)-400) * 0.02)
    }
    else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) <= 2500) {
      return 25
    }
    else if (distanceTravelledInFeet(start, destination) > 2500) {
      return 'cannot travel that far'
    }
  }
  
