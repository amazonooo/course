// function getStatus(age) {
//     if(age < 14) return 'Child'
//     if(age < 20) return 'Teen'
//     if(age < 50) return 'Adult'

//     return 'Old'
// }

// console.log(getStatus(17));

function getStatus(age) {
    switch(age) {
        case age < 14:
            return 'Child';
        case age < 20:
            return 'teen';
        case age < 50:
            return 'adult';
        default:
            return 'Old'
    }
}