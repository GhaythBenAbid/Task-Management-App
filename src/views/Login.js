import { useStoreActions, useStoreState } from 'easy-peasy';
import { Alert } from 'evergreen-ui';
import { useEffect } from 'react';
import { useState } from 'react';
import { BsGoogle, BsFacebook, BsTwitch, BsBookmarkX } from 'react-icons/bs';
import { Link, Redirect } from 'react-router-dom';


const Login = () => {
    const login = useStoreActions(actions => actions.login);
    const message = useStoreState(state => state.message);
    const setMessage = useStoreActions(actions => actions.setMessage);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        setMessage({});
    } , [])  

    return (
        <div className='h-screen grid grid-cols-2'>
            
            <div className='bg-gradient-to-b from-cyan-400 to-blue-800 flex flex-col justify-center'>
                <h1 className='text-white animate-pulse font-semibold italic text-xl text-center w-3/4 mx-auto'>
                    <span>
                        <BsBookmarkX />
                    </span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam molestiae odio nobis! Aperiam alias molestiae aliquam beatae nihil fuga amet reprehenderit dignissimos omnis quibusdam inventore quidem nostrum corporis consectetur accusantium illo fugit voluptas in nam, officia fugiat laudantium asperiores. Ab quam molestiae nihil explicabo unde vel maiores mollitia deserunt dolores nobis ipsum quidem fugit, consectetur, aperiam voluptatibus harum repudiandae architecto magnam consequatur, voluptas saepe. Possimus esse dolorum cum nihil! Labore quia, ipsam culpa iusto placeat doloremque porro, cupiditate fuga quas a pariatur officia. Odit adipisci commodi quia molestias illum minima?</h1>
            </div>
            <div className='text-center flex flex-col justify-center'>
                {message.message === "User not found" ? <Alert className='w-3/4 mx-auto mb-8' title={message.message} intent='danger' /> : null}
                {message.message === "Incorrect password" ? <Alert className='w-3/4 mx-auto mb-8' title={message.message} intent='danger' /> : null}
                {message.message === "User found" ? <Alert className='w-3/4 mx-auto mb-8' title={message.message} /> : null}
                <h1 className='text-4xl font-bold text-gray-800 mb-8'>Sign in to Clever</h1>
                <div className='flex flex-row justify-center mb-8'>
                    <div className='bg-gray-100 w-16 h-16 mx-5 rounded-lg drop-shadow-sm flex flex-row justify-center items-center'>
                        <BsGoogle className=' text-gray-800 text-3xl' />
                    </div>
                    <div className='bg-gray-100 w-16 h-16 mx-5 rounded-lg drop-shadow-sm flex flex-row justify-center items-center'>
                        <BsFacebook className=' text-gray-800 text-3xl' />
                    </div>
                    <div className='bg-gray-100 w-16 h-16 mx-5 rounded-lg drop-shadow-sm flex flex-row justify-center items-center'>
                        <BsTwitch className=' text-gray-800 text-3xl' />
                    </div>
                </div>
                <h1 className='mb-8'>Or do with e-mail</h1>
                <div className='flex flex-col items-center mb-8'>
                    <input onChange={(e) => { setEmail(e.target.value); setMessage({}) }} className='appearance-none rounded-none relative block w-3/4 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-gray-100' type='text' placeholder='Email' />
                    <input onChange={(e) => setPassword(e.target.value)} className='appearance-none rounded-none relative block w-3/4 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-gray-100' type='password' placeholder='Password' />
                </div>
                <div className='flex justify-between mx-auto w-3/4 mb-8'>
                    <div className='flex flex-row'>

                        <h1 className='px-2'>Remember Me</h1>
                    </div>
                    <h1 className='text-blue-800 font-semibold'>forget password ?</h1>
                </div>

                <div className='flex mx-auto w-3/4'>
                    <button
                        onClick={() => login({ email, password })}
                        type="submit"
                        className="mr-2 group relative w-60 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Sign in
                    </button>
                    <Link to={"/register"}>
                        <button
                            type="submit"
                            className="group relative w-60 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Register
                        </button>
                    </Link>


                    {message === "User found" && <Redirect to='/Dashboard' />}
                </div>
            </div>
        </div>
    );
}

export default Login;