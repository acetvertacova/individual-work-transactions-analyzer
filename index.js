// Required to work with file paths in a platform-independent way
const path = require('path');
// Importing the transactions data from a JSON file located in the same directory as this script
const transactions = require(path.join(__dirname, 'transactions.json'));
/**
 * Initializing class that represents a transaction analyzer
 */
class TransactionAnalyzer {
    /**
     * Creating a TransactionAnalyzer exemplar
     * @param {string} transaction_id 
     * @param {string} transaction_date - in "YYYY-MM-DD" format
     * @param {number} transaction_amount 
     * @param {string} transaction_type - debit/credit
     * @param {string} transaction_description 
     * @param {string} merchant_name 
     * @param {string} card_type 
     */
    constructor(transaction_id, transaction_date, transaction_amount, transaction_type, transaction_description, merchant_name, card_type) {
        this.transaction_id = transaction_id;
        this.transaction_date = transaction_date;
        this.transaction_amount = transaction_amount;
        this.transaction_type = transaction_type;
        this.transaction_description = transaction_description;
        this.merchant_name = merchant_name;
        this.card_type = card_type;
    }
    /**
     * Returns the JSON representation of the transaction
     * @returns {string} JSON representation of the transaction
     */
    string() {
        return JSON.stringify({
            transaction_id: this.transaction_id,
            transaction_date: this.transaction_date,
            transaction_amount: this.transaction_amount,
            transaction_type: this.transaction_type,
            transaction_description: this.transaction_description,
            merchant_name: this.merchant_name,
            card_type: this.card_type
        });
    }
    /**
     * Adding a new transaction to the transactions array
     * @param {object} newTransaction 
     */
    addTransaction(newTransaction) {
        transactions.push(newTransaction);
    }
    /**
     * Displaying the transactions array
     * @returns {object[]}
     */
    getAllTransaction() {
        return transactions;
    }
    /**
     * Getting unique values of the given key
     * @param {string} key 
     * @returns {Set}
     */
    getUniqueTransactionType(key) {
        let transactionTypeArray = new Set();
        transactions.map(transaction => transactionTypeArray.add(transaction[key]));
        return transactionTypeArray;
    }
    /**
     * Calculating total amount of transactions from transactions array
     * @returns {object[]}
     */
    calculateTotalAmount() {
        const totalAmount = transactions.reduce((accumulator, currentValue) => accumulator + currentValue.transaction_amount, 0);
        return totalAmount;
    }
    /**
     * Calculating transactions total amount that have been made in the indicated day
     * @param {number} year 
     * @param {number} month 
     * @param {number} day 
     * @returns {object[]}
     */
    calculateTotalAmountByDate(year, month, day) {
        let totalAmountByDate = 0;
        for (let i = 0; i < transactions.length; i++) {
            const dateByParts = transactions[i].transaction_date.split("-");
            const transactionYear = dateByParts[0];
            const transactionMonth = dateByParts[1];
            const transactionDay = dateByParts[2];

            if ((transactionYear == year || transactionYear === undefined) && (transactionMonth == month || transactionMonth === undefined) && (transactionDay == day || transactionDay === undefined)) {
                totalAmountByDate += transactions[i].transaction_amount;
            }
        }
        return totalAmountByDate;
    };
    /**
     * Getting transactions of indicated type
     * @param {string} transactionType 
     * @returns {object[]}
     */
    getTransactionByType(transactionType) {
        const transactionsArraySortedByType = transactions.filter(transaction => transaction.transaction_type === transactionType);
        return transactionsArraySortedByType;
    }
    /**
     * Getting transactions have been made in indicated date range
     * @param {string} startDate 
     * @param {string} endDate 
     * @returns {object[]}
     */
    getTransactionsInDateRange(startDate, endDate) {
        const transactionsArraySortedByDateRange = transactions.filter(transaction => {
            return (transaction.transaction_date >= startDate && transaction.transaction_date <= endDate)
        });

        return transactionsArraySortedByDateRange;
    }
    /**
     * Getting transactions list filtered by indicated merchant name
     * @param {string} merchantName 
     * @returns {object[]}
     */
    getTransactionByMerchant(merchantName) {
        const transactionsArraySortedByMerchantName = transactions.filter(transaction => {
            return (transaction.merchant_name === merchantName);
        });

        return transactionsArraySortedByMerchantName;
    }
    /**
     * Calculating average transactions' amount
     * @returns {object[]}
     */
    calculateAverageTransactionAmount() {
        const totalAmount = this.calculateTotalAmount();
        if (transactions.length > 0) {
            let averageAmount = totalAmount / transactions.length;
            return averageAmount;
        } else {
            return "Error!";
        }
    }
    /**
     * Getting transactions list filtered by indicated amount range
     * @param {number} minAmount 
     * @param {number} maxAmount 
     * @returns {object[]}
     */
    getTransactionsByAmountRange(minAmount, maxAmount) {
        const transactionsArraySortedByAmountRange = transactions.filter(transaction => {
            return (transaction.transaction_amount >= minAmount && transaction.transaction_amount <= maxAmount)
        });

        return transactionsArraySortedByAmountRange;
    }

