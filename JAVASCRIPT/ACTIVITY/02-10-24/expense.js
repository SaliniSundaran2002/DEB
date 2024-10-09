let expenses = []
let categories = []

function addExpense() {
    const descriptionInput = document.getElementById('description')
    const amountInput = document.getElementById('amount')
    const categoryInput = document.getElementById('category')
    const display = document.getElementById('display')
    let expense = descriptionInput.value.trim()
    let amount = amountInput.value.trim()
    let category = categoryInput.value.trim()
    if (expense != '' && !isNaN(amount) && category!='') {
        expenses.push({expense, amount, category})
        categories.push(category)
        const li = document.createElement('li')
        li.textContent = `${expense} - ${amount} - ${category} `
        switch (category.toLowercase()) {

            case 'food':
                li.classList.add('Food')
                break
            case 'transport':
                li.classList.add('Transport')
                break
            case 'entertainment':
                li.classList.add('Entertainment')
                break
        }

        const completeButton = document.createElement('button')
        completeButton.textContent = 'Completed'
        completeButton.onclick = function () {
            li.classList.toggle('completed')
        }

        li.appendChild(completeButton)
        display.appendChild(li)
        descriptionInput.value = ''
        amountInput.value = ''
        categoryInput.value = ''
    } else {
        alert('Please enter a valid inputs')
    }

}