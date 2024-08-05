function func1(string:string, int:number) {
  console.log(int);
  console.log(string);
}
func1("かずま", 30);

const func2 = (str: string, val: boolean): void => {
  console.log(str, val);
}
func2("zoro", false);

// 引数 ? あるかわからない
const funcTestQ = (str: string, int?: number): void {
  console.log(str, int);
}
funcTestQ("ほげほげ");

// デフォルトパラメーター
const funcTestD = (int?: number, str: string = "ふが"): void  => {
  console.log(int, str);
}
funcTestD();

// 可変長パラメーター
const eachNum = (...items: number[]) :void =>  {
  for (const item of items) {
    console.log(item);
  }
}
eachNum(1,2,3,4);