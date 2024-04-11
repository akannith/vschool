const form = document.getElementById("monstersForm");

function costOfMonster(num1, num2) {
    return (num1 * num2);
}

function totalCost(e){
    e.preventDefault();

    let numberOfGoombas = costOfMonster(form.goombas.value, 5);
    let numberOfBobombs = costOfMonster(form.bobombs.value, 7);
    let numberOfCheepcheeps = costOfMonster(form.cheepcheeps.value, 11);

    let result = (numberOfGoombas + numberOfBobombs + numberOfCheepcheeps);

    document.getElementById("totalCost").textContent = `Your total cost is ${result} coins.`;

    form.goombas.value = " ";
    form.bobombs.value = " ";
    form.cheepcheeps.value = " ";
}

form.addEventListener("submit", totalCost);