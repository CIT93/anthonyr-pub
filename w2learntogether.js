let itIsMonday = false
let itIsTuesday = true
let itIsWednesday = false
let itIsThursday = false
let itIsFriday = false
let itIsSaturday = false
let itIsSunday = false
let gasTankPercentage = 10

//My daily tasks will depend on what day of the week it is.

if(itIsTuesday === true){
    console.log("Make sure roll trashcans to the curb. ") //Trash day is Wednesday, I like to roll out my trashcans the night before.
}

if (itIsMonday === true || itIsWednesday === true) {
    console.log("Good morning, you must attend CIT48B from 1:00PM to 3:20PM today.")
} if(itIsTuesday === true) {
    console.log("Good morning, you must attend CIT-58F from 6:00PM to 9:50PM today.")
}   else {
    console.log("Good morning, you do not have a scheduled class today, you must work on CIT-93 and BA-28 coursework today.")
}
//I have a combination of in-person and onine classes, planning for them is important.
if (itIsSunday === true) {
    console.log("Make sure to set aside extra time prepare for the upcoming school week.")
}
//I make sure to prepare for the week on Sundays.


if (gasTankPercentage >=50){
    console.log("You have enough gasoline to get you through the week.")
} else if (gasTankPercentage <50 && gasTankPercentage >29 ){
        console.log("Consider filling up your gas tank in the upcoming days.")
    } else {
        console.log("You're running low on gas, make sure to fill up today.")
    }
