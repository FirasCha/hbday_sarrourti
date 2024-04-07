import React from 'react';
import './style.css';
import box from './giftBox.gif';

const MenuHappybirthday = () => {
    return (
        <div className="container">
            <div className="card">
                <div className="inside">
                    <h1>Happy Birthday🎉</h1>
                    <h3>My dear pretty Sarsour, may god bless you with abundant joy on your birthday and always! 🎊<br />
                        Thank you for always being by my side and having my back.💖<br/>
                        Sending you an infinite amount of love, joy, and happiness on your birthday!🎂<br/>
                        Let's click this box after reading <br/><a href="/messagebirthday"><img src={box} width={60} alt="loading..." />   </a>
                    </h3>
                </div>
            </div>
        </div>
      )
};

export default MenuHappybirthday;