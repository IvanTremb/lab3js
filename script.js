let transactions = [
    { id: 1, date: '2023-01-01 10:00:00', amount: 100, category: 'Food', description: 'Bought groceries at the local store' },
    { id: 2, date: '2023-01-02 11:00:00', amount: -50, category: 'Entertainment', description: 'Cinema tickets for a new movie' },
    { id: 3, date: '2023-01-03 12:00:00', amount: 200, category: 'Salary', description: 'Monthly salary credited' },
    { id: 4, date: '2023-01-04 13:00:00', amount: -30, category: 'Transport', description: 'Fuel for car' },
    { id: 5, date: '2023-01-05 14:00:00', amount: -20, category: 'Food', description: 'Lunch at the cafeteria' },
    { id: 6, date: '2023-01-06 15:00:00', amount: 150, category: 'Gift', description: 'Received a gift from a friend' },
    { id: 7, date: '2023-01-07 16:00:00', amount: -75, category: 'Clothing', description: 'Bought new shoes' },
    { id: 8, date: '2023-01-08 17:00:00', amount: -40, category: 'Food', description: 'Dinner at a restaurant' },
    { id: 9, date: '2023-01-09 18:00:00', amount: -100, category: 'Utilities', description: 'Electricity bill payment' },
    { id: 10, date: '2023-01-10 19:00:00', amount: -60, category: 'Entertainment', description: 'Concert tickets' },
    { id: 11, date: '2023-01-11 20:00:00', amount: 300, category: 'Salary', description: 'Freelance project payment' },
    { id: 12, date: '2023-01-12 21:00:00', amount: -25, category: 'Transport', description: 'Taxi fare' },
    { id: 13, date: '2023-01-13 22:00:00', amount: -15, category: 'Food', description: 'Coffee and snacks' },
    { id: 14, date: '2023-01-14 23:00:00', amount: -80, category: 'Clothing', description: 'Bought a new jacket' },
    { id: 15, date: '2023-01-15 08:00:00', amount: -200, category: 'Rent', description: 'Monthly apartment rent' },
    { id: 16, date: '2023-01-16 09:00:00', amount: 100, category: 'Gift', description: 'Birthday gift received' },
    { id: 17, date: '2023-01-17 10:00:00', amount: -35, category: 'Food', description: 'Groceries for the week' },
    { id: 18, date: '2023-01-18 11:00:00', amount: 50, category: 'Bonus', description: 'Year-end bonus from employer' },
    { id: 19, date: '2023-01-19 12:00:00', amount: -45, category: 'Transport', description: 'Monthly bus pass' },
    { id: 20, date: '2023-01-20 13:00:00', amount: -100, category: 'Healthcare', description: 'Doctor visit and medication' },
    { id: 21, date: '2023-01-21 14:00:00', amount: 150, category: 'Gift', description: 'Anniversary gift received' },
    { id: 22, date: '2023-01-22 15:00:00', amount: -30, category: 'Food', description: 'Dinner at a new restaurant' },
    { id: 23, date: '2023-01-23 16:00:00', amount: 250, category: 'Salary', description: 'Part-time job payment' },
    { id: 24, date: '2023-01-24 17:00:00', amount: -70, category: 'Clothing', description: 'Bought new jeans' },
    { id: 25, date: '2023-01-25 18:00:00', amount: -20, category: 'Food', description: 'Breakfast at a cafe' },
    { id: 26, date: '2023-01-26 19:00:00', amount: 100, category: 'Gift', description: 'Holiday gift from family' },
    { id: 27, date: '2023-01-27 20:00:00', amount: -40, category: 'Transport', description: 'Gas for the car' },
    { id: 28, date: '2023-01-28 21:00:00', amount: -15, category: 'Food', description: 'Lunch at work' },
    { id: 29, date: '2023-01-29 22:00:00', amount: -90, category: 'Entertainment', description: 'Subscription to streaming service' },
    { id: 30, date: '2023-01-30 23:00:00', amount: 300, category: 'Salary', description: 'Freelance project payment' },
    { id: 31, date: '2023-02-01 08:00:00', amount: -50, category: 'Food', description: 'Groceries for the week' },
    { id: 32, date: '2023-02-02 09:00:00', amount: -100, category: 'Rent', description: 'Monthly apartment rent' },
    { id: 33, date: '2023-02-03 10:00:00', amount: 150, category: 'Gift', description: 'Received a birthday gift' },
    { id: 34, date: '2023-02-04 11:00:00', amount: -30, category: 'Transport', description: 'Taxi fare' },
    { id: 35, date: '2023-02-05 12:00:00', amount: -20, category: 'Food', description: 'Lunch at a restaurant' },
    { id: 36, date: '2023-02-06 13:00:00', amount: 200, category: 'Bonus', description: 'Performance bonus from work' },
    { id: 37, date: '2023-02-07 14:00:00', amount: -75, category: 'Clothing', description: 'Bought new sneakers' },
    { id: 38, date: '2023-02-08 15:00:00', amount: -40, category: 'Food', description: 'Dinner at a diner' },
    { id: 39, date: '2023-02-09 16:00:00', amount: -100, category: 'Utilities', description: 'Internet bill payment' },
    { id: 40, date: '2023-02-10 17:00:00', amount: -60, category: 'Entertainment', description: 'Purchased video games' },
    { id: 41, date: '2023-02-11 18:00:00', amount: 250, category: 'Salary', description: 'Freelance work payment' },
    { id: 42, date: '2023-02-12 19:00:00', amount: -25, category: 'Transport', description: 'Monthly bus pass' },
    { id: 43, date: '2023-02-13 20:00:00', amount: -15, category: 'Food', description: 'Coffee at a cafe' },
    { id: 44, date: '2023-02-14 21:00:00', amount: -80, category: 'Clothing', description: 'Bought a new sweater' },
    { id: 45, date: '2023-02-15 22:00:00', amount: -200, category: 'Healthcare', description: 'Dentist appointment' },
    { id: 46, date: '2023-02-16 23:00:00', amount: 100, category: 'Gift', description: 'Received a holiday gift' },
    { id: 47, date: '2023-02-17 08:00:00', amount: -35, category: 'Food', description: 'Groceries for the week' },
    { id: 48, date: '2023-02-18 09:00:00', amount: 50, category: 'Bonus', description: 'Work bonus' },
    { id: 49, date: '2023-02-19 10:00:00', amount: -45, category: 'Transport', description: 'Monthly train pass' },
    { id: 50, date: '2023-02-20 11:00:00', amount: -100, category: 'Healthcare', description: 'Medical check-up' }
];

let transactionId = transactions.length;

function initializeTransactions() {
    for (let i = 0; i < transactions.length; i++) {
        appendTransactionToTable(transactions[i]);
    }
    calculateTotal();
}

function addTransaction() {
    let amount = parseFloat(document.getElementById('amount').value);
    let category = document.getElementById('category').value;
    let description = document.getElementById('description').value;

    let transaction = {
        id: ++transactionId,
        date: new Date().toLocaleString(),
        amount: amount,
        category: category,
        description: description
    };

    transactions.push(transaction);
    appendTransactionToTable(transaction);
    calculateTotal();
}

function appendTransactionToTable(transaction) {
    let table = document.getElementById('transactionsTable').getElementsByTagName('tbody')[0];
    let newRow = table.insertRow();

    if (transaction.amount >= 0) {
        newRow.className = 'green-row';
    } else {
        newRow.className = 'red-row';
    }

    newRow.insertCell(0).textContent = transaction.id;
    newRow.insertCell(1).textContent = transaction.date;
    newRow.insertCell(2).textContent = transaction.category;
    newRow.insertCell(3).textContent = transaction.description.split(' ').slice(0, 4).join(' ');

    let actionCell = newRow.insertCell(4);
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        deleteTransaction(transaction.id);
    };
    actionCell.appendChild(deleteButton);

    newRow.onclick = function() {
        showFullDescription(transaction.description);
    };
}

function deleteTransaction(id) {
    for (let i = 0; i < transactions.length; i++) {
        if (transactions[i].id === id) {
            transactions.splice(i, 1);
            break;
        }
    }
    let table = document.getElementById('transactionsTable').getElementsByTagName('tbody')[0];
    for (let i = 0; i < table.rows.length; i++) {
        if (parseInt(table.rows[i].cells[0].textContent) === id) {
            table.deleteRow(i);
            break;
        }
    }
    calculateTotal();
}

function calculateTotal() {
    let total = 0;
    for (let i = 0; i < transactions.length; i++) {
        total += transactions[i].amount;
    }
    document.getElementById('totalAmount').textContent = 'Total: ' + total;
}

function showFullDescription(description) {
    document.getElementById('fullDescription').textContent = description;
}

initializeTransactions();