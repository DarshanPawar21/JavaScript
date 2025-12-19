//1. Create a function that takes an array of student objects and returns only the names.

function getStudentNames(students) {
    let result = [];
    for (let i = 0; i < students.length; i++) {
        result.push(students[i].name);
    }
    return result;
}

const students = [
    { name: "Rohan", age: 15 },
    { name: "Rinku", age: 21 },
    { name: "Raj", age: 51 }
];

console.log(getStudentNames(students));

//2.Create a function that takes an array of product objects and returns total price.

function getTotalPrice(products) {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += products[i].price;
    }
    return total;
}

const products = [
    { items: "Phone", price: 20000 },
    { items: "Headphones", price: 5000 },
    { items: "Charger", price: 7500 }
];

console.log(getTotalPrice(products));

//3.Create a function that finds the student object with the highest marks from an array.

function highestMark(students) {
    let topper = students[0];

    for (let i = 1; i < students.length; i++) {
        if (students[i].marks > topper.marks) {
            topper = students[i];
        }
    }
    return topper;
}
const student = [
    { name: "om", marks: 100 },
    { name: "namo", marks: 99 },
    { name: "Bhagwate", marks: 98 }
];
console.log(highestMark(student));

//4.Create a function that filters employee objects whose salary is above 30000.

function highestSalary(employees) {
    let result = [];
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].salary > 30000) {
            result.push(employees[i].name);
        }
    }
    return result;
}

const employees = [
    { name: "Rahil", salary: 55550 },
    { name: "Rao", salary: 55000 },
    { name: "Raj", salary: 42000 },
    { name: "Rohan", salary: 25000 }
];

console.log(highestSalary(employees));

//5. Create a function that counts how many users have status "active" from an object array.

function countActiveUsers(users) {
    let count = 0;
    for (let i = 0; i < users.length; i++) {
        if (users[i].status === "active") {
            count++;
        }
    }
    return count;
}

const users = [
    { name: "Raj", status: "active" },
    { name: "Roe", status: "inactive" },
    { name: "Amey", status: "active" },
    { name: "RJ", status: "pending" },
    { name: "Lazy", status: "active" }
];

console.log(countActiveUsers(users));

//6.Create a function that returns an array of book titles from an array of book objects.

function getBookTitles(books) {
    let titles = [];
    for (let i = 0; i < books.length; i++) {
        titles.push(books[i].title);
    }
    return titles;
}

const books = [
    { title: "The Aura", author: "Mr. Rj" },
    { title: "Loyal", author: "Sebi Roteer" },
    { title: "World is...Nothing But a Illusion", author: "Roushan Goswami" }
];

console.log(getBookTitles(books));

// 7. Create a function that groups people by age from an array of person objects.

function groupByAge(people) {
    const groups = {};

    for (const person of people) {
        const age = person.age;

        if (groups[age]) {
            groups[age].push(person);
        } else {
            groups[age] = [person];
        }
    }

    return groups;
}

let people = [
    { age: "25", name: "Roni" },
    { age: "23", name: "Raj" },
    { age: "25", name: "neha" },
    { age: "23", name: "Raxit" }
]

console.log(groupByAge(people));

//8. Create a function that sorts employee objects by salary in descending order.

function sortBySalaryDesc(employees) {
    let n = employees.length;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (employees[i].salary < employees[j].salary) {
                // swap
                let temp = employees[i];
                employees[i] = employees[j];
                employees[j] = temp;
            }
        }
    }
    return employees;
}
let employes = [
    { name: "Rahul", salary: 30000 },
    { name: "Neha", salary: 50000 },
    { name: "Amit", salary: 40000 }
];

console.log(sortBySalaryDesc(employes));

//9.Create a function that converts an array of key-value objects into a single object.

function arrayToObject(arr) {
    let result = {};

    for (let i = 0; i < arr.length; i++) {
        result[arr[i].key] = arr[i].value;
    }

    return result;
}
const arr = [
    { key: "name", value: "Vishal" },
    { key: "age", value: 22 },
    { key: "city", value: "Surat" }
];
console.log(arrayToObject(arr));

//10.Create a function that calculates total quantity of all items in a shopping cart array.

function totalQuantity(cart) {
    let total = 0;

    for (let i = 0; i < cart.length; i++) {
        total = total + cart[i].quantity;
    }
    return total;
}
const cart = [
    { item: "Kiwi", quantity: 5 },
    { item: "Laddu", quantity: 5 },
    { item: "Dove", quantity: 10 }
];
console.log(totalQuantity(cart));