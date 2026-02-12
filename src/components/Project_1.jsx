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
    KnowBuddy
  </a>
            <p>Reactで制作した、カスタマイズ単語帳アプリ</p>
            <p>単語帳(質問画面・回答画面)の追加・削除、単語の追加・削除、クイズ形式で学習できる機能</p>
            <p>オフラインでもサクサク動くようにしたかったため、ローカルストレージに保存</p>
        </div>

      
    </section>
   );

}

export default Project_1; //外部から使えるように