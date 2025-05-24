import React from 'react';
import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoTwitter } from "react-icons/io";
import { FiInstagram } from "react-icons/fi";


const SocialMedia = () => {
    return (
        <div>
            <h1 className='mt-[30px] mb-[20px] text-xl font-semibold'>Find Us On</h1>
              <div className="flex  flex-col justify-start  join  join-vertical">
  <button className="btn join-item pl-2 p-6 justify-start"><TiSocialFacebook className='text-blue-800 w-7 text-2xl' /> Facebook</button>
  <button className="btn join-item pl-2 p-6 justify-start"><IoLogoTwitter className='text-blue-600 w-7 text-2xl' /> Twitter</button>
  <button className="btn join-item pl-2 p-6 justify-start"><FiInstagram className='w-7 text-2xl text-rose-500' /> Instagram</button>
</div>
        </div>
    );
};

export default SocialMedia;