const showOnPage = function (text) {
    let newParagraph = document.createElement("p")
    newParagraph.innerHTML = text
    let outputDiv = document.getElementById("output")
    outputDiv.append(newParagraph)
  }
let itIsMonday = false
let itIsTuesday = true
let itIsWednesday = false
let itIsThursday = false
let itIsFriday = false
let itIsSaturday = false
let itIsSunday = false
let gasTankPercentage = 10

//My daily tasks will depend on what day of the week it is.

showOnPage("<b>The list below consists of tasks you should complete today, have a great day!.<b> ")
//I feel like this is too much code, but I cannot think of a better way to write it with what I currently know...
if(itIsMonday === true){
    showOnPage("Happy Monday!")
}
if(itIsTuesday === true) {
    showOnPage("Happy Tuesday!")
}
if(itIsWednesday === true){
    showOnPage("Happy Wednesday!")
}
if(itIsThursday === true) {
    showOnPage("Happy Thursday!")}
if(itIsFriday === true) {
    showOnPage("Happy Friday!")
}
if (itIsSaturday === true){
    showOnPage("Happy Saturday!")
}
if (itIsSunday === true) {
    showOnPage("Happy Sunday!")
}
if (itIsMonday === true || itIsWednesday === true) {
    showOnPage("Good morning, you must attend CIT48B from 1:00PM to 3:20PM today.")
} if(itIsTuesday === true) {
    showOnPage("Good morning, you must attend CIT-58F from 6:00PM to 9:50PM today.")
}   else {
    showOnPage("Good morning, you do not have a scheduled class today, you must work on CIT-93 and BA-28 coursework today.")
}
//I have a combination of in-person and onine classes, planning for them is important.
if (itIsSunday === true) {
    showOnPage("Make sure to set aside extra time prepare for the upcoming school week.")
}
//I make sure to prepare for the week on Sundays.

if(itIsTuesday === true){
    showOnPage("Make sure roll trashcans to the curb. ") //Trash day is Wednesday, I like to roll out my trashcans the night before.
}
if (gasTankPercentage >=50){
    showOnPage("You have enough gasoline to get you through the week.")
} else if (gasTankPercentage <50 && gasTankPercentage >29 ){
        showOnPage("Consider filling up your gas tank in the upcoming days.")
    } else {
        showOnPage("You're running low on gas, make sure to fill up today.")}
    
