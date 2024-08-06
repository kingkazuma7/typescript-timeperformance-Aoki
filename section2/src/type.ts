// type (型エイリアス)
type MemberType = {
  name: string,
  age: number,
}
type MemberHobby = {
  hobby: string
}

const memberT: MemberType = {
  name: 'ゾロ',
  age: 19
}
type MemberProfile = MemberType & MemberHobby // 2つ

const memberInfo: MemberProfile = {
  name: 'ゾロ',
  age: 19,
  hobby: '剣道'
}
console.log(memberInfo);
