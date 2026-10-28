import styles from './SignUp.module.css'
import { MainFooter } from "../components/main/MainFooter";
import { MainHeader } from "../components/main/MainHeader";
import { SignUpForm } from '../components/forms/SignUpForm';

export function SignUp() {
	return (
		<>
			<MainHeader showNav={false} />
			<main className="main_page_container">
				<section className={styles.sign_up}>
					<div className={styles.background_svg}>
						<svg fill="none" stroke="currentColor" strokeWidth="0.3" viewBox="0 0 100 100">
							<circle cx="50" cy="50" r="48" strokeDasharray="1 3"></circle>
							<circle cx="50" cy="50" r="36"></circle>
							<circle cx="50" cy="50" r="22" strokeDasharray="2 4"></circle>
							<line x1="50" x2="50" y1="2" y2="98"></line>
							<line x1="2" x2="98" y1="50" y2="50"></line>
							<line strokeDasharray="1 4" x1="16" x2="84" y1="16" y2="84"></line>
							<line strokeDasharray="1 4" x1="84" x2="16" y1="16" y2="84"></line>
						</svg>
					</div>
					<div className={styles.card}>
						<h1>Start Your 40-Day Journey</h1>
						<p>A focused, distraction-free program to build real habits and reset your mind.</p>
						<SignUpForm />
						<p>Already have an account? <a href='#'>Sign In →</a></p>
					</div>
				</section>
			</main>
			<MainFooter showNav={false} />
		</>
	)
}