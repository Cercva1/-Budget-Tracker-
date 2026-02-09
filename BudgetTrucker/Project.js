


let expenses = [];

function addExpense(expenseName, amountOfExpenses){
    let expense = {
        product: expenseName,
        price: amountOfExpenses
    }

    expenses.push(expense);
};

function listExpenses(arr){
    for(let i = 0; i<arr.length; i++){
        console.log(`${i + 1}. ${arr[i].product} - ${arr[i].price}`);
    }
};

function totalSpending(arr){
    let sumOfExpenses = 0;
    for(let i = 0; i<arr.length; i++){
        sumOfExpenses += arr[i].price;
    }
    return sumOfExpenses;

};

function mostExpensiveItem(arr) {
    if (arr.length === 0) {
        return "No expenses yet!";
    }

    let mostExpensive = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i].price > mostExpensive.price) {
            mostExpensive = arr[i];
        }
    }

    return `Most expensive item: ${mostExpensive.product} - ${mostExpensive.price}`;
}




let firstExpense = addExpense("Apple", 2.60);
let secondExpense = addExpense("Shampoo", 7.20);
let thirdExpense = addExpense("Beef Stake", 12);
console.log(expenses);
console.log(listExpenses(expenses));
console.log(`Total spent: ` + totalSpending(expenses));
// console.log(mostExpensiveItem(expenses));