
const showOnPage = function (text) {
    let newParagraph = document.createElement("p")
    newParagraph.innerHTML = text
    let outputDiv = document.getElementById("output")
    outputDiv.append(newParagraph)
  }
  

let scheduledPlan = function (dayOfWeek, tankPercentage){
    let gasTankPercentage = tankPercentage
    let day = dayOfWeek
    if (tankPercentage>50){
        gasTankPercentage= "nearly full"
        fillOrNot= "you have enough gasoline to get you through the week"
    }else if (tankPercentage<50 && tankPercentage>29){
        gasTankPercentage = "relatively full"
        fillOrNot= "consider filling up soon."
    }else {
        gasTankPercentage = "nearly empty"
        fillOrNot= "make sure to fill up today"
    }
    
if(day===1){
        day = "Monday"
        coursework = "attend CIT48B from 1:00PM to 3:20PM today"        
    } else if(day===2) {
        day = "Tuesday"
        coursework = "attend CIT-58F from 6:00PM to 9:50PM today"
    } else if(day===3){
        day = "Wednesday"
        coursework = "attend CIT48B from 1:00PM to 3:20PM today"
    } else if(day===4) {
        day = "Thursday"
        coursework = "work on CIT-93 and BA-28 coursework today"
    } else if(day===5) {
        day = "Friday"
        coursework = "work on CIT-93 and BA-28 coursework today"
    } else if (day===6){
        day = "Saturday"
        coursework = "work on CIT-93 and BA-28 coursework today"
    } else {
        day = "Sunday"
        coursework = "set aside extra time to prepare for the upcoming school week"
    }
    showOnPage("<b>This list consists of tasks you should complete today, which are based off the global variables below. Have a great day!.<b> ")
    showOnPage("Day of the week___>" + `${day}` )
    showOnPage("Gas Tank Level___>" + `${gasTankPercentage}`)
    showOnPage("---END GLOBAL VARIABLE DATA---")
    showOnPage("<b>Today's Tasks<b>")
    return `Today is ${day}, you must ${coursework}. Your gas tank is ${gasTankPercentage}, ${fillOrNot}.`

}
let result = scheduledPlan(7,20)

showOnPage(result)




   
    
