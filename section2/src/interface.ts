// interface
// 型の宣言 javaでも持ちられている

interface MemberInterface {
  name: string,
  age: number
}
interface HobbyInterface {
  hobby: string,
  valid: boolean
}

const memberI: MemberInterface = {
  name: 'nami',
  age: 17
}


interface ProfileInterface extends MemberInterface, HobbyInterface {}

const memberInfo2: ProfileInterface = {
  name: 'nami',
  age: 17,
  hobby: "天気",
  valid: true
}
console.log(memberInfo2);
