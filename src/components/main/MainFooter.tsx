import './MainFooter.css'
import MainLogo from "./MainLogo";

export function MainFooter() {

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
		<footer className="main_footer">
			<div className="main_footer__container">
				<MainLogo />
				<nav className='main_footer__nav'>
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
				<small>© 2025 Transitus.</small>
			</div>
		</footer>
	)
}