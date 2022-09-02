const showOnPage = function (text) {
    let newParagraph = document.createElement("p")
    newParagraph.innerHTML = text
    let outputDiv = document.getElementById("output")
    outputDiv.append(newParagraph)
  }

const tank = {
    
    MoreThan49: "You have enough gasoline to get you through the week",

    MoreThan29LessThan50:"You're a bit low on gasoline, consider filling up soon.",

    tankLessThan30:  "You're very low on gasoline, make sure to fill up today"
 }

const day = {
    
    Monday : "Today is Monday, you must attend CIT48B from 1:00PM to 3:20PM today",       

    Tuesday :"Today is Tuesday, attend CIT-58F from 6:00PM to 9:50PM today",

    Wednesday : "attend CIT48B from 1:00PM to 3:20PM today",

    Thursday : "work on CIT-93 and BA-28 coursework today",
    
    Friday : "work on CIT-93 and BA-28 coursework today",

    Saturday : "work on CIT-93 and BA-28 coursework today",
   
    Sunday : "make sure to prepare for the upcoming week.",
     
    

   
}
const trashcan = {
    full: "Your trashcan is full, make sure to empty it before you leave.",
    notFull: "Your trashcan is not full."
}
const dogFood = {
    dogHasFood: "Cachi has enough food.",

    dogDoesNotHaveFood: "Cachi has ran out of food, make sure to refill his bowl."
}
showOnPage("<b>This list consists of tasks you should complete today, which are based off the global variables below. Have a great day!.<b> ")
showOnPage("Day of the week___>" + "Monday" )
showOnPage("Gas Tank Level___>" + "More Than 49%")
showOnPage("Trashcan is full?___>" + "True")
showOnPage("Dog has food?___>" + "True")
showOnPage("---END GLOBAL VARIABLE DATA---")
showOnPage("<b>Today's Tasks<b>")
showOnPage((day.Monday))
showOnPage(tank.MoreThan49)
showOnPage(trashcan.full)
showOnPage(dogFood.dogHasFood)

