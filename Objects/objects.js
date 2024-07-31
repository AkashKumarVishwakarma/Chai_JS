// 1.) singleton
// Object.create



//object literals

const JsUser = {
    name: "Akash",
    "full name": "Akash Kumar Vishwakarma",
    age: 21,
    location: "Jaipur",
    email: "akash@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]

}

console.log(JsUser.email)
console.log(JsUser["email"])

// console.log(JsUser."full name")  // this is not valid syntax

console.log(JsUser["full name"])
