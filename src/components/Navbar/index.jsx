import { useNavigate } from "react-router-dom";
import styles from './Navbar.module.scss';

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className={styles.navbar}>
        <a href="#" onClick={() => navigate('/')}>Question 1</a>
        <a href="#" onClick={() => navigate('/q2')}>Question 2</a>
    </div>
  );
}

export default Navbar;
