## Instructions for starting a project:

=======================================
# Clone the Repository
1. Clone the repository containing the project code to your local machine using Git. You can do this by running the following command in your terminal or command prompt:
***git clone <repository-url>***

# Navigate to Project Directory:
2. Navigate to the directory where you cloned the project using the cd command:
***cd <project-directory>***

# Prepare Data File:
3. Make sure you have a JSON file named transactions.json in the same directory as your script. This file should contain the transaction data in the required format.

# Run the Script:
4. Once you have the dependencies installed and the data file ready, you can run the script using Node.js. Execute the following command:
***node <script-name.js>***

# Example Usage:
5. After starting the script, you can create an instance of the TransactionAnalyzer class and utilize its methods to analyze the transaction data. For example:

***const transactionAnalyzer = new TransactionAnalyzer();***
***console.log(transactionAnalyzer.getAllTransaction());***
====================================================================================
# Description of the individual work:
In this individual work, we are developing a Transaction Analyzer class in JavaScript. This class is designed ***to analyze transaction data stored in a JSON file.*** The class provides various methods to perform operations on the transaction data, such as adding new transactions, retrieving transactions based on different criteria, calculating totals and more.
====================================================================================
# Examples of the project using:
====================================================================================
# Answers on the control questions:
1. What primitive data types are there in JavaScript?
    **number**
    **undefined**
    **boolean**
    **string**
    **symbol**
    **bigint**
2. What array methods have you used to process and analyze data in your application, and how did they help in completing the task?

 ***Array.push()***: This method is utilized in the addTransaction() function to add a new transaction to the existing transactions array.

***Array.filter()***: The getTransactionByType(), getTransactionsInDateRange(), getTransactionByMerchant(), getTransactionsBeforeDate(), and findTransactionById() methods all employ the filter() function to retrieve transactions based on specific criteria such as transaction type, date range, merchant name, or transaction ID.

***Array.map()***: The mapTransactionDescriptions() method utilizes the map() function to extract only the transaction descriptions from the transaction objects and return them as an array.

***Array.reduce()***: The calculateTotalAmount() and calculateTotalDebitAmount() functions make use of reduce() to calculate the total transaction amount and total debit amount, respectively, from the transactions array.

`These array methods provide powerful tools for manipulating and analyzing data within the transactions array. They enable filtering, mapping data according to specific requirements, facilitating various analytical tasks such as calculating totals, finding specific transactions, and extracting relevant information from the dataset.`

3. What is the role of a class constructor?
The class constructor in object-oriented programming languages like JavaScript serves the purpose of ***initializing objects created from a class.*** 

4. How can you create a new instance of a class in JavaScript?
In JavaScript, you can create a new instance of a class using the new keyword followed by the class name and any required arguments to the class constructor. Here's the general syntax:

***const instanceName = new ClassName(argument1, argument2, ...);***
================================================================================================
# The list of used source:

