import styles from './SignIn.module.css'
import { MainFooter } from "../components/main/MainFooter";
import { MainHeader } from "../components/main/MainHeader";
import { SignInForm } from '../components/forms/SignInForm';

export function SignIn() {
	return (
		<>
			<MainHeader showNav={false} />
			<main className="main_page_container">
				<section className={styles.sign_in}>
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
						<div className={styles.card_icon}>
							<svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
								<path d="M12 2L13.8 8.8L20.6 7L15.8 12L20.6 17L13.8 15.2L12 22L10.2 15.2L3.4 17L8.2 12L3.4 7L10.2 8.8L12 2Z" fill="currentColor" fillOpacity="0.15" strokeLinecap="round" strokeLinejoin="round"></path>
							</svg>
						</div>
						<span className={styles.span}>Welcome back</span>
						<h1>Sign In to Transitus</h1>
						<p>Log back in to track today's habits and keep your 40-day momentum going.</p>
						<SignInForm />
						<p>Don't have an account yet? <a href='#'>Start your 40-day challenge →</a></p>
					</div>
				</section>
			</main>
			<MainFooter showNav={false} />
		</>
	)
}