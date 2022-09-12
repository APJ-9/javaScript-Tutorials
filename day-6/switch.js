function caseInSwitch(val) {
    var answer = '';
    switch (val) {
        case 1:
            answer = 'alpha';
            break;
        case 2:
            answer = 'beta';
            break;
        case 3:
            answer = 'Gama';
            break;
        case 4:
            answer = 'Delta';
            break;
        default:
            answer = "Invalid Option try again";
    }
    return answer;
}
console.log(caseInSwitch(2));