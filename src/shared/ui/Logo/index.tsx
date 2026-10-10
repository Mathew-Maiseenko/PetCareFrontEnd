import { Image } from 'react-native'

import { styles } from './styles'

const logo = require('./assets/LogoImage.webp')

export default function Logo() {
	return <Image style={styles.image} width={169} height={169} source={logo} />
}
