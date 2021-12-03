// import _ from 'lodash'
// import myData from './myData.json'
import axios from 'axios'

// PART.3

// import random from './getRandom'

// const a = random()

// if(a === 0) {
//   console.log('a is 0')
// } else if (a === 2) {
//   console.log('a is 2')
// } else if (a === 4) {
//   console.log('a is 4')
// } else {
//   console.log('rest...')
// }

// switch (a) {
//   case 0 :
//     console.log('a is 0')
//     break
//   case 2 : 
//     console.log('a is 2')
//     break
//   case 4 :
//     console.log('a is 4')
//     break
//   default :
//     console.log('rest...')
// }

// const ulEl = document.querySelector('ul')

// console.log(ulEl)

// for (let i=0; i<10; i+=1) {
//   const li = document.createElement('li')
//   li.textContent = `list-${i + 1}`
//   if((i+1)%2 === 0) {
//     li.addEventListener('click', function() {
//       console.log(li.textContent)
//     })
//   }
//   ulEl.appendChild(li)
// }


// const heropy = {
//   firstName: 'Heropy',
//   lastName: 'Park',
//   getFullName: function() {
//     return `${this.firstName} ${this.lastName}`
//   }
// }
// console.log(heropy.getFullName())

// const amy = {
//   firstName: "Amy",
//   lastName: "Clarke",
//   getFullName: function() {
//     return `${this.firstName} ${this.lastName}`
//   }  
// }
// console.log(amy.getFullName())

// const neo = {
//   firstName: "Neo",
//   lastName: "Man",
//   getFullName: function() {
//     return `${this.firstName} ${this.lastName}`
//   }  
// }
// console.log(neo.getFullName())


// function User(first, last) {
//   this.firstName = first,
//   this.lastName = last
// }

// User.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`
// }


// class User {
//   constructor(first, last) {
//     this.firstName = first,
//     this.lastName = last
//   }
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`
//   }
// }

// const heropy = new User('Heropy', 'Park')
// const amy = new User('Amy', 'Clarke')
// const neo = new User('Neo', 'Man')

// console.log(heropy)
// console.log(amy.getFullName())
// console.log(neo.getFullName())


// class Vehicle {
//   constructor(name, wheel) {
//     this.name = name,
//     this.wheel = wheel
//   }
// }

// const myVehicle = new Vehicle('운송수단', 2)
// console.log(myVehicle)

// class Bicycle extends Vehicle {
//   constructor(name, wheel) {
//     super(name, wheel)
//   }
// }

// const myBicycle = new Bicycle('삼천리', 2)
// const daughterBicycle = new Bicycle('세발자전거', 3)
// console.log(myBicycle)
// console.log(daughterBicycle)

// class Car extends Vehicle {
//   constructor(name, wheel, license) {
//     super(name, wheel)
//     this.license = license
//   }
// }

// const myCar = new Car('벤츠', 4, true)
// const sonCar = new Car('포르쉐', 4, false)
// console.log(myCar)
// console.log(sonCar)

// PART.4
// const result = 'Hello world'.indexOf('world')
// console.log(result)

// const str = 'Hello world'
// console.log(str.slice(6,11))
// console.log(str.replace('world','minhwa'))

// 얕은 복사, 깊은 복사
// const user = {
//   name: 'Heropy',
//   age: 85,
//   emails: ['lmh950311@naver.com']
// }
// const copyUser = _.cloneDeep(user)
// console.log(copyUser === user)

// user.age = 22
// console.log('user', user)
// console.log('copyUser', copyUser)

// console.log('------')
// console.log('------')

// user.emails.push('neo@naver.com')
// console.log(user.emails === copyUser.emails)
// console.log('user', user)
// console.log('copyUser', copyUser)

// const user = {
//   name: 'HEROPY',
//   age: 85,
//   emails: [
//     'lmh950311@naver.com',
//     'happyarsean@naver.com'
//   ]
// }
 
// const str = JSON.stringify(user)
// console.log('str', str)
// console.log(typeof str)

// const obj = JSON.parse(str)
// console.log('obj', obj)

// const user = {
//   name: 'heropy',
//   age: 85,
//   emails: [
//     '123@naver.com',
//     '456@naver.com'
//   ]
// }

// const str = localStorage.getItem('user')
// const obj = JSON.parse(str)
// obj.age = 33
// localStorage.setItem('user', JSON.stringify(obj))

function fetchMovies() {
  axios
    .get('https://www.omdbapi.com/?apikey=7035c60c&s=frozen')
    .then(res => {
      console.log(res)
      const h1El = document.querySelector('h1')
      const imgEl = document.querySelector('img')
      h1El.textContent = res.data.Search[0].Title
      imgEl.src = res.data.Search[0].Poster
    })
  }

fetchMovies()