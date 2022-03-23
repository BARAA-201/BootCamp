var  myAge = 6;

function ageInTenYearsAgo(){


    return myAge-10;
}
console.log("global ex: ageTenYearsAgo function returned", ageInTenYearsAgo());


function ageInTwentyYears2(){
    var myAge2 = 26;
    return myAge2 + 20;
}
console.log("Local ex: ageInTwentyYears2 function returned", ageInTwentyYears2());


function ageInTenYearsAgo2() {
    return myAge2 - 10;
}
console.log("Local ex: ageInTenYearsAgo2 function returned", ageInTenYearsAgo2());
//
// {/* <div id="idCard">
// <div id="pbrder"></div>
// <p id="postFullName"></p>
// <p id="postAge"></p>
// <p id="postPhoneNumber"></p>
// <p id="postAddress"></p>
// <button type="button"  id="button" onclick= idCard();>Get ID Card!</button> 

// </div */}



