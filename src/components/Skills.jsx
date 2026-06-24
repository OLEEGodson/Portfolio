import {skills} from "../data/Portfolio"

function Skills(){
    return(
        <section id="skills" className="section skills">
            <div className="container">
                <p className="section__label">Skills</p>
                <h2 className="section__heading">What I work with</h2>

                <div className="skills__grid">
                    {skills.map((group) =>(
                        <div key={group.category} className="skills__group">
                            <h3 className="skills__category">{group.category}</h3>
                            <ul className="skills_list">
                                {group.items.map((item) => (
                                    <li key={item} className="skills__item">
                                        <span className="skills__bullet"/>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;