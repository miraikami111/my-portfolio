import img11 from "../assets/img11.png";
//④作品一覧ページProject_1コンポーネント
function Project_1(){
    return(

    <section id="project_1">
        <div className="layout_page">
         <h2 className="f-hand">PROJECT_1</h2>
            
            <img src={img11} alt="kbapp img"className="kbapp"/>

  <a
    href="https://knowbuddy.vercel.app"
    target="_blank"
    rel="noopener noreferrer"
  >
    <p>URL:https://knowbuddy.vercel.app</p>
  </a>
            <h3>☆材料とお道具箱☆</h3>
            <h4>JavaScript/HTML/CSS</h4>
            <p>プログラミング言語</p>
            <p>動き・操作・反応（動的）/
              ページの構造（骨組み）/
              見た目（デザイン・色・レイアウト）</p>
            <h4>React</h4>
            <p>JavaScriptで使う、Webページの見た目（UI）を作るためのライブラリ</p>
            <h4>Vite</h4>
            <p>ビルドツール（開発サーバー + ビルド環境）</p>
            <h4>PWA</h4>
            <p>Progressive Web App（プログレッシブ・ウェブ・アプリ）
              Webサイトを「アプリのように」使えるようにする仕組み</p>
              <ul>
                <li>ホーム画面に追加できる</li>
                <li>オフラインで動く</li>
                <li>プッシュ通知が使える</li>
                <li>ネイティブアプリっぽい表示になる</li>
              </ul>
            <h4>GitHub</h4>
            <p>コードの保管庫（リポジトリ）・バージョン管理</p>
                <ul>
                <li>作ったコードを安全に保管できる</li>
                <li>どんな変更をしたか履歴が残る（コミット）</li>
                <li>オープンソースや他の人と共有できる</li>
              </ul>
            <h4>Vercel</h4>
            <p>Webアプリをインターネット上に公開するサービス</p>
              <ul>
                <li>GitHubにリンク</li>
                <li>自動でデプロイ（公開）</li>
                <li>URL取得</li>

              </ul>
               <h4>VS Code</h4>
            <p>コードを書くためのエディタ（開発環境）</p>


            

        
            
              
            
            
            
            
            
            
            <p></p>
        </div>

      
    </section>
   );

}

export default Project_1; //外部から使えるように