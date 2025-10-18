import React from 'react';
import { FaSquareGithub } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    return (
        <div>
            <h2>Login With</h2>
            <div className='space-y-3'>
        <button className=' btn w-full btn-outline btn-secondary'> <FcGoogle size={24}/>Login with Google</button>
        <button className=' btn w-full btn-outline btn-primary'><FaSquareGithub size={24}/> Login with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;