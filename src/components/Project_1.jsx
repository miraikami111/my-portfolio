import img11 from "../assets/img11.png";
import filetree01 from "../assets/filetree01.png";
// import "./Project_1.css";

function Project_1() {
  return (
    <section id="project_1">
      <div className="project-layout">
        {/* LEFT：説明だけ */}
        <div className="project-left">
          <h1 className="f-hand">PROJECT - 1</h1>
          <h2>＊カスタマイズ単語帳アプリ＊</h2>

          <h3>Features🛠️</h3>
          <ul>
            <li>機能はできるだけシンプルに。</li>
            <li>単語帳のトピックを追加・削除</li>
            <li>追加した単語トピックをリスト化(本棚)</li>
            <li>トピックごとの単語の追加・削除(Question/Answer)</li>
            <li>追加した単語をリスト化</li>
            <li>FlushCardへ追加(ON/OFF)</li>
            <li>FlushCardをクリックしたら、Answer表示</li>
            <li>前・次の画面へ飛ぶボタン</li>
            <li>警告表示（ポップ）</li>
            <li>ローカルストレージ保存</li>
          </ul>
          <br/>

         <h3>Purpose・・・❔</h3>
          <p>
            朝の通勤時間(電車に乗っている時間)の30分は勉強に充てていて、
            動画や本での学習が多かったため、帰りの電車に乗っている時間に、
            朝の振り返りができないかと考えたときに単語帳があるといいなと思ったから。
            無料で、オフラインでも使えるアプリにしたかった。
          </p>
          <br/>

          <h3>My Impression🤯</h3>
          <p>AI先生にたくさん質問して、なんとか形になった。各機能ごとに、いろんなツールを
            インストールしたり、ライブラリをいインポートしたりしていた為、不具合が出たときに、
            どこをみて修正したらいいのか、かなり混乱した。一つ直せば他のところが壊れて、大変だった。
            GitHubの使いかたを少しでも知ることができてよかった。
            レイアウトの部分は、目に見える変化があり、割と楽しみながら作業していた。
            割とシンプルな機能にしたつもりなのに、ファイルが結構多くなってしまい、正直、コードは
            あまり理解できていないことに反省。
          </p>
          
          <img src={filetree01} alt="filetree img" className="filetree01" />
        </div>

      
        <div className="project-right">
          {/* 画像 + リンク（右へ移動） */}
          <div className="project-link">
            <img src={img11} alt="kbapp img" className="kbapp" />
            <a
              href="https://knowbuddy.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-link"
            >
              URL: knowbuddy.vercel.app
            </a>
          </div>

          {/* 言語カード（右へ移動） */}
          <div className="programming_lang">
            <h4>*プログラミング言語*</h4>
            <h5>JavaScript / HTML / CSS</h5>
            <p>動き（反応）/見た目（骨組み）/デザイン（色・配置）</p>

            <h4>*ライブラリ*</h4>
            <h5>React</h5>
            <p>Webアプリを部品（コンポーネント）で作る仕組み</p>
            <p>画面を作るためのJavaScriptライブラリ</p>
          </div>
          
          {/* フロー（右のまま） */}
          <div className="project-card">
            <h4>VS Code</h4>
            <p>コードを書く場所（開発環境）</p>
          </div>
          <div className="arrow">↓ 編集</div>

          <div className="project-card">
            <h4>React + Vite</h4>
            <p>UI作成 & 高速開発</p>
          </div>
          <div className="arrow">↓ PWA化</div>

          <div className="project-card">
            <h4>PWA</h4>
            <p>アプリ化 (オフライン対応)</p>
          </div>
          <div className="arrow">↓ GitHubへコミット</div>

          <div className="project-card">
            <h4>GitHub</h4>
            <p>コード保存 & バージョン管理</p>
          </div>
          <div className="arrow">↓ 自動ビルド・デプロイ</div>

          <div className="project-card">
            <h4>Vercel</h4>
            <p>公開 & Web配信（URL発行）</p>
          </div>

          
        </div>
      </div>
    </section>
  );
}

export default Project_1;
