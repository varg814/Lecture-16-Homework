function multiply(a, b) {
  console.log(a * b);
}

multiply(3, 4);
//
// 2.⁠ ⁠ასაკის შემოწმება
function checkAge(age) {
  if (age >= 18) {
    console.log("შენ ხარ სრულწლოვანი");
  } else {
    console.log("შენ ხარ არასრულწლოვანი");
  }
}

checkAge(9);
//
// 3.⁠ ⁠რიცხვი ლუწია თუ კენტი
function isEvenOrOdd(num) {
  if (num % 2 == 0) {
    console.log("ლუწია");
  } else {
    console.log("კენტია");
  }
}

isEvenOrOdd(90);
//
// 4.⁠ ⁠switch case – დღეების დასახელება
function getDayName(dayNumber) {
  switch (true) {
    case dayNumber == 1:
      console.log("ორშაბათი");
      break;
    case dayNumber == 2:
      console.log("სამშაბათი");
      break;
    case dayNumber == 3:
      console.log("ოთხშაბათი");
      break;
    case dayNumber == 4:
      console.log("ხუთშაბათი");
      break;
    case dayNumber == 5:
      console.log("პარასკევი");
      break;
    case dayNumber == 6:
      console.log("შაბათი");
      break;
    case dayNumber == 7:
      console.log("კვირა");
      break;
    default:
      console.log("none");
      break;
  }
}

getDayName(6);
//
//  5.⁠ ⁠ორი რიცხვის შედარება
function compareNumbers(a, b) {
  switch (true) {
    case a > b:
      console.log("პირველი რიცხვი უფრო დიდია");
      break;
    case a < b:
      console.log("მეორე რიცხვი უფრო დიდია");
      break;
    default:
      console.log("ორივე რიცხვი ტოლია");
      break;
  }
}

compareNumbers(6, 9);
//
// 6.⁠ ⁠ოთხი მოქმედების კალკულატორი,
// 14.⁠ ⁠switch case – მათემატიკური ოპერატორების შემოწმება
function calculator(a, b, operator) {
  switch (true) {
    case operator === "-":
      console.log(a - b);
      break;
    case operator === "+":
      console.log(a + b);
      break;
    case operator === "/":
      console.log(a / b);
      break;
    case operator === "*":
      console.log(a * b);
      break;

    default:
      console.log("none");
      break;
  }
}

calculator(8, 10, "+");
//
// 7.⁠ ⁠ტემპერატურის კონვერტორი
function celsiusToFahrenheit(celsius) {
  console.log((celsius * 9) / 5 + 32);
}

celsiusToFahrenheit(10);
//
// 8.⁠ ⁠მაქსიმალური რიცხვის პოვნა
function findMax(a, b, c) {
  switch (true) {
    case a > b && a > c:
      console.log("a არის უდიდესი");
      break;
    case b > a && b > c:
      console.log("b არის უდიდესი");
      break;
    case c > a && c > b:
      console.log("c არის უდიდესი");
      break;

    default:
      console.log("none");
      break;
  }
}

findMax(51, 18, 12);
//
// 9.⁠ ⁠რიცხვის დადებითი თუ უარყოფითი
function checkSign(num) {
  switch (true) {
    case num > 0:
      console.log("დადებითია");
      break;
    case num < 0:
      console.log("უარყოფითია");
      break;
    default:
      console.log("none");
      break;
  }
}

checkSign(10);
//
// 10.⁠ ⁠switch case – თვეების დასახელება
function getMonthName(monthNumber) {
  switch (true) {
    case monthNumber == 1:
      console.log("იანვარი");
      break;
    case monthNumber == 2:
      console.log("თებერვალი");
      break;
    case monthNumber == 3:
      console.log("მარტი");
      break;
    case monthNumber == 4:
      console.log("აპრილი");
      break;
    case monthNumber == 5:
      console.log("მაისი");
      break;
    case monthNumber == 6:
      console.log("ივნისი");
      break;
    case monthNumber == 7:
      console.log("ივლისი");
      break;
    case monthNumber == 8:
      console.log("აგვისტო");
      break;
    case monthNumber == 9:
      console.log("სექტემბერი");
      break;
    case monthNumber == 10:
      console.log("ოქტომბერი");
      break;
    case monthNumber == 11:
      console.log("ნოემბერი");
      break;
    case monthNumber == 12:
      console.log("დეკემბერი");
      break;

    default:
      console.log("none");
      break;
  }
}

getMonthName(8);
//
//
// 11.⁠ ⁠გამრავლების მნიშვნელობა
function multiplyIfGreaterThanFive(num) {
  if (num >= 5) {
    console.log(num * 10);
  } else {
    console.log("რიცხვი მცირეა");
  }
}

multiplyIfGreaterThanFive(3);
//
//
// 12.⁠ ⁠switch case – სეზონის შემოწმება
function getSeason(seasonNumber) {
  switch (true) {
    case seasonNumber == 1:
      console.log("გაზაფხული");
      break;
    case seasonNumber == 2:
      console.log("ზაფხული");
      break;
    case seasonNumber == 3:
      console.log("შემოდგომა");
      break;
    case seasonNumber == 4:
      console.log("ზამთარი");
      break;

    default:
      console.log("none");
      break;
  }
}

getSeason(3);
//
//
// 13.⁠ ⁠მარტივი აღრიცხვის ფუნქცია
function checkPrice(price) {
  if (price > 100) {
    console.log("ფასი მაღალია");
  } else {
    console.log("ფასი ნორმალურია");
  }
}

checkPrice(101);
//
//
// 15.⁠ ⁠რიცხვების დადებითი ჯამი
function positiveSum(a, b) {
  if (a > 0 && b > 0) {
    console.log(a + b);
  } else {
    console.log("მინიმუმ ერთი რიცხვი უარყოფითია");
  }
}

positiveSum(8, 10);
