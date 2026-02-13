//③About me pageの作成
import croatia03 from "../assets/Croatia03.jpg";
function Profile(){//Profileコンポーネント
    return(
        // sectionはページのひとまとまり(仕切りみたいなもの)
    <div className="layout_page">
        <section id="profile">
            <h2 className="f-hand">About me</h2>
            
             <img src={croatia03} alt="Profile photo"className="profile-photo"/>
            <h3 className="marker-rough">Job experiences</h3>
            <p>接客 - 飲食店、客室乗務員</p>
            <p>農家さんのお手伝い - 高原野菜の収穫</p>
            <p>品質確認 - 完成車</p>
            <p>物流 - フォークリフト作業</p>
            
            <h3 className="marker-rough">Like</h3>
            <p>Traveling - 国内外</p>
            <p>Animals - 馬、犬</p>
            <p>Sports - 走ること(中距離),cycling</p>
            
        </section>
    </div>
    );
}

export default Profile;// このProfileコンポーネントを外のファイルから使えるようにする
