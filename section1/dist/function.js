function func1(string, int) {
    console.log(int);
    console.log(string);
}
func1("かずま", 30);
const func2 = (str, val) => {
    console.log(str, val);
};
func2("zoro", false);
// 引数 ? あるかわからない
const funcTestQ = (str, int) => {
    console.log(str, int);
};
funcTestQ("ほげほげ");
// デフォルトパラメーター
const funcTestD = (int, str = "ふが") => {
    console.log(int, str);
};
funcTestD();
// 可変長パラメーター
const eachNum = (...items) => {
    for (const item of items) {
        console.log(item);
    }
};
eachNum(1, 2, 3, 4);
//# sourceMappingURL=function.js.map