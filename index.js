// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(drivers, string){

  const Drivers = drivers.filter(function (driver) {return string.toLowerCase() === driver.toLowerCase()});

  return Drivers;
}
function fuzzyMatch(drivers, string) {
  let num = string.length

  const Drivers = drivers.filter(
    function(driver){
      return string.toLowerCase() === driver.toLowerCase().substring(0,num)
    })

  return Drivers;
}

function matchName(drivers, name){
  const Drivers = drivers.filter(
    function(driver){
      return driver.name.toLowerCase() === name.toLowerCase();

    })
  return Drivers;
}