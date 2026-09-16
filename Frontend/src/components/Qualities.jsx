import React from 'react';
import {data } from "../restApi.json";

export const Qualities = () => {
  return (
    <section className='qualities' id='qualities'>
        <div className="container">
            {
                data[0].ourQualities.map(element=> (
                    <div className="card" key={element.id}>
                        
                    </div>
                ))
            }
        </div>
    </section>
  );
};

export default Qualities;