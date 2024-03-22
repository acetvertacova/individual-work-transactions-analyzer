## Instructions for starting a project:

=================================================================================
# Example Usage:
####5. After starting the script, you can create an instance of the TransactionAnalyzer class and utilize its methods to analyze the transaction data. For example:

####***const transactionAnalyzer = new TransactionAnalyzer();***
####***console.log(transactionAnalyzer.getAllTransaction());***
====================================================================================
# Description of the individual work:
####In this individual work, we are developing a Transaction Analyzer class in JavaScript. This class is designed ***to analyze transaction data stored in a JSON file.*** The class provides various methods to perform operations on the transaction data, such as adding ####new transactions, retrieving transactions based on different criteria, calculating totals and more.
====================================================================================
# Examples of the project using: 
####***Method of calculating total amount(using the array method reduce)***
calculateTotalAmount() {
        const totalAmount = transactions.reduce((accumulator, currentValue) => accumulator + currentValue.transaction_amount, 0);
        return totalAmount;
    }
//8000
####***Method of finding the month with the most transactions have been made (using the array method split)***
findMostTransactionsMonth() {
        const monthsArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (let i = 0; i < transactions.length; i++) {
            const dateByParts = transactions[i].transaction_date.split("-");
            const monthIndex = dateByParts[1] - 1;
            monthsArray[monthIndex]++;
        }

        const maxIndex = monthsArray.indexOf(Math.max(...monthsArray));
        return maxIndex + 1;
    }
//1
####***Method of getting transactions by merchant name (using the array method filter)***
getTransactionByMerchant(merchantName) {
        const transactionsArraySortedByMerchantName = transactions.filter(transaction => {
            return (transaction.merchant_name === merchantName);
        });

        return transactionsArraySortedByMerchantName;
    }
====================================================================================
# Answers on the control questions:
####1. What primitive data types are there in JavaScript?
####    **number**
####    **undefined**
####    **boolean**
####    **string**
####    **symbol**
####    **bigint**
####2. What array methods have you used to process and analyze data in your application, and how did they help in completing the task?

#### ***Array.push()***: This method is utilized in the addTransaction() function to add a new transaction to the existing transactions array.

####***Array.filter()***: The getTransactionByType(), getTransactionsInDateRange(), getTransactionByMerchant(), getTransactionsBeforeDate(), and findTransactionById() methods all employ the filter() function to retrieve transactions based on specific criteria such as ####transaction type, date range, merchant name, or transaction ID.

####***Array.map()***: The mapTransactionDescriptions() method utilizes the map() function to extract only the transaction descriptions from the transaction objects and return them as an array.

####***Array.reduce()***: The calculateTotalAmount() and calculateTotalDebitAmount() functions make use of reduce() to calculate the total transaction amount and total debit amount, respectively, from the transactions array.

####`These array methods provide powerful tools for manipulating and analyzing data within the transactions array. They enable filtering, mapping data according to specific requirements, facilitating various analytical tasks such as calculating totals, finding specific ####transactions, and extracting relevant information from the dataset.`

####3. What is the role of a class constructor?
####The class constructor in object-oriented programming languages like JavaScript serves the purpose of ***initializing objects created from a class.*** 

####4. How can you create a new instance of a class in JavaScript?
####In JavaScript, you can create a new instance of a class using the new keyword followed by the class name and any required arguments to the class constructor. Here's the general syntax:

####***const instanceName = new ClassName(argument1, argument2, ...);***
========================================================================================
# The list of used source:
####1. [Rules for the provision of laboratory work](https://github.com/MSU-Courses/javascript_typescript/blob/main/lab/lab_guidelines.md)
####2. [Individual work №1](https://github.com/MSU-Courses/javascript_typescript/blob/main/lab/LI1/JS01.md)

# Instructions for running the project:
####`Run the project in the VScode`
