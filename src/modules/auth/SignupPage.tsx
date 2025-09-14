import { useState } from 'react'
import { PhoneInput } from './components/PhoneInput'
import { TextInput } from './components/TextInput'
import { RadioGroup } from './components/RadioGroup'
import { Button } from './components/Button'
import { useAuth } from './auth-context'
import { Link } from 'react-router-dom'

export function SignupPage() {
  const { requestCode } = useAuth()
  const [userType, setUserType] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const userTypeOptions = [
    { value: 'farmer', label: 'I am a Farmer', description: 'Connect with buyers and grow your business' },
    { value: 'business', label: 'I am a Business', description: 'Source quality produce from farmers' }
  ]

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert('Passwords do not match')
      return
    }
    setLoading(true)
    try { await requestCode(phone) } finally { setLoading(false) }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 sm:space-y-5">
      <div>
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">Create your account</h1>
        <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">Join Farmers Connect</p>
      </div>
      
      <RadioGroup 
        label="I am a" 
        options={userTypeOptions} 
        value={userType} 
        onChange={setUserType} 
      />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <TextInput label="First name" placeholder="e.g. Asha" value={firstName} onChange={(e)=> setFirstName((e.target as HTMLInputElement).value)} />
        <TextInput label="Last name" placeholder="e.g. Patel" value={lastName} onChange={(e)=> setLastName((e.target as HTMLInputElement).value)} />
      </div>
      
      <TextInput 
        label="Email address" 
        type="email" 
        placeholder="e.g. asha@example.com" 
        value={email} 
        onChange={(e)=> setEmail((e.target as HTMLInputElement).value)} 
      />
      
      <PhoneInput label="Phone number" value={phone} onChange={(e)=> setPhone((e.target as HTMLInputElement).value)} />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <TextInput 
          label="Password" 
          type="password" 
          placeholder="Create a password" 
          value={password} 
          onChange={(e)=> setPassword((e.target as HTMLInputElement).value)} 
        />
        <TextInput 
          label="Confirm password" 
          type="password" 
          placeholder="Confirm your password" 
          value={confirmPassword} 
          onChange={(e)=> setConfirmPassword((e.target as HTMLInputElement).value)} 
        />
      </div>
      
      <Button type="submit" className="w-full" loading={loading}>Continue</Button>
      <p className="text-sm sm:text-base text-gray-500 text-center">Already have an account? <Link to="/login" className="text-emerald-700 dark:text-emerald-400 font-medium">Login</Link></p>
    </form>
  )
}


