import React from 'react';
import { data } from "../restApi.json";
const Team = () => {
    return <section className='team' id='team'>
        <div className="container">
            <div className="heading-section">
                <h1>OUR TEAM</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis delectus illo fugiat ipsum. Explicabo totam quam earum doloribus repudiandae non, magni suscipit laboriosam ipsam, sunt nemo beatae eveniet nesciunt unde.</p>
            </div>
            <div className="team_container">
                {
                    data[0].team.map(element=>{
                        return(
                            <div className="card" key={element.id}>
                                <img src={element.image} alt={element.name} />
                                <h3>{element.name}</h3>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </section>
}

export default Team;