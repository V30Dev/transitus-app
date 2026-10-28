import styles from './SignUpForm.module.css'
import { useState, type ChangeEvent } from "react"



export function SignUpForm() {
	const [showPassword, setShowPassword] = useState(false)
	const [showConfirmationPassword, setShowConfirmationPassword] = useState(false)
	const [formInputs, setFormInputs] = useState({ nickname: "", email: "", password: "", passwordConfirmation: "" })

	const handleShowPassword = (inputName: string) => {
		if (inputName === "password") {
			setShowPassword(prev => !prev)
		} else if (inputName === "passwordConfirmation") {
			setShowConfirmationPassword(prev => !prev)
		}
	}

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setFormInputs(prev => ({
			...prev,
			[name]: value
		}))
	}

	const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
		e.preventDefault()
		console.log(formInputs)
	}

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<div className={styles.field_container}>
				<label htmlFor="">Your Name or Nickname</label>
				<input onChange={handleInputChange} name='nickname' type="text" placeholder='e.g., Alex Walker' value={formInputs.nickname} />
			</div>
			<div className={styles.field_container}>
				<label htmlFor="">Email Address</label>
				<input onChange={handleInputChange} name='email' type="email" placeholder='you@example.com' value={formInputs.email} />
			</div>
			<div className={styles.field_container}>
				<label htmlFor="">Password</label>
				<div className={styles.input_container}>
					<button className={styles.icon_container} onClick={() => handleShowPassword('password')} type='button'>
						{
							showPassword ? (
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10.585 10.587a2 2 0 0 0 2.829 2.828" /><path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87" /><path d="M3 3l18 18" /></svg>
							) : (
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" /></svg>
							)
						}
					</button>
					<input value={formInputs.password} onChange={handleInputChange} className={styles.password_input} name='password' type={showPassword ? "text" : "password"} placeholder='********' />
				</div>
			</div>
			<div className={styles.field_container}>
				<label htmlFor="">Confirm Password</label>
				<div className={styles.input_container}>
					<button className={styles.icon_container} onClick={() => handleShowPassword('passwordConfirmation')} type='button'>
						{
							showConfirmationPassword ? (
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10.585 10.587a2 2 0 0 0 2.829 2.828" /><path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87" /><path d="M3 3l18 18" /></svg>
							) : (
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" /></svg>
							)
						}
					</button>
					<input value={formInputs.passwordConfirmation} onChange={handleInputChange} className={styles.password_input} name='passwordConfirmation' type={showConfirmationPassword ? "text" : "password"} placeholder='********' />
				</div>
			</div>
			<a href='#'>Forgot password?</a>
			<button className={styles.submit_button}>Create Account & Begin Journey</button>
		</form>
	)
}
