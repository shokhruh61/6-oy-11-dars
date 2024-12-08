import React, { useState } from 'react';
import { backUr } from '../axios';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Iconlarni import qildik

function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showRePassword, setShowRePassword] = useState(false);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    function validate() {
        if (!username.trim()) {
            alert("Ismingizni kiriting!");
            return false;
        }

        if (!email.trim()) {
            alert("Emailingizni kiriting!");
            return false;
        }

        if (!password.trim()) {
            alert("Parolingizni kiriting!");
            return false;
        }

        if (!rePassword.trim()) {
            alert("Parolni takrorlang!");
            return false;
        }

        if (password !== rePassword) {
            alert("Parollar bir-biriga mos kelmayapti!");
            return false;
        }

        return true;
    }

    function handleRegister(event) {
        event.preventDefault();
        const isValid = validate();
        if (!isValid) return;

        const user = {
            username,
            email,
            password
        };
        setLoading(true);

        backUr.post("auth/signup", user, {
            headers: {
                'Content-type': "application/json"
            }
        })
            .then(response => {
                if (response.status === 200) {
                    alert(response.data.message);
                    navigate('/login');
                    return;
                }
                if (response.data.message === "User registered successfully") {
                    navigate('/login');
                }
            })
            .catch(error => {
                if (error.response && error.response.status === 400) {
                    alert(error.response.data.message);
                    return;
                }
            })
            .finally(() => { setLoading(false); });
    }

    return (
        <div>
            <form
                className='max-w-[600px] mx-auto mt-[60px] p-4 text-center border rounded-md border-blue-700 shadow-2xl bg-white'
                onSubmit={handleRegister}
            >
                {/* Username Input */}
                <input
                    className='mt-9 w-[90%] items-center border border-gray-500 p-3 rounded-md'
                    type="text"
                    value={username}
                    onChange={(e) => { setUsername(e.target.value); }}
                    placeholder='Ismingizni kiriting'
                />

                {/* Email Input */}
                <input
                    className='mt-9 w-[90%] items-center border border-gray-500 p-3 rounded-md'
                    type="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); }}
                    placeholder='Emailingizni kiriting'
                />

                {/* Password Input */}
                <div className='mt-5 relative'>
                    <input
                        className='w-[90%] items-center border border-gray-500 p-3 rounded-md'
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => { setPassword(e.target.value); }}
                        placeholder='Parolingizni kiriting'
                    />
                    <button
                        type="button"
                        className='absolute right-2 top-2 text-sm text-blue-500 cursor-pointer'
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <FaEyeSlash /> : <FaEye />} {/* Icon qo'shildi */}
                    </button>
                </div>

                {/* RePassword Input */}
                <div className='mt-5 relative'>
                    <input
                        className='w-[90%] items-center border border-gray-500 p-3 rounded-md'
                        type={showRePassword ? "text" : "password"}
                        value={rePassword}
                        onChange={(e) => { setRePassword(e.target.value); }}
                        placeholder='Parolni takrorlang'
                    />
                    <button
                        type="button"
                        className='absolute right-2 top-2 text-sm text-blue-500 cursor-pointer'
                        onClick={() => setShowRePassword(!showRePassword)}
                    >
                        {showRePassword ? <FaEyeSlash /> : <FaEye />} {/* Icon qo'shildi */}
                    </button>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className='border w-[90%] bg-blue-500 rounded-md text-white py-2 px-2 mb-4 transform active:scale-[0.95]'
                    disabled={loading}
                >
                    {loading ? "LOADING..." : "REGISTER"}
                </button>
                <br />
                <Link to='/Login'>login page ga o'tish</Link>
            </form>
        </div>
    );
}

export default Register;