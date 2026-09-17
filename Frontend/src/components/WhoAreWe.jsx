import React from 'react'
import { data } from "../restApi.json"
export const WhoAreWe = () => {
    return (
        <section className='who_are_we' id='who_are_we'>
            <div className="container">
                <div className="text_banner">
                    {
                        data[0].who_we_are.map(element => {
                            return (
                                <div className="card" key={element.id}>

                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}
