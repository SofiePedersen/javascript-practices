function findFutureDate(days) {
    var currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + days);
    return currentDate.toLocaleDateString();
}
console.log(findFutureDate(5))