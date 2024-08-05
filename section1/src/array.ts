
// タプル型
const arrayTest1: string[] = ["ああ", "いい"];
arrayTest1.push("うう");
console.log(arrayTest1);


// ユニオン型
const arrayTest2: (string | boolean)[] = ["ああ", true];
arrayTest2.push(false)
console.log(arrayTest2);

// 順番
const arrayTest3: [string, number, boolean] = ["ええ", 123, false]
arrayTest3.push("おお");
console.log(arrayTest3);