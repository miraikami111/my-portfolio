import pinkPc from "../assets/pink_pc.png";

function Skills() {
  return (
    <div className="layout_page">
      <section id="skills">
        <h2 className="f-hand">My Skills and Goals</h2>
        <img src={pinkPc} alt="myskills" className="pink_pc" />
                   
        <h3 className="marker-rough">Learned(Basic IT)</h3>
        <p>Python/Java/JavaScript/CSS/HTML</p>

        <p>Django/BootStrap</p>

        <h3 className="marker-rough">その他</h3>
        <p>フォークリフト操作スキル</p>
        <p>英会話日常会話以上</p>
        <p>体力はたぶんある方</p>

        <h3 className="marker-rough">2026年の目標</h3>
        <p>Python 3級取得 目指す…</p>
        <p>基本情報技術者検定取得 目指す…</p>
        <p>TOEIC 730点目指す…</p>
        <p>Half Marathon 完走</p>
      </section>
    </div>
  );
}

export default Skills;