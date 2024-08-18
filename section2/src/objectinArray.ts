type ObjectInArray1 = {
  id: number,
  name: string,
  hobby: string
}[] // 配列

type ObjectInArray2 = {
  [key: string] : string | number  | boolean
}[]

const members : ObjectInArray2 = [
  {
    id: 1,
    name: 'ゾロ',
    hobby: '剣道',
    age: 21
  }, {
    id: 2,
    name: 'ルフィ',
    hobby: '冒険',
    age: 19
  }, {
    id: 3,
    name: 'ナミ',
    hobby: '航海',
    age: 20
  }, {
    id: 4,
    name: 'ウソップ',
    hobby: '発明',
    age: 19
  }, {
    id: 5,
    name: 'サンジ',
    hobby: '料理',
    age: 21
  }
]

for (const member of members) {
  console.log(`name: ${member.name}、${member.age}歳の趣味は${member.hobby}です`);
}