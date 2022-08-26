const showOnPage = function (text) {
    let newParagraph = document.createElement("p")
    newParagraph.innerHTML = text
    let outputDiv = document.getElementById("output")
    outputDiv.append(newParagraph)
  }

//My daily tasks will depend on what day of the week it is.

let day = "Tuesday"
let gasTankPercentage = 50
let postOfficeTrip = true

showOnPage("<b>This list consists of tasks you should complete today, which are based off the global variables below. Have a great day!.<b> ")
showOnPage("Day of the week___>" + day)
showOnPage("Gas Tank Level___>" + gasTankPercentage + " %")
showOnPage("Do I need to go to the post office?___>" + postOfficeTrip)
showOnPage("---END GLOBAL VARIABLE DATA---")
showOnPage("<b>Today's Tasks<b>")

//I feel like this is too much code, but I cannot think of a better way to write it with what I currently know...
if(day === "Monday"){
    showOnPage("Happy Monday!")
    showOnPage("Good morning, you must attend CIT48B from 1:00PM to 3:20PM today.")
} else if(day === "Tuesday") {
    showOnPage("Happy Tuesday!")
    showOnPage("Good morning, you must attend CIT-58F from 6:00PM to 9:50PM today.")
    showOnPage("Make sure roll trashcans to the curb. ")
} else if(day === "Wednesday"){
    showOnPage("Happy Wednesday!")
    showOnPage("Good morning, you must attend CIT48B from 1:00PM to 3:20PM today.")
} else if(day === "Thursday") {
    showOnPage("Happy Thursday!")
    showOnPage("Good morning, you do not have a scheduled class today, you must work on CIT-93 and BA-28 coursework today.")
} else if(day === "Friday") {
    showOnPage("Happy Friday!")
    showOnPage("Good morning, you do not have a scheduled class today, you must work on CIT-93 and BA-28 coursework today.")
} else if (day === "Saturday"){
    showOnPage("Happy Saturday!")
    showOnPage("Good morning, you do not have a scheduled class today, you must work on CIT-93 and BA-28 coursework today.")

} else {
    showOnPage("Happy Sunday!")
    showOnPage("Make sure to set aside extra time prepare for the upcoming school week.")

}
//I have a combination of in-person and onine classes, planning for them is important.
//I make sure to prepare for the week on Sundays.
if (postOfficeTrip === true){
    showOnPage("Make sure to drop off packages at the post office.")
}else{
    showOnPage("You don't have any packages to drop off today.")
}

if (gasTankPercentage >=50){
    showOnPage("You have enough gasoline to get you through the week.")
} else if (gasTankPercentage <50 && gasTankPercentage >29 ){
        showOnPage("Consider filling up your gas tank in the upcoming days.")
    } else {
        showOnPage("You're running low on gas, make sure to fill up today.")}
    
