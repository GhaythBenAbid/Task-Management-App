import { useStoreActions, useStoreState } from 'easy-peasy';
import { Alert } from 'evergreen-ui';
import { useState } from 'react';
import {  BsBookmarkX } from 'react-icons/bs';
import { Link, Redirect } from 'react-router-dom';



const Register = () => {
    const register = useStoreActions(actions => actions.register);
    const message = useStoreState(state => state.message);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    return (
        <div className='h-screen grid grid-cols-2'>
            <div className='text-center flex flex-col justify-center'>
                
                <h1 className='text-4xl font-bold text-gray-800 mb-8'>Register to Clever</h1>
                <div className='flex flex-row items-center justify-center mb-8'>
                    <div className='w-32 h-px mx-5 bg-black'></div>
                    <h1>Register now</h1>
                    <div className='w-32 h-px mx-5 bg-black'></div>

                </div>
                <div className='flex flex-col items-center mb-8'>
                    <input onChange={(e) => setUsername(e.target.value) } className='appearance-none rounded-none relative block w-3/4 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-gray-100' type='text' placeholder='Username' />
                    <input onChange={(e) => setEmail(e.target.value) } className='appearance-none rounded-none relative block w-3/4 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-gray-100' type='text' placeholder='Email' />
                    <input onChange={(e) => setPassword(e.target.value)} className='appearance-none rounded-none relative block w-3/4 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-gray-100' type='password' placeholder='Password' />
                </div>

                <div className='flex flex-row items-center justify-between mx-auto w-3/4'>
                    <button
                        onClick={() => register({ username , email, password })}
                        type="submit"
                        className="mr-2 group relative w-60 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Register
                    </button>
                    <Link to={'/login'} className='text-indigo-600 hover:text-indigo-700'>
                    <h1 className='text-lg text-blue-800'>Already have an account</h1>
                    </Link>

                </div>
                {message.message == "User created!" ? <Redirect to='/login' /> : null}


            </div>
            <div className='bg-gradient-to-b from-cyan-400 to-blue-800 flex flex-col justify-center'>
                <h1 className='text-white animate-pulse font-semibold italic text-xl text-center w-3/4 mx-auto'>
                    <span>
                        <BsBookmarkX />
                    </span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam molestiae odio nobis! Aperiam alias molestiae aliquam beatae nihil fuga amet reprehenderit dignissimos omnis quibusdam inventore quidem nostrum corporis consectetur accusantium illo fugit voluptas in nam, officia fugiat laudantium asperiores. Ab quam molestiae nihil explicabo unde vel maiores mollitia deserunt dolores nobis ipsum quidem fugit, consectetur, aperiam voluptatibus harum repudiandae architecto magnam consequatur, voluptas saepe. Possimus esse dolorum cum nihil! Labore quia, ipsam culpa iusto placeat doloremque porro, cupiditate fuga quas a pariatur officia. Odit adipisci commodi quia molestias illum minima?</h1>
            </div>
        </div>
    );
}

export default Register;