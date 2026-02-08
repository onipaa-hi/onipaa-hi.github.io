'use strict';
const userNameInput = document.getElementById('user-name');
const dailypastaButton = document.getElementById('dailypasta');
const resultDivision = document.getElementById('result-area');

dailypastaButton.addEventListener(
  'click',
  () => {
    const userName = userNameInput.value;
    if (userName.length === 0) {
      // 名前が空の時は処理を終了する
      return;
    }

    // パスタ表示エリアの作成
    resultDivision.innerText = '';
    
  // headerDivision の作成
  const headerDivision = document.createElement('div');
  headerDivision.setAttribute('class', 'card-header text-bg-primary');
  headerDivision.innerText = 'おすすめ';

  // bodyDivision の作成
  const bodyDivision = document.createElement('div');
  bodyDivision.setAttribute('class', 'card-body');

  const paragraph = document.createElement('p');
  paragraph.setAttribute('class', 'card-text');
  const result = dailypasta(userName);
  paragraph.innerText = result;
  bodyDivision.appendChild(paragraph);

  // resultDivision に Bootstrap のスタイルを適用する
  resultDivision.setAttribute('class', 'card');

  // headerDivision と bodyDivision を resultDivision に差し込む
  resultDivision.appendChild(headerDivision);
  resultDivision.appendChild(bodyDivision);
  }
);

userNameInput.addEventListener(
  'keydown',
  event => {
    if(event.code === 'Enter') {
      dailypastaButton.dispatchEvent(new Event('click'))
    }
  }
)

const answers = [
  '###userName###のおすすめランチは、ぺペロンチーノです。',
  '申し訳ありません。###userName###は、休業です。',
  '###userName###のおすすめランチは、ミートソースです。',
  '###userName###のおすすめランチは、ナポリタンです。',
  '###userName###のおすすめランチは、キャベツとあさりのスパゲッティです。',
  '###userName###のおすすめランチは、カルボナーラです。',
  '###userName###のおすすめランチは、たらこパスタです。',
];

/**
 * 名前の文字列を渡すとパスタを返す関数
 * @param {string} userName ユーザの名前
 * @return {string} パスタ
 */
function dailypasta(userName) {
  // 全文字のコード番号を取得してそれを足し合わせる
  let sumOfCharCode = 0;
  for (let i = 0; i < userName.length; i++) {
    sumOfCharCode = sumOfCharCode + userName.charCodeAt(i);
  }

  // 文字のコード番号の合計を回答の数で割って添字の数値を求める
  const index = sumOfCharCode % answers.length;
  let result = answers[index];

  result = result.replaceAll('###userName###', userName);
  return result;
}

