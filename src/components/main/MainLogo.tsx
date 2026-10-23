import styles from './MainLogo.module.css'
import LOGO from "/transitus.png";

interface MainLogoProps {
	showIcon?: boolean
}

export function MainLogo({ showIcon = false }: MainLogoProps) {
	return (
		<div className={styles.main_logo}>
			{showIcon && <img src={LOGO} alt="Transitus logo" />}
			<span>TRANSITUS</span>
		</div>
	)
}

export default MainLogo