    /**
     * Calculating total debit amount
     * @returns {number} 
     */
    calculateTotalDebitAmount() {
        let totalDebitAmount = transactions.reduce((accumulator, currentTransaction) => {
            if (currentTransaction.transaction_type === "debit") {
                return accumulator + currentTransaction.transaction_amount;
            } else {
                return accumulator;
            }
        }, 0);

        return totalDebitAmount;
    }
    /**
     * Finding month with the most made transactions,where index +1 of the montsArray corresponds to the day of the month
     * @returns {number}
     */
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
    /**
     * Identifies the month with the highest number of debit transactions.
     * This method iterates through all transactions, counts the number of debit transactions
     * for each month, and then identifies the month with the highest count. Months are
     * indexed from 1 to 12, corresponding to January through December.
     * @returns {number} For example, returning 1 indicates January, while 12 indicates December.
     */
    findMostDebitTransactionMonth() {
        const monthsArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (let i = 0; i < transactions.length; i++) {
            const dateByParts = transactions[i].transaction_date.split("-");
            const monthIndex = dateByParts[1] - 1;
            if (transactions[i].transaction_type === "debit") {
                monthsArray[monthIndex]++;
            }
        }
        const maxIndex = monthsArray.indexOf(Math.max(...monthsArray));
        return maxIndex + 1;

    }
    /**
     * Determines the most frequent transaction type in the dataset.
     * This method counts the occurrence of each transaction type (debit and credit),
     * then compares these counts to identify which type is more prevalent. If the
     * counts are equal, it reports that both types occur with the same frequency.
     *
     * @returns {void} Prints the result to the console. The function itself does not return a value.
     */
    mostTransactionTypes() {
        let maxType;
        const transactionTypesArray = [0, 0]
        for (let i = 0; i < transactions.length; i++) {
            if (transactions[i].transaction_type === "debit") {
                transactionTypesArray[0] += 1;
            } else if (transactions[i].transaction_type === "credit") {
                transactionTypesArray[1] += 1;
            }
        }
        if (transactionTypesArray[0] !== transactionTypesArray[1]) {
            maxType = transactionTypesArray.indexOf(Math.max(...transactionTypesArray));
            if (maxType === 0) {
                console.log("Most transaction type - debit");
            } else if (maxType === 1) {
                console.log("Most transaction type - credit");
            }
        } else if (transactionTypesArray[0] === transactionTypesArray[1]) {
            console.log("Equal");
        }
    }
    /**
     * Getting list of transactions that have been made before indicated date
     * @param {string} date 
     * @returns {object[]}
     */
    getTransactionsBeforeDate(date) {
        const transactionBeforeDate = transactions.filter(transaction => {
            if (transaction.transaction_date < date) {
                return transaction;
            }
        });

        return transactionBeforeDate;
    }
    /**
     * Finding transactions by indicated id
     * @param {string} id 
     * @returns {object[]}
     */
    findTransactionById(id) {
        const transactionById = transactions.filter(transaction => {
            if (transaction.transaction_id === id) {
                return transaction;
            }
        })

        return transactionById;
    }
    /**
     * Getting only transactions' decriptions from the object
     * @returns {string[]}
     */
    mapTransactionDescriptions() {
        const decriptionArray = transactions.map(transaction => transaction.transaction_description);

        return decriptionArray;
    }
}
// Example of using the TransactionAnalyzer class
const transactionExample = new TransactionAnalyzer("1", "2019-01-01", 100.00, "debit", "Payment for groceries", "SuperMart", "Visa");
const transactionExample2 = new TransactionAnalyzer();
