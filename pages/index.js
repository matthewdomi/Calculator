import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Index_component from '../components/indexComponents/IndexComponent'
import LayoutComponent from '../components/layout/LayoutComponent'

export const Home = () => {
  return (
    <LayoutComponent>
    <div className={styles.container}>
        <Index_component />
    </div>
    </LayoutComponent>
  )
}
export default Home