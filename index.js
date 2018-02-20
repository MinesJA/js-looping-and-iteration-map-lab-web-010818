// Code your solution in this file.


function lowerCaseDrivers(array){

  let newArray = array.map(function(item){
    return item.toLowerCase()
  })
  return newArray;
}


function nameToAttributes(array){
  // first and last name separated by a space

  let newArray = array.map(function(item){
    let newObj = {};
    newObj.firstName = item.split(" ")[0]
    newObj.lastName = item.split(" ")[1]
    return newObj;
  })

  return newArray;
}

function attributesToPhrase(array){

  let newArray = array.map(function(item){
    return `${item.name} is from ${item.hometown}`
  })

  return newArray;
  // {name: x, hometown: y}
  // "<NAME OF DRIVER> is from <HOMETOWN>"
}
