import React from 'react';
import SocialLogin from '../Sociallogin/SocialLogin';
import SocialMedia from '../Sociallogin/SocialMedia';
import RightImage from '../Rightimage';

const RightSide = () => {
    return (
        <div>
        <SocialLogin/>
        <SocialMedia/>
        <RightImage></RightImage>
        </div>
    );
};

export default RightSide;