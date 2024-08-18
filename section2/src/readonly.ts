// type (型エイリアス)
type MemberTypeR = {
  readonly name: string,
  age: number,
}
const memberR: MemberTypeR = {
  name: 'ゾロ',
  age: 19
}
// memberR.name = 'サンジ';
console.log(memberR.name);
