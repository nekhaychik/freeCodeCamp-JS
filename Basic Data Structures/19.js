let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};
  
function getArrayOfUsers(obj) {
  let arr = [];
  for (let user in obj) {
    arr.push(user);
  }
  return arr;
}
  
console.log(getArrayOfUsers(users));