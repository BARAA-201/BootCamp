var color1 = 'red';
var color2 = 'green';
var color3 = 'black';

var colors = [`red`, `green`, `black`];
var colors = [`red`, `green`, `black`, `white`];
var c
for (var i = 0; i < colors.length; i++){
    console.log(colors[i])
    if (colors[i] === `blue`){
        console.log(`wow we have a match`)
    }    
}
/*var j = 0
while (j < 10){
    console.log()
    j++
}

var years = [1992, 1999, 2003]
var years2 = [1998, 2000, 2003, 2004, 2005, 2010]

/*var j = 0
while (j < years.length){
    console.log(2022 - years[j])
    j++
}
var years2 = [1998, 2000, 2003, 2004, 2005, 2010]

/*var k = 0
while (k < years.length){
    console.log(2022 - years[k])
    k++
}
//function
var years2 = [1998, 2000, 2003, 2004, 2005, 2010]

function calculateAge(yearsArray) {
    var n = 0 
    while (n < years2.length){
        console.log(2022 - yearsArray[n])
        n++
    }
}
calculateAge(years)
calculateAge(years2)
*/





/*
function sayHi(name) {
    console.log(`Hi ` + name)
}
sayHi('Feras')



var movie = [ 
 {
    title: 'Star Wars',
    publishYear: 2015,
    actors: [
        'Feras', 'Ammar'
    ]
 }


    {
        title: 'Spider Man',
        publishYear: 2022,
        actors: [
            'Tom', 'Adoo'
        ]
    }
]


//for (var X = 0; x < movie.length; x++ ) {
//    console.log(movies[x].title)
//    } <button type="button" value="Get ID Card!" onclick="idCard()"></button>

*/

function changePcolor() {
    var colorField = document.getElementById('color-field')

    console.log(colorField.value)
    var myColor = document.getElementById("myColor")
    myColor.style.color = colorField.value
}
/*
<div id="idCard">
        <div id="pbrder"></div>
        <p id="postFullName"></p>
        <p id="postAge"></p>
        <p id="postPhoneNumber"></p>
        <p id="postAddress"></p>
    </div>
*/
<tr>
<div id="idCard">
    <label for="idCard"></label>
    <input type="button" value="Get ID Card!" onclick="idCard()"><br>
</div>
</tr>