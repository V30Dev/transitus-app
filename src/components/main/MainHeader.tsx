import { useState } from "react";
import styles from "./MainHeader.module.css";
import LOGO from "/transitus.png";
import MainLogo from "./MainLogo";

interface Props {
	showNav?: boolean
}

export function MainHeader({ showNav = true }: Props) {
	const [showSidebar, setShowSidebar] = useState<boolean>(false)
	const relativeRoute = window.location.pathname;

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

	const handleShowSidebar = () => {
		console.log(showSidebar)
		setShowSidebar(prev => !prev)
	}


	return (
		<header className={styles.main_header}>
			<div className={styles.main_header__container}>
				<div className={styles.main_header__hamburguer} onClick={handleShowSidebar}>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l16 0" /></svg>
				</div>
				<MainLogo showIcon={true} />

				{
					showNav && (
						<>
							<nav className={styles.main_header__nav}>
								{MENU.map((el) => (
									<a
										key={el.label}
										className={el.link === relativeRoute ? styles.active : ""}
										href={el.link}
									>
										{el.label}
									</a>
								))}
							</nav>

							<div className={styles.main_header__user_card}>
								<div>
									<span>Mindful Nomad</span>
									<span>18-Day Streak</span>
								</div>
								<img src={LOGO} alt="avatar usuario" />
							</div>
						</>
					)
				}
			</div>
		</header>
	);
}
