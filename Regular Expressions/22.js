let username = "AB1";
let userCheck = /^[a-z]{2,}\d*$|^[a-z]{1,}\d{2,}$/gi; // Change this line
let result = userCheck.test(username);
