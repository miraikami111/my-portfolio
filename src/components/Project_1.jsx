import img11 from "../assets/img11.png";
import filetree01 from "../assets/filetree01.png";

function Project_1() {
  return (
    <section id="project_1">
      <div className="project-layout">

        {/* アプリの機能・目的 */}
        <div className="project-left">
          <h2>＊カスタマイズ単語帳アプリ＊</h2>
          <h3>Features🛠️</h3>
          <ul>
            <li>機能はできるだけシンプルに。</li>
            <li>単語帳のトピックを追加・削除</li>
            <li>追加したデータをローカルに保存(デバイスごとに保存)</li>
            <li>追加した単語トピックをリスト化(本棚)</li>
            <li>トピックごとの単語の追加・削除(Question/Answer)</li>
            <li>追加した単語をリスト化</li>
            <li>FlushCardへ追加(ON/OFF)</li>
            <li>FlushCardをクリックしたら、Answer表示</li>
            <li>前・次の画面へ飛ぶボタン</li>
            <li>警告表示（ポップ）</li>
          </ul>
          <br />
          <br />
          <h3>Purpose・・・❔</h3>
          <p>
            朝の通勤時間(電車に乗っている時間)の30分は勉強に充てていて、
            動画や本での学習が多かったため、帰りの電車に乗っている時間に、
            朝の振り返りができないかと考えたときに単語帳があるといいなと思ったから。
            無料で、オフラインでも使えるアプリにしたかった。
          </p>
        </div>
            {/* 空行 */}
          <br /> 
          <br />

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

            {/* 空行 */}
            <br />
            <br />
        {/* カードフロー */}
        <div className="project-right">

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
          
          <img  src={filetree01} alt="filetree img" className="filetree01" />
          
         

        </div>
      </div>
    </section>
  );
}

export default Project_1;
