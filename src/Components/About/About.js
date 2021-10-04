import React from 'react';
import './About.css'

const About = () => {
    return (
        <div>
            <div className="about-banner">
                <h1 >About</h1>
            </div>
            <div className="d-flex container p-5">
                <div className="mx-5" ><h1>WHO WE ARE</h1><br />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro nam dolor sequi sit rem minus tenetur quos optio, provident rerum ut nisi reprehenderit facere aut culpa magnam nesciunt animi obcaecati voluptatem dignissimos eveniet at officia tempore. Molestiae, autem? Modi quae nihil veritatis nostrum deserunt mollitia qui rerum sequi optio vero.</p>
                </div>
                <div className="mx-5" ><h1>WHAT WE DO</h1><br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium illo fugit expedita corrupti soluta corporis debitis incidunt dolorem velit consequuntur, recusandae voluptatem reiciendis unde distinctio vitae eaque suscipit, eius modi? Sint dolorum ipsum molestias sunt velit dolor voluptatem veniam? Aut ipsam qui possimus similique ratione deleniti praesentium laudantium repudiandae id.</p>
                </div>
            </div>
        </div>
    );
};

export default About;