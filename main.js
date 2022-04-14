const calculatorBtn = document.querySelector(".calculator-btn");
const wrapperInfo = document.querySelector(".wrapper-info");


calculatorBtn.addEventListener("click", ageCalculator);

// age calculator function

function ageCalculator(){
    var today = new Date();
    var todayYear = today.getFullYear(); 
    var todayMonth = today.getMonth() + 1;
    var todayDay = today.getDate();

    var dob = new Date(document.getElementById('dob').value);
    var dobYear = dob.getFullYear(); 
    var dobMonth = dob.getMonth() + 1;
    var dobDay = dob.getDate();
    //console.log(dobDay);

    if (today >= dob){

        var diffyear = Math.floor(todayYear - dobYear);

        if (todayDay >= dobDay){
            var diffDay = Math.floor(todayDay - dobDay); // difference between two days
        }
        else{
            //suppose today is 28 but the day of birth is 30 then today will take 28+31 and this value will be borrowed from month. So month will be -1

            var todayDay = Math.floor(todayDay + 31);
            var diffDay = Math.floor(todayDay - dobDay);
            var todayMonth = Math.floor( todayMonth -1);
        }

        // now count difference between two months

        if (todayMonth >= dobMonth){
            var diffMonth = Math.floor(todayMonth - dobMonth);
        }

        else{
            // suppose today is 28-03-2022 and date of birth is 26-08-2002 ; so the month will be added + 12 and the year will be -1 as 1 Year = 12 Month

            var todayMonth = Math.floor(todayMonth + 12);
            var diffMonth = Math.floor(todayMonth -dobMonth);
            var diffyear = Math.floor (diffyear - 1 );
        }

        console.log(diffyear);
        console.log(diffMonth);
        console.log(diffDay);

        wrapperInfo.classList.add("active");
        wrapperInfo.innerHTML = "You are " + diffyear + " Years " + diffMonth + " Months " + diffDay + " Days Old!";
    }

    // if entered date of birth value is greater than today value

    else if(today < dob){
        wrapperInfo.classList.add("active");
        wrapperInfo.innerHTML = "You have not born yet!";
    }

    else{
        alert("please enter valid date!");
    }

}