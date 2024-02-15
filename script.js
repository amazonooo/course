function getStatus(age) {
    if(age < 14) return 'Child'
    if(age < 20) return 'Teen'
    if(age < 50) return 'Adult'

    return 'Old'
}

console.log(getStatus(17));