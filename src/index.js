//@ts-check

/**
 * @file index.js is the root file for this example app
 * @author T.D.Nuwan Chathuranga
 * @see <a href="https://www.linkedin.com/in/nchathu/">Follow Me</a>
 */

const {add,subtract,division,multiply} = require('./calculator')

/**
 * Variable
 * Student Name
 * @type {string}
 */
const studentName = 'Nuwan Chathuranga T.D';

/**
 * Array of Grades
 * @type {Array<number>}
 */
const grades = [98,97.7,100]

/**
 * Student Object
 * @type {{id:number, name:string}}
 */
const studentObj = {
    id:100,
    name:"Nuwan C"
};

/**
 * Calculate tax
 * @param {number} amount - Totoal amount 
 * @param {number} tax - TAx percentage
 * @returns {string} - Total with a dollar sign
 */
const calculateTax = (amount,tax) => {
    return `$${amount + tax * amount}`
};

/**
 * @typedef {Object} Student
 * @property {number} id - Student ID
 * @property {string} name - Student Name
 * @property {number} [age] - Student Age (optional)
 * @property {boolean} isActive - Student is active
 */

 /**
  * @type {Student}
  */
const student = {
    id:1,
    name:'Nuwan',
    age:30,
    isActive:true

};

/** */
class Person{
    /**
     * 
     * @param {Object} personInfo Information about the Person 
     */
    constructor(personInfo){
        /**
         * @property {string} name Persons name
         */
        this.name = personInfo.name;
        /**
         * @property {number} age Persons age
         */
        this.age = personInfo.age;
    }

    
    /**
     * @property {Function} greet A greeting with name and age
     * @returns {void}
     */
    getPersonInfo(){
        console.log(`Hi!!!, I am ${this.name} and I am ${this.age} years old`);
    }
}


/**
 * Person one
 * See {@link Person}
 */
const person1 = new Person({
    name:"Nuwan",
    age:30
});

console.log(`ADD: ${add(30,20)}`)