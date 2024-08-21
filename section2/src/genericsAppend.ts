// 型の成約
type GenObjectE<T extends number | string> = {
  sample: T
}

const testObjE: GenObjectE<string> = {
  sample: 'テキスト'
}
console.log(testObjE.sample);

// デフォルト型
type GenObjectD<T = string> = {
  sample: T
}

const testObjD: GenObjectD = {
  sample: 'foo D'
}
console.log(testObjD.sample);
