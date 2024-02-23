// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Mayur",
    "full name": "Mayur Dev",
    [mySym]: "mykey1",
    age: 18,
    location: "Pune",
    email: "mayur@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "mayur@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "mayur@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function () {
    console.log("Hello JS user");
}
JsUser.greetingTwo = function () {
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());