//③About me pageの作成
function Profile(){//Profileコンポーネント
    return(
        // sectionはページのひとまとまり(仕切りみたいなもの)
    <div className="main-container">
        <section id="profile">
            <h2 className="f-hand">About me</h2>
            
            <img src="/images/Croatia03.jpg" alt="profile photo" className="profile-photo" />

            <h3 className="marker-rough">Job experiences</h3>
            <p>接客 - 飲食店、客室乗務員</p>
            <p>農家さんのお手伝い - 高原野菜の収穫</p>
            <p>品質確認 - 工具を使用した測定</p>
            <p>物流 - フォークリフト作業</p>
            
            <h3 className="marker-rough">Like</h3>
            <p>旅行 - 国内外</p>
            <p>動物 - 馬、犬</p>
            <p>Sports - running, sycling</p>
            
        </section>
    </div>
    );
}

export default Profile;// このProfileコンポーネントを外のファイルから使えるようにする
