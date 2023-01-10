import { useState } from "react"
import styles from '../styles/ProgressBar.module.scss'

const ProgressBar = ({done}) => {
	const [style, setStyle] = useState({});
	
	setTimeout(() => {
		const newStyle = {
			opacity: 1,
         width: `${done}%`

		}
		
		setStyle(newStyle);
	}, 200);
	
	return (
      <div className={styles.progress}>
         <div className={styles.progressDone} style={style}>
			
			</div>
		</div>
	)
}

export default ProgressBar