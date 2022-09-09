const showOnPage = function (text) {
    let newParagraph = document.createElement("p")
    newParagraph.innerHTML = text
    let outputDiv = document.getElementById("output")
    outputDiv.append(newParagraph)
  }

  const tankPercentage = 70
  const dayOfWeek = "Tuesday"
  const trashCanFull = true
  const dogHasFood = true

  showOnPage("<b>This list consists of tasks you should complete today, which are based off the global variables below. Have a great day!<b> ")
showOnPage("Day of the week___>" + `${dayOfWeek}` )
showOnPage("Gas Tank Percentage___>" + `${tankPercentage}`)
showOnPage("Trashcan is full?___>" + `${trashCanFull}`)
showOnPage("Dog has food?___>" + `${dogHasFood}`)
showOnPage("---END GLOBAL VARIABLE DATA---")
showOnPage("<b>Today's Broadcast<b>")



  const tank = { 
    
    moreThan49: "You have enough gasoline to get you through the week",

    moreThan29LessThan50:"You're a bit low on gasoline, consider filling up soon.",

    tankLessThan30:  "You're very low on gasoline, make sure to fill up today"
 }

const day = {
    
    mondayWednesday: "you must attend CIT48B from 1:00PM to 3:20PM today",       

    tuesday:"Today is Tuesday, attend CIT-58F from 6:00PM to 9:50PM today",

    thursdayFridaySaturday: "work on CIT-93 and BA-28 coursework today",
       
    sunday: "make sure to prepare for the upcoming week.",
       
}
const trashcan = {
    full: "Your trashcan is full, make sure to empty it before you leave.",
    notFull: "Your trashcan is not full."
}
const dogFood = {
    dogHasFood: "Cachi has enough food.",

    dogDoesNotHaveFood: "Cachi has ran out of food, make sure to refill his bowl."
}

   
if (tankPercentage > 50){
      const  tankAct = "(tank.moreThan49)"
   }else if (tankPercentage < 51 && tankPercentage > 29){
      const tankAct = (tank.moreThan29LessThan50)
}else {const tankact = (tank.tankLessThan30)
  }
  if(dayOfWeek === "Monday" || dayOfWeek === "Wednesday"){
       const dayact = (day.mondayWednesday)
   } else if(dayOfWeek === "Tuesday") {
      const dayact = (day.tuesday)
   } else if(dayOfWeek === "Thursday" || dayOfWeek === "Friday" || dayOfWeek === "Saturday") {
      const dayact = (day.thursdayFridaySaturday)
   } else {
      const dayact = (day.sunday)
   }
  
   if (trashCanFull === true){
    const trashact = (trashcan.full)
}else if (trashCanFull === false){
      const trashact = (trashcan.notFull)
   }
if(dogHasFood === true){
   const foodact = (dogFood.dogHasFood)
}else if (dogHasFood === false){
   const foodact = (dogFood.dogDoesNotHaveFood)


}

const toDoList = [`${tankAct}, ${dayAct}, ${trashAct}, ${foodAct}`]


showOnPage(`You have ${toDoList.length} items on your todo list.`)
toDoList.forEach(function(todoitem,index){
    const num = index + 1
    showOnPage(`${num}. ${todoitem}`)
})