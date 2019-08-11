// Условия
// Запросить у пользователя возраст. Добавить условие при котором возраст
// будет выводиться с правильным словом: "год", "года" или "лет". Т.е.
// "29 лет" или "4 года".

var age = +prompt('How old are you?', '');
var str1 = 'год';
var str2 = 'года';
var str3 = 'лет';
var res = age%10;
var res1= age%100;
if ((age===1) || (age>20 && res===1) && res1!==11) {
    alert(age + ' ' + str1);
}else if ((age>1 && age<5) || (age>20 && res>1 && res<5 && res1!==12 && res1!==13 && res1!==14)) {
    alert(age+' '+str2);
} else {
    alert(age+' '+str3);
}



