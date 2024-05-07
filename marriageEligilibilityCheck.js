/*
Create a JavaScript program to determine if a person is eligible for marriage 
based on their gender and age. If the person is male, check if he is 21 years or 
older; if yes, he is eligible. If the person is female, check if she is 18 years or 
older; if yes, she is eligible. Print a message indicating whether the person is 
eligible for marriage or not.
*/

var age = 11
var gender = "Male"

if(gender=="Male")
  {
    if(age>=21)
        {
            console.log("Male: you're elligible for marriage")
        }
    else{
        console.log("You're not elligible for marriage")
    }    
  }
  else if(gender=="Female")
    {
      if(age>=18)
          {
              console.log("Female: you're elligible for marriage")
          }
      else{
          console.log("You're not elligible for marriage")
      }    
    }
  else{
    console.log("you've not met the criteria")
  }
   
    


























    // var age = 18
// var gender = "male"

// if(gender=='male' && age >= 21 && age <= 38){
//     console.log("Male: Eligible for marriage")
// }
// else if(gender=='female' && age >= 18 && age <= 40){
//     console.log("Female: Eligible for marriage")
// }
// else{
//     console.log("You haven't met the criteria")
// }