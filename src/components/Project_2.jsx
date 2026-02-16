//⑤作品一覧ページ
// Project_２コンポーネント
function Project_2(){
    return(
    <section id="project_2">
        <div className="layout_page">
            <h2 className="f-hand">PROJECT_2</h2>

            <h3>日本地図</h3>
            <p>まだ製作途中の私の旅log - My Highlights</p>
            <p>Pythonで何か作ってみたかった</p>
            <p>自分の日本国内でのハイライト(写真追加)</p>
            <p>訪れた都道府県の色が変わる</p>

            {/* ▼ ここに Python 作品の地図を埋め込む ▼ */}
            <iframe
                src="https://miraikami111.github.io/visited_japan/"
                title="visited_japan_map"
                style={{
                    width: "100%",
                    height: "600px",
                    border: "none",
                    marginTop: "20px",
                    borderRadius: "8px"
                }}
            />
        </div>
    </section>
   );
}

export default Project_2; //外部から使えるように