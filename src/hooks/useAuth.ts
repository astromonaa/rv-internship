import { useState, useRef, useEffect } from 'react'
import { useLazyAuthQuery, useLazyLogoutQuery, useLoginMutation, useRegistrationMutation } from '../store/api/api'
import { useActions } from './actions';
import { useNavigate } from 'react-router-dom';

export function useAuth() {
  let [registration, { data, error }] = useRegistrationMutation()
  let [login, { data: loginData, error: loginError }] = useLoginMutation()
  let [refresh, { data: refreshData, isLoading: isRefreshLoading }] = useLazyAuthQuery()
  const [logout, { data: logoutData }] = useLazyLogoutQuery()

  const { setUser, setIsAuth } = useActions()
  const navigate = useNavigate()

  const [mode, setMode] = useState('login')
  const [validEmail, setValidEmail] = useState(true)
  const [validPassword, setValidPassword] = useState(true)
  const [showPass, setShowPass] = useState(false)
  const [authError, setAuthError] = useState<{} | null>(null)

  const email = useRef<HTMLInputElement>(null)
  const password = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (data || loginData || refreshData) {
      setUser(data?.user || loginData?.user || refreshData?.user)
      setIsAuth(true)
      localStorage.setItem('rv-token', data?.accessToken! || loginData?.accessToken! || refreshData?.accessToken!)
    } else if (logoutData) {
      setUser(null)
      setIsAuth(false)
      localStorage.removeItem('rv-token')
      console.log(logoutData);
    }
  }, [data, loginData, refreshData, logoutData])

  useEffect(() => {
    setShowPass(false)
    setValidEmail(true)
    setValidPassword(true)
  }, [mode])

  useEffect(() => {
    error || loginError && setAuthError(error || loginError)
  }, [error, loginError])

  const setLoginMode = (event: React.MouseEvent<HTMLAnchorElement>, mode: string) => {
    event.preventDefault()
    setMode(mode)
    setAuthError(null)
  }

  const onChange = (changed: string) => {
    if (changed === 'email') {
      setValidEmail(true)
    } else if (changed === 'password') {
      setValidPassword(true)
    }
  }

  const handleLogin = () => {
    let valid = true;
    if (!email.current?.value.trim().length!) {
      setValidEmail(false)
      valid = false
    }
    if (showPass) {
      if (!password.current?.value.trim().length!) {
        valid = false;
        setValidPassword(false)
      }
      return valid && onLogin()
    }
    valid && setShowPass(true)
  }

  const onLogin = () => {
    if (mode === 'registration') {
      registration({
        email: email.current?.value,
        password: password.current?.value
      })
    } else {
      login({
        email: email.current?.value,
        password: password.current?.value
      })
    }
  }

  return {
    validEmail,
    validPassword,
    showPass,
    email,
    password,
    onChange,
    handleLogin,
    setShowPass,
    mode,
    setLoginMode,
    authError,
    refresh,
    logout,
    isRefreshLoading
  }
}