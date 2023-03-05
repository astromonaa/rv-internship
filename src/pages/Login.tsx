import '../styles/Login.scss'
import Logo from '../assets/blue-logo.png'
import LoginInput from '../components/UI/LoginInput';
import { useAuth } from '../hooks/useAuth';

const Login = () => {
  const {email, password, validEmail, validPassword, onChange, handleLogin, showPass, mode, setLoginMode, authError} = useAuth()

  return (
    <section className="login-block">
      <div className="form m-auto">
        <img src={Logo} alt="icon" />
        <h1>Login or create account</h1>
        <label>Sign in with your work email</label>
        <LoginInput valid={validEmail} type='email' value={email} onChange={onChange} />
        {showPass && <LoginInput valid={validPassword} type='password' value={password} onChange={onChange} />}
        {authError && <small>{`${authError}`}</small>}
        <div className="form-btns">
          <button>Cancel</button>
          <button onClick={handleLogin}>Next</button>
        </div>
        {mode === 'login' &&
          <div className='text-right'>
            Don't have an account? <a href="#" onClick={e => setLoginMode(e, 'registration')}>Sign up for free.</a>
          </div>
        }
        {
          mode === 'registration' &&
          <div className='text-right'>
            Do you have an account? <a href="#" onClick={e => setLoginMode(e, 'login')}>Login</a>
          </div>
        }
      </div>
    </section>
  )
}

export default Login