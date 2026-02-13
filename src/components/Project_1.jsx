import img11 from "../assets/img11.png";

function Project_1() {
  return (
    <section id="project_1">
      <div className="project-layout">

        {/* 左半分：アプリの機能や作った理由 */}
        <div className="project-left">
          <h2>＊カスタマイズ単語帳アプリ＊</h2>
          <h3>Features🛠️</h3>
          <ul>帳
              <li>機能はできるだけシンプルに。</li>
              <li>単語帳のトピックを追加・削除</li>
              <li>追加した単語トピックをリスト化(本棚)</li>
              <li>トピックごとの単語の追加・削除(Question/Answer)</li>
              <li>追加した単語をリスト化</li>
              <li>FlushCardへ追加(ON/OFF)</li>
              <li>FlushCardをクリックしたら、Answer表示</li>
              <li>前・次の画面へ飛ぶボタン</li>
              <li>警告表示（ポップ）</li>
          </ul>

          <h3>Purpose・・・❔</h3>
          <p>
            朝の通勤時間(電車に乗っている時間)の30分は勉強に充てていて、
            動画や本での学習が多かったため、帰りの電車に乗っている時間に、
            朝の振り返りができないかと考えたときに単語帳があるといいなと思ったから。
            以前に似たようなアプリをインストールしたが、機能はシンプルなのに、課金しないと使えなかったので、
            アンインストールしたため。
            無料で、オフラインでも使えるアプリにしたかった。
            
          </p>
        </div>

        {/* 右半分：既存 Project_1 内容 */}
        <div className="project-right">

          {/* タイトル */}
          <h2 className="f-hand text-center mb-4">PROJECT_1</h2>

          {/* 画像と URL */}
          <div className="project-row">
            <div className="project-col text-center">
              <img src={img11} alt="kbapp img" className="kbapp" />
              <a
                href="https://knowbuddy.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mt-3"
              >
                URL: knowbuddy.vercel.app
              </a>
            </div>
          </div>

          {/* 材料・ツールをカード風に */}
          <div className="project-card">
            <h4>JavaScript / HTML / CSS</h4>
            <p>
              プログラミング言語<br/>
              動き・操作・反応（動的） / ページの構造（骨組み） / 見た目（デザイン・色・レイアウト）
            </p>
          </div>

          <div className="project-card">
            <h4>React</h4>
            <p>JavaScriptで使う、Webページの見た目（UI）を作るためのライブラリ</p>
          </div>

          <div className="project-card">
            <h4>Vite</h4>
            <p>ビルドツール（開発サーバー + ビルド環境）</p>
          </div>

          <div className="project-card">
            <h4>PWA</h4>
            <p>Webサイトをアプリのように使える仕組み</p>
            <ul>
              <li>ホーム画面に追加できる</li>
              <li>オフラインで動く</li>
              <li>プッシュ通知が使える</li>
              <li>ネイティブアプリっぽい表示になる</li>
            </ul>
          </div>

          <div className="project-card">
            <h4>GitHub</h4>
            <p>コードの保管庫（リポジトリ）・バージョン管理</p>
            <ul>
              <li>作ったコードを安全に保管できる</li>
              <li>どんな変更をしたか履歴が残る（コミット）</li>
              <li>オープンソースや他の人と共有できる</li>
            </ul>
          </div>

          <div className="project-card">
            <h4>Vercel</h4>
            <p>Webアプリをインターネット上に公開するサービス</p>
            <ul>
              <li>GitHubにリンク</li>
              <li>自動でデプロイ（公開）</li>
              <li>URL取得</li>
            </ul>
          </div>

          <div className="project-card">
            <h4>VS Code</h4>
            <p>コードを書くためのエディタ（開発環境）</p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Project_1;
