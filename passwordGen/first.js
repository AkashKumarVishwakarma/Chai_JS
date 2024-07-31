let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

// let number = "123456789";
// str+=number;

// let spChar = "@#$!%&*(){}[]^";
// str+=spChar;

// console.log(str.length);

lengthA=6;

let pass='';
for(let i=1; i<=lengthA; i++){
    let pass1 = Math.floor(Math.random()*str.length+1);
    pass += str.charAt(pass1)

}
// console.log(pass);

let otp = Math.floor((Math.random() + 1) * 1000);
console.log(`\n ${otp} is the OTP for you account.\n Do not share this with anyone.\n company will never call or\n message asking for OTP.\n`);


// console.log((Math.random() + 1)*1000);
// console.log(Math.floor(Math.random()*10000 + 10));