/*
* If the order total is $50 or more, the customer is eligible for free delivery.
* If the order total is less than $50, check the customer's loyalty status:
      If the customer is a loyalty member (yes/no), they are eligible for free 
      delivery.
      If the customer is not a loyalty member, check the distance from the 
      restaurant to the delivery address:
            If the distance is less than 5 miles, the customer is eligible for free 
            delivery.
            If the distance is 5 miles or more, delivery is not free
 */
var orderTotal = 40
var loyalityMember = true
var distance = 4
if(orderTotal>=50)
    {
        console.log("Customer is Eligilble for free delivery")
    }
    else{
        if(loyalityMember){
            console.log("they are eligible for free delivery")
        }
        else{
            if(distance<5){
                console.log("Customer is elligible for free delivery")
            }
            else{
                console.log("Delivery is not free")
            }
        }
    }
