import { MapPinArea } from '@phosphor-icons/react';
import styles from './OutOfMatchesScreen.module.css';

export default function OutOfMatchesScreen() {
    return (
        <div className={styles.outOfMatchesScreen}>
            <MapPinArea className={styles.icon} weight="fill" />
            <h2 className={styles.title}>{"That's everyone!"}</h2>
            <p className={styles.paragraph}>
                {"You've seen all the people nearby."}
            </p>
            <p className={styles.paragraph}>
                {'Come back and check again later.'}
            </p>
        </div>
    );
}
