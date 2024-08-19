type genObject<T, U> = {
  name: string,
  age: number,
  memo: T,
  color: U
}

const narutoMemner: genObject<string, string> = {
  name: 'なると',
  age: 17,
  memo: '火影になる',
  color: 'オレンジ'
}

console.log(narutoMemner);