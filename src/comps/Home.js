import React from 'react';

import Header from './Header';

const Home = () => {
    const alert = () => {
        window.alert(`You shall not pass!`)
    }
    return(
        <>
            <Header />
            <section className='main-section'>
                <div className="main-wrapper">
                    <div className="flex-text-container">
                        <h4>Hello</h4>
                        <h1>I'm <span>Giorgi</span> Sanodze</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, quam. Voluptatibus, vero nemo iste fuga sint vitae sunt, repellat voluptatum reprehenderit fugiat nobis consectetur alias laboriosam esse sed quisquam totam.</p>
                        <button onClick={alert}>Download CV</button>
                    </div>
                    <div className="flex-image-container">
                    <svg xmlns="http://www.w3.org/2000/svg" width="429.303" height="538.423" viewBox="0 0 429.303 538.423">
                        <g id="Group_1" data-name="Group 1" transform="translate(-1158.009 -322)">
                            <g id="Ellipse_2" data-name="Ellipse 2" transform="translate(1289 322)" fill="none" stroke="#fff" stroke-width="3">
                            <circle cx="120.5" cy="120.5" r="120.5" stroke="none"/>
                            <circle cx="120.5" cy="120.5" r="119" fill="none"/>
                            </g>
                            <path id="Path_1" data-name="Path 1" d="M1229.963,360.121c103.809-6.292,154.141,0,154.141,0" transform="translate(103.273 51.423)" fill="none" stroke="#fff" stroke-width="2"/>
                            <path id="Path_2" data-name="Path 2" d="M1272.67,367.857s-21.25,26.739-19.595,35.652,26.214,0,26.214,0" transform="translate(136.783 66.755)" fill="none" stroke="#fff" stroke-width="2"/>
                            <path id="Path_3" data-name="Path 3" d="M1233.806,393.05s27.787,20.972,60.818,20.972,71.3-20.972,71.3-20.972" transform="translate(108.867 103.428)" fill="none" stroke="#fff" stroke-width="2"/>
                            <path id="Path_4" data-name="Path 4" d="M1359.926,415.294s8.861,42.53-35.442,81.516-92.149,24.809-157.717,109.87,306.573,104.554,306.573,104.554" transform="translate(0 135.81)" fill="none" stroke="#fff" stroke-width="2"/>
                            <path id="Path_5" data-name="Path 5" d="M1397.581,415.294s-10.633,42.53,5.316,83.289,99.238,42.53,108.1,63.8,8.861,74.428,0,83.289-304.8,77.972-304.8,77.972" transform="translate(68.672 135.81)" fill="none" stroke="#fff" stroke-width="2"/>
                        </g>
                    </svg>
                    </div>
                </div>
                <footer>
                    <div className="social-links">
                        <a href="https://www.facebook.com/" class="fa fa-facebook"></a>
                        <a href="https://twitter.com/" class="fa fa-twitter"></a>
                        <a href="https://www.instagram.com/" class="fa fa-instagram"></a>
                        <a href="https://github.com/sanodzegg" class="fa fa-github"></a>
                        <a href="https://www.linkedin.com/in/giorgi-sanodze-a6002821a/" class="fa fa-linkedin"></a>
                    </div>
                    <div className="contact-info">
                        <p>@: giorgi.sanodze.1@btu.edu.ge</p>
                        <p>#: +995 123 456</p>
                    </div>
                </footer>
            </section>
        </>
    );
}

export default Home;