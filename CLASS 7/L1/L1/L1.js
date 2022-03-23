var n1 = 45
var n2 =80
console.log(`n1: ${n1} and n2: ${n2}`)
console.log(typeof n2)
console.log(n1 == n2)
console.log(n1 === n2)
console.log(n1 > n2)
console.log(n1 < n2)
console.log(n1 >= n2)
console.log(n1 <= n2)
 if ((n1 > n2 || n1 % 2 == 0) && n2 % 2 == 1){
    console.log(`you have entered valid numbers`)
 }
////////////////////////////////////////////////////////////////////

//////////////////////////////////////////المقارنة بالأرقام
var n1 = 45
var n2 = 90
//لأجل معرفة القيمة
console.log(`n1: ${n1} and n2: ${n2}`)
//لأجل معرفة الفرق 
console.log(n1==n2)
console.log(n1===n2)//To compare  both of value and type
console.log(n1>n2)
console.log(n1<n2)
console.log(n1>=n2)
console.log(n1<=n2)
//لأجل معرفة النوع
console.log(typeof n1)
console.log(typeof n2)
//لأجل 
console.log(n1!=n2)
console.log(n1 > n2 && n1 % 2 == 0)
//////////////////////////////////////////المقارنة بالحروف
var n3 = `Abdullah`
var n4 = `Omar`
//
console.log(`n1: ${n3} and n2: ${n4}`)
//
console.log(n3==n4)
console.log(n3===n4)
console.log(n3>n4)
console.log(n3<n4)
console.log(n3>=n4)
console.log(n3<=n4)
//
console.log(typeof n3)
console.log(typeof n4)
//////////////////////////////////////////
const time = 14
console.log(``)
let greeting
if (time > 12)
{greeting = `Good after noon`}

else  {greeting = `Good morning`}
console.log(`Greeting `+greeting)
//لأجل فحص اكثر من شرط ان تحقق واحد من الشروط تشتغل
if (n1 < n2 || n1 % 2 == 0) 
console.log(`valid number`)