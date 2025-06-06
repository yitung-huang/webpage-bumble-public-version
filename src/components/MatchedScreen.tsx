import Image from 'next/image';
import { CheckCircle } from '@phosphor-icons/react/dist/ssr';
import Me from '@/../public/me.png';
import MyPartner from '@/../public/myPartner.png';
import styles from './MatchedScreen.module.css';

type MatchedScreenProps = {
    isActive: boolean;
};

function getClassName(classname: string, isActive: boolean) {
    return `${classname} ${isActive ? styles.active : styles.hidden}`;
}

export default function MatchedScreen(props: MatchedScreenProps) {
    const { isActive } = props;
    return (
        <div className={getClassName(styles.matchedScreen, isActive)}>
            <CheckCircle
                className={getClassName(styles.checkIcon, isActive)}
                weight="fill"
            />
            <h2 className={getClassName(styles.title, isActive)}>
                {"We're engaged!"}
            </h2>
            <p className={getClassName(styles.hashtag, isActive)}>
                #shesaidyes
            </p>
            <div className={getClassName(styles.imageWrapper, isActive)}>
                <Image
                    className={getClassName(
                        `${styles.profile} ${styles.me}`,
                        isActive
                    )}
                    src={Me}
                    alt="Thomas wearing a blue shirt and posing his hands like a T-rex while wearing a Rex (from Toy Story) headband."
                    width="150"
                    height="150"
                />
                <Image
                    className={getClassName(
                        `${styles.profile} ${styles.myPartner}`,
                        isActive
                    )}
                    src={MyPartner}
                    alt="My partner smiling happily at the camera while holder her phone and wearing a peach-coloured summer top."
                    width="150"
                    height="150"
                />
            </div>
            <p className={getClassName(styles.paragraph, isActive)}>
                {"Hooray! I can't wait to marry you!"}
            </p>
        </div>
    );
}
