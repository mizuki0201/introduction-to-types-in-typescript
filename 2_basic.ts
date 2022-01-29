// 2-1. ジェネリクス
// 以下のコードで定義される関数myFilterは、配列のfilter関数を再実装したものです。myFilter関数に適切な型アノテーションを付けてください。
// myFilter関数は色々な型の配列を受け取れる点に注意してください。必要に応じてmyFilterに型引数を追加しても構いません。

// function myFilter(arr, predicate) {
//   const result = [];
//   for (const elm of arr) {
//     if (predicate(elm)) {
//       result.push(elm);
//     }
//   }
//   return result;
// }

// // 使用例
// const res = myFilter([1, 2, 3, 4, 5], num => num % 2 === 0);
// const res2 = myFilter(['foo', 'hoge', 'bar'], str => str.length >= 4);

// // エラー例
// myFilter([1, 2, 3, 4, 5], str => str.length >= 4);

function myFilter<T>(arr: T[], predicate: (elm: T) => T[]) {
  const result = [];
  for (const elm of arr) {
    if (predicate(elm)) {
      result.push(elm);
    }
  }
  return result;
}


// 2-2. いくつかの文字列を受け取れる関数
// 以下のコードで定義されるgetSpeedは、'slow', 'medium', 'fast'のいずれかの文字列を受け取って数値を返す関数です。
// この関数に他の文字列を渡すのは型エラーとしたいです。この条件を満たすように型Speedを定義してください。

// type Speed = /* ここを入力 */;

// function getSpeed(speed: Speed): number {
//   switch (speed) {
//     case "slow":
//       return 10;
//     case "medium":
//       return 50;
//     case "fast":
//       return 200;
//   }
// }

// // 使用例
// const slowSpeed = getSpeed("slow");
// const mediumSpeed = getSpeed("medium");
// const fastSpeed = getSpeed("fast");

// // エラー例
// getSpeed("veryfast");

type Speed = "slow" | "medium" | "fast";

function getSpeed(speed: Speed): number {
  switch (speed) {
    case "slow":
      return 10;
    case "medium":
      return 50;
    case "fast":
      return 200;
  }
}

// 2-3. 省略可能なプロパティ
// EventTarget#addEventListenerは、2つまたは3つの引数を受け取る関数で、返り値はありません。
// 1つ目の引数は文字列、2つ目の引数は関数です。そして3つ目の引数は省略可能であり、真偽値またはオブジェクトを渡すことができます。
// オブジェクトに存在可能なプロパティはcapture, once, passiveの3つで、全て真偽値であり、省略可能です。

// このようなインターフェースを持つ関数addEventListenerをdeclareを用いて宣言してください。
// 簡単のために、第2引数に指定する関数は引数無しで何も返さない関数としてください。

// // 使用例
// addEventListener("foobar", () => {});
// addEventListener("event", () => {}, true);
// addEventListener("event2", () => {}, {});
// addEventListener("event3", () => {}, {
//   capture: true,
//   once: false
// });
// // エラー例
// addEventListener("foobar", () => {}, "string");
// addEventListener("hoge", () => {}, {
//   capture: true,
//   once: false,
//   excess: true
// });

// なお、declareはTypeScriptに特有の構文であり、以下のように関数や変数の型を中身なしに宣言できる構文です。
// declare function foo(arg: number): number;

declare function addEventListener(
  str: string,
  fn: () => void,
  obj?: {
    capture?: boolean,
    once?: boolean,
    passive?: boolean
  } | boolean
): void;


// 2-4. プロパティを1つ増やす関数
// 下のコードで定義されるgiveId関数は、オブジェクトを受け取って、それに新しい文字列型のプロパティidを足してできる新しいオブジェクトを返す関数です。
// この関数に適切な型を付けてください。なお、簡単のために、giveIdに渡されるオブジェクトobjが既にidプロパティを持っている場合は考えなくて構いません。

// function giveId(obj) {
//   const id = "本当はランダムがいいけどここではただの文字列";
//   return {
//     ...obj,
//     id
//   };
// }

// // 使用例
// const obj1: {
//   id: string;
//   foo: number;
// } = giveId({ foo: 123 });
// const obj2: {
//   id: string;
//   num: number;
//   hoge: boolean;
// } = giveId({
//   num: 0,
//   hoge: true
// });

// // エラー例
// const obj3: {
//   id: string;
//   piyo: string;
// } = giveId({
//   foo: "bar"
// });

// 自分の誤答
// function giveId(obj: {...Obj}): {id: string, ...Obj} {
//   const id = "本当はランダムがいいけどここではただの文字列";
//   return {
//     ...obj,
//     id
//   };
// }

// 正答
function giveId<T>(obj: T): T & { id: string } {
  const id = "本当はランダムがいいけどここではただの文字列";
  return {
    ...obj,
    id
  };
}


// 2-5. useState
// ReactのuseState関数は、ステートを宣言するために使われます。
// 引数は1つで、宣言されるステートの初期値です。返り値は2つの要素を持つ配列で、最初の要素は現在のステートの値です。
// 2つ目の要素は関数であり、呼び出すとステートを更新できます。
// ステート更新関数は引数に新しいステートの値を受け取ることができるほか、現在の値を受け取って新しい値を返す関数を渡すことができます。
// useStateの使い方は以下の使用例も参考にしてください。

// このようなuseStateをdeclareで宣言してください。ただし、useStateはステートの値の型を型引数として取るようにしてください。

// // 使用例
// number型のステートを宣言 (numStateはnumber型)
// const [numState, setNumState] = useState(0);
// // setNumStateは新しい値で呼び出せる
// setNumState(3);
// // setNumStateは古いステートを新しいステートに変換する関数を渡すこともできる
// setNumState(state => state + 10);

// // 型引数を明示することも可能
// const [anotherState, setAnotherState] = useState<number | null>(null);
// setAnotherState(100);

// // エラー例
// setNumState('foobar');

// 自分の誤答
// declare function useState<T>(initialState: T): [state: T, setState: (arg: T) => T];
// 修正後
// declare function useState<T>(initialState: T): [T, (T | (arg: T) => T) => void];

// 正答
type UseStateUpdateArgument<T> = T | ((oldValue: T) => T);
declare function useState<T>(
  initialValue: T
): [T, (updator: UseStateUpdateArgument<T>) => void];