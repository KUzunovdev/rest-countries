
import { useRouter } from "next/router";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/BackButton.module.scss";

const BackButton = () => {
    const router = useRouter();
    
    return (
        <button onClick={() => router.push('/')} aria-label="Back button" className={styles['back-button']}>
            <FontAwesomeIcon icon={faArrowLeft} />
            Back
        </button>
    );
    }


export default BackButton;