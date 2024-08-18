type ObjectInArray1 = {
  id: number,
  name: string,
  hobby: string
}[] // 配列

const members : ObjectInArray1 = [
  {
    id: 1,
    name: 'ゾロ',
    hobby: '剣道',
  }, {
    id: 2,
    name: 'ルフィ',
    hobby: '冒険',
  }, {
    id: 3,
    name: 'ナミ',
    hobby: '航海',
  }, {
    id: 4,
    name: 'ウソップ',
    hobby: '発明',
  }, {
    id: 5,
    name: 'サンジ',
    hobby: '料理',
  }
]

for (const member of members) {
  console.log(`name: ${member.name}の趣味は${member.hobby}です`);
}