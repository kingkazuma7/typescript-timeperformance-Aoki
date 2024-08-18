const SIZE = {
  SMALL: '小',
  MEDIUM: '中',
  LARGE: '大'
} as const

type SizeType = keyof typeof SIZE

const sizeCheck = (size: SizeType) => {
  console.log(size);
}
// sizeCheck("LARGE");
// sizeCheck("LARGE##"); // 型 '"LARGE##"' の引数を型 '"SMALL" | "MEDIUM" | "LARGE"' のパラメーターに割り当てることはできません。

// value
type ValueOfSize = typeof SIZE[keyof typeof SIZE]