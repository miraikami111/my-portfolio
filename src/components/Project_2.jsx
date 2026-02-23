//⑤作品一覧ページ
// Project_２コンポーネント
function Project_2(){
    return(
    <section id="project_2">
        <div className="layout_page">
            <h1 className="f-hand">PROJECT - 2</h1>
            <h2>＊ 日本地図・旅ログ  ＊</h2>
            {/* ▼ ここに Python 作品の地図を埋め込む ▼ */}
            <iframe
                src="https://miraikami111.github.io/visited_japan/"
                title="visited_japan_map"
                style={{
                    width: "60%",
                    height: "700px",
                    border: "none",
                    marginTop: "20px",
                    borderRadius: "8px"
                }}
            />
        </div>
        <div className="project-layout">
          {/* LEFT：説明だけ */}
          <div className="project-left">
            
  
            <h3>Features🛠️</h3>
            <ul>
                <li>GeoJSONデータを用いたインタラクティブ日本地図</li>
                <li>訪問済み都道府県の動的色変更（緑表示）</li>
                <li>ホバー時に概要表示（ツールチップ実装）</li>
                <li>クリックでアルバムモーダル表示</li>
                <li>＃タグによるキーワード検索機能</li>
                <li>一致候補の動的サジェスト表示</li>
                <li>訪問率（％表示）の自動計算機能</li>
                <li>localStorageによる状態保存</li>
            </ul>
            <br/>
  
           <h3>Purpose・・・❔</h3>
            <p>
            以前、上司からプレゼントでもらった「スクラッチすると色が変わる世界地図」を、
            デジタルで日本地図版として再現してみたいと思い制作しました。
            趣味の世界だったので、楽しみながら取り組めました。

            </p>
            <br/>
  
            <h3>My Impression🤯</h3>
            <p>今回は趣味程度ですが、インバウンド向けに日本の魅力を伝えられるようなものを
              いつかは作ってみたい。と思いました。今回は、オフラインでも動くように、できるだけ処理を軽くしたい。
              という思いがあったので、機能には限界がありましたが、もっと面白いものができそうだと思いました。
            </p>
            </div>
            
        
          <div className="project-right">
            {/* 画像 + リンク（右へ移動） */}
  
            {/* 言語カード（右へ移動） */}
            <div className="programming_lang">
              <h4>Technical Stack</h4>

<h5>■ Programming Languages</h5>
<p>
Python（地図HTML生成） / 
JavaScript（動的UI・検索機能実装） / 
HTML・CSS（レイアウト・デザイン）
</p>

<h5>■ Library / Data</h5>
<p>
Folium（Python地図描画ライブラリ）<br/>
GeoJSON（地理データ形式）<br/>
localStorage（ブラウザ保存機能）
</p>
              
            </div>
            
            {/* フロー（右のまま） */}
            <div className="project-card">
  <h4>① 設計・開発環境</h4>
  <p>
    VS Codeを用いて開発。<br/>
    GeoJSONデータを読み込み、
    Python（Folium）で日本地図のHTMLを生成。
  </p>
</div>

<div className="arrow">↓ 実装</div>

<div className="project-card">
  <h4>② フロント実装</h4>
  <p>
    生成されたHTMLにJavaScriptを追加し、
    検索機能・モーダル表示・訪問率計算などの
    動的処理を実装。
  </p>
</div>

<div className="arrow">↓ 公開</div>

<div className="project-card">
  <h4>③ バージョン管理・公開</h4>
  <p>
    Gitでソースコードを管理し、
    GitHub Pagesにて静的Webアプリとして公開。
  </p>
</div>
  
            
            
          </div>
        </div>
      </section>
    );
  }
export default Project_2; //外部から使えるように