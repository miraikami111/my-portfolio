//③About me pageの作成
import croatia03 from "../assets/Croatia03.jpg";
function Profile(){//Profileコンポーネント
    return(
        // sectionはページのひとまとまり(仕切りみたいなもの)
    <div className="layout_page">
        <section id="profile">
            <h1 className="f-hand">About me</h1>
            
             <img src={croatia03} alt="Profile photo"className="profile-photo"/>
             <h3 className="marker-rough">Job Experiences</h3>
                <ul className="profile-list">
                    <li>接客 - 客室乗務員・飲食店</li>
                    <li>農家さんのお手伝い - 高原野菜の収穫</li>
                    <li>品質確認 - 完成車</li>
                    <li>物流 - フォークリフト作業</li>
                </ul>

            <h3 className="marker-rough">Favorites</h3>
                <ul className="profile-list">
                    <li>Traveling 🌏 - 国内外</li>
                    <li>Animals 🐴🐶 - 馬・犬</li>
                    <li>Sports 🏃‍♂️🚴‍♂️ - 走ること・ cycling</li>
                </ul>

            
        </section>
    </div>
    );
}

export default Profile;// このProfileコンポーネントを外のファイルから使えるようにする
