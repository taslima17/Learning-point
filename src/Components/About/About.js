import React from 'react';
import './About.css'

const About = () => {
    return (
        <div>
            <div className="about-banner">
                <h1 >About</h1>
            </div>
            <div className="d-flex container p-5">
                <div className="info mx-5" ><h1>WHO WE ARE</h1><br />
                    <p>For students graduating with a Bachelor’s of technology degree in computer science and engineering (CSE), a specialization or a minor in a subject like business administration, artificial intelligence, or Internet of Things can set them apart in a crowded field of recent graduates. Earning an honors distinction can also help students land a good job. However, very few students were pursuing extra credits. Conducting additional classwork for the credits required for minor programs or honors was often challenging considering the logistics related to transportation and access of University resources, both physical and human resources, after hours. The options for elective courses were limited, and it was often difficult to fit the additional courses into their schedules. </p>
                </div>
                <div className="info mx-5" ><h1>WHAT WE DO</h1><br />
                    <p>To create success & happiness for our customers & employees with our passion for technology while creating high growth opportunity of fulfilling employment thus serving humanity.With the help of our partners, we can share our expertise and resources around the world. And thus we are expanding as the home of top IT professionals. So contact us to see how you can join our global family!</p>
                </div>
            </div>
        </div>
    );
};

export default About;