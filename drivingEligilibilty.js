/*Create a program to determine if a person is eligible to obtain a driver's license. 
If the person is 16 or older, check if they have passed the written test. If they 
have passed the written test, they are eligible for a driver's license; otherwise, 
they are not eligible.
*/

var age = 19
var marks = 25
if(age>=16)
    {
        if(marks>=33){
        console.log("they have passed the written test")
        console.log("You're eligible for a driving license")
        }
        else{
            console.log("they are not eligible for a driving license.")
        }
    }
    
        else{
            console.log("you have not met the criteria")
        }