// 1-1. 関数に型をつけよう
// 次の関数isPositiveは、数値を受け取ってそれが0以上ならtrue、0未満ならfalseを返す関数です。
// この関数に正しく型アノテーションを付けてください。型アノテーションとは、引数や返り値の型をソースコード中に明示することです。

// function isPositive(num) {
//   return num >= 0;
// }
// const numVar: number = isPositive(-5);

function isPositive(num: number): boolean {
  return num >= 0;
}

// 1-2. オブジェクトの型
// 1人のユーザーのデータを表すオブジェクトは、nameプロパティとageプロパティ、そしてprivateプロパティを持っています。
// nameは文字列、ageは数値、privateは真偽値です。ユーザーデータのオブジェクトの型Userを定義してください。

type User = {
  name: string;
  age: number;
  private: boolean;
}

// 1-3. 関数の型
// 以下のコードで定義される関数isPositiveは、数値を受け取ってその数値が0以上ならtrueを、0未満ならfalseを返す関数です。
// 以下のコードに合うように適切な型IsPositiveFuncを定義してください。

// const isPositive: IsPositiveFunc = num => num >= 0;

type IsPositiveFunc = (num: number) => boolean

const isPositive2: IsPositiveFunc = num => num >= 0;


// 1-4. 配列の型
// 以下のコードで定義される関数sumOfPosは、数値の配列を受け取って、そのうち0以上の値の和を返す関数です。
// 適切な型アノテーションをつけてください。

// function sumOfPos(arr) {
//   return arr.filter(num => num >= 0).reduce((acc, num) => acc + num, 0);
// }

function sumOfPos(arr: number[]): number {
  return arr.filter(num => num >= 0).reduce((acc, num) => acc + num, 0);
}