// 1. Написать функцию, преобразующую число в объект.Передавая на вход число от 0 до 999,мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни.
//Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2 }.
// Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
function countNumber(num) {
    if (num >= 0 && num <= 999) {
        var len = 0,
            n = num;
        while (n > 0) {
            n = Math.floor(n / 10);
            len++;
        }
        this.fullNumber = num;
        switch (len) {
            case 1:
                this.units = num;
            case 2:
                this.tens = Math.floor(num / 10);
                this.units = num % 10;

            case 3:
                this.hundreds = Math.floor(num / 100);
                this.tens = Math.floor(num / 10) % 10;
                this.units = num % 10;


        }

    } else {
        console.log('Эта функция работает только с числоами от 0 до 999');

    }
}
var number = new countNumber(parseInt(prompt()));
for (var i in number) {
    console.log(i + ':' + number[i])
}