import styles from './MainFooter.module.css'
import MainLogo from "./MainLogo";

interface Props {
	showNav?: boolean
}

export function MainFooter({ showNav = true }: Props) {

	const MENU = [
		{
			label: "The Path",
			link: "/",
		},
		{
			label: "Journal",
			link: "/journal",
		},
		{
			label: "Trial Point",
			link: "/trial-point",
		},
		{
			label: "Codex",
			link: "/codex",
		},
	];

	return (
		<footer className={styles.main_footer}>
			<div className={styles.main_footer__container}>
				<MainLogo />
				{
					showNav && (
						<nav className={styles.main_footer__nav}>
							{MENU.map(el => (
								<a
									key={el.label}
									href={el.link}
								>
									<small>
										{el.label}
									</small>
								</a>
							))}
						</nav>
					)
				}

				<small>© 2025 Transitus.</small>
			</div>
		</footer>
	)
}