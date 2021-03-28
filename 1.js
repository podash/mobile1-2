// Частина 1

// Дано рядок у форматі "Student1 - Group1; Student2 - Group2; ..."

let studentsStr =
  "Дмитренко Олександр - ІП-84; Матвійчук Андрій - ІВ-83; Лесик Сергій - ІО-82; Ткаченко Ярослав - ІВ-83; Аверкова Анастасія - ІО-83; Соловйов Даніїл - ІО-83; Рахуба Вероніка - ІО-81; Кочерук Давид - ІВ-83; Лихацька Юлія- ІВ-82; Головенець Руслан - ІВ-83; Ющенко Андрій - ІО-82; Мінченко Володимир - ІП-83; Мартинюк Назар - ІО-82; Базова Лідія - ІВ-81; Снігурець Олег - ІВ-81; Роман Олександр - ІО-82; Дудка Максим - ІО-81; Кулініч Віталій - ІВ-81; Жуков Михайло - ІП-83; Грабко Михайло - ІВ-81; Іванов Володимир - ІО-81; Востриков Нікіта - ІО-82; Бондаренко Максим - ІВ-83; Скрипченко Володимир - ІВ-82; Кобук Назар - ІО-81; Дровнін Павло - ІВ-83; Тарасенко Юлія - ІО-82; Дрозд Світлана - ІВ-81; Фещенко Кирил - ІО-82; Крамар Віктор - ІО-83; Іванов Дмитро - ІВ-82";

// Завдання 1
// Заповніть словник, де:
// - ключ – назва групи
// - значення – відсортований масив студентів, які відносяться до відповідної групи

var studentsGroups = {};

// Ваш код починається тут

studentsStr.split(";").forEach((element) => {
  let components = element.split("- ");
  let name = components[0].trim();
  let group = components[1].trim();

  if (studentsGroups[group] === undefined) {
    studentsGroups[group] = [];
  }

  studentsGroups[group].push(name);
});

for (var key in studentsGroups) {
  if (studentsGroups.hasOwnProperty(key)) {
    studentsGroups[key].sort();
  }
}

// Ваш код закінчується тут

console.log("Завдання 1");
console.log(studentsGroups);
console.log();

// Дано масив з максимально можливими оцінками

let points = [12, 12, 12, 12, 12, 12, 12, 16];

// Завдання 2
// Заповніть словник, де:
// - ключ – назва групи
// - значення – словник, де:
//   - ключ – студент, який відносяться до відповідної групи
//   - значення – масив з оцінками студента (заповніть масив випадковими значеннями, використовуючи функцію `randomValue(maxValue: Int) -> Int`)

function randomValue(maxValue) {
  switch (Math.ceil(Math.random() * 6)) {
    case 1:
      return Math.ceil(maxValue * 0.7);
    case 2:
      return Math.ceil(maxValue * 0.9);
    case (3, 4, 5):
      return maxValue;
    default:
      return 0;
  }
}

var studentPoints = {};

// Ваш код починається тут

for (var key in studentsGroups) {
  if (studentsGroups.hasOwnProperty(key)) {
    let studentDict = {};
    studentsGroups[key].forEach((student) => {
      let studentPoints = points.map((point) => randomValue(point));
      studentDict[student] = studentPoints;
    });

    studentPoints[key] = studentDict;
  }
}

// Ваш код закінчується тут

console.log("Завдання 2");
console.log(studentPoints);
console.log();

// Завдання 3
// Заповніть словник, де:
// - ключ – назва групи
// - значення – словник, де:
//   - ключ – студент, який відносяться до відповідної групи
//   - значення – сума оцінок студента

var sumPoints = {};

// Ваш код починається тут

for (var group in studentPoints) {
  if (studentPoints.hasOwnProperty(group)) {
    let studentsDict = studentPoints[group];
    for (var student in studentsDict) {
      if (studentsDict.hasOwnProperty(student)) {
        let sum = studentsDict[student].reduce((p, c) => p + c, 0);
        studentsDict[student] = sum;
      }
    }
    sumPoints[group] = studentsDict;
  }
}

// Ваш код закінчується тут

console.log("Завдання 3");
console.log(sumPoints);
console.log();

// Завдання 4
// Заповніть словник, де:
// - ключ – назва групи
// - значення – середня оцінка всіх студентів групи

var groupAvg = {};

// Ваш код починається тут

for (var group in sumPoints) {
  if (sumPoints.hasOwnProperty(group)) {
    let studentsDict = studentPoints[group];
    let sum = 0;
    let count = 0;
    for (var student in studentsDict) {
      if (studentsDict.hasOwnProperty(student)) {
        sum += studentsDict[student];
        count++;
      }
    }
    groupAvg[group] = sum / count;
  }
}
// Ваш код закінчується тут

console.log("Завдання 4");
console.log(groupAvg);
console.log();

// Завдання 5
// Заповніть словник, де:
// - ключ – назва групи
// - значення – масив студентів, які мають >= 60 балів

var passedPerGroup = {};

// Ваш код починається тут

for (var group in sumPoints) {
  if (sumPoints.hasOwnProperty(group)) {
    let passedStudents = [];
    let studentsDict = sumPoints[group];
    for (var student in studentsDict) {
      if (studentsDict.hasOwnProperty(student)) {
        if (studentsDict[student] >= 60) {
          passedStudents.push(student);
        }
      }
    }
    passedPerGroup[group] = passedStudents;
  }
}

// Ваш код закінчується тут

console.log("Завдання 5");
console.log(passedPerGroup);