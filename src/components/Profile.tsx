import Image from 'next/image';
import { IconWeight } from '@phosphor-icons/react';
import {
    Barbell,
    GraduationCap,
    MagnifyingGlass,
    MapPin,
    PawPrint,
    SealCheck,
    Suitcase
} from '@phosphor-icons/react/dist/ssr';
import profilePicture from '@/../public/profile-picture.png';
import photo0 from '@/../public/photo-0.png';
import photo1 from '@/../public/photo-1.png';
import photo2 from '@/../public/photo-2.png';
import photo3 from '@/../public/photo-3.png';
import photo4 from '@/../public/photo-4.png';
import photo5 from '@/../public/photo-5.png';
import styles from './Profile.module.css';

const iconStyles: { weight: IconWeight } = { weight: 'bold' };

const basicInfoPills = [
    { icon: <Barbell {...iconStyles} />, text: `Somewhat active` },
    { icon: <MagnifyingGlass {...iconStyles} />, text: `To get married` },
    { icon: <PawPrint {...iconStyles} />, text: `Has pets` }
];

const aboutMeDotPoints = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Nullam id ante dictum, mattis lorem tempus, pulvinar diam.',
    'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
];

const specialSkillsDotPoints = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Nullam id ante dictum, mattis lorem tempus, pulvinar diam.',
    'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
];

export default function Profile() {
    return (
        <div>
            <section className={styles.profileMainSection}>
                <div className={styles.profilePictureWrapper}>
                    <Image
                        className={styles.profilePhoto}
                        src={profilePicture}
                        alt="Well-dressed Thomas and his partner taking a selfie outdoors at their friends' wedding."
                        priority
                    />
                    <div className={styles.personalInfo}>
                        <h1 className={styles.name}>
                            Thomas, 31{' '}
                            <SealCheck
                                className={styles.verificationIcon}
                                weight="fill"
                            />
                        </h1>
                        <span className={styles.work}>
                            <Suitcase className={styles.mainProfileIcon} />
                            FE Dev at The Tomputer
                        </span>
                        <span className={styles.education}>
                            <GraduationCap className={styles.mainProfileIcon} />
                            University of Retro Vibes
                        </span>
                    </div>
                </div>
            </section>
            <section
                className={`${styles.section} ${styles.introductionSection}`}
            >
                <div className={styles.introduction}>
                    <h2 className={styles.sectionTitle}>About me</h2>
                    <ul className={styles.text}>
                        {aboutMeDotPoints.map((point, index) => (
                            <li key={index}>{point}</li>
                        ))}
                    </ul>
                </div>
                <div className={styles.aboutMe}>
                    <h2 className={styles.sectionTitle}>My basic info</h2>
                    <ul className={styles.basicInfoList}>
                        {basicInfoPills.map((pill, index) => (
                            <li
                                key={index}
                                className={styles.basicInfoListItem}
                            >
                                <span className={styles.basicInfoIcon}>
                                    {pill.icon}
                                </span>
                                <span className={styles.basicInfoText}>
                                    {pill.text}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
            <Image
                className={styles.photo}
                src={photo0}
                alt="Thomas and his partner holding a goose stuffed toy while wincing and pointing at two bowls of Hong Kong styled roasted goose BBQ rice in front of them."
            />
            <section className={styles.section}>
                <h2 className={styles.prompt}>What our future looks like...</h2>
                <p className={styles.promptAnswer}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam id ante dictum, mattis lorem tempus, pulvinar diam.
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas.
                </p>
            </section>
            <Image
                className={styles.photo}
                src={photo1}
                alt="Thomas, his partner and Moose taking a selfie at the coast of Victor Harbour on a cloudy day. Thomas is moving his head away while being licked by Moose."
            />
            <section className={styles.section}>
                <h2 className={styles.prompt}>
                    I knew you were the one when...
                </h2>
                <p className={styles.promptAnswer}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam id ante dictum, mattis lorem tempus, pulvinar diam.
                </p>
            </section>

            <Image
                className={styles.photo}
                src={photo2}
                alt="Thomas and his partner taking a selfie in a daisy farm - she is hiding her face behind a bunch of flowers."
            />
            <Image
                className={styles.photo}
                src={photo4}
                alt="Thomas and his partner taking a selfie at a park they visited on their first road trip, with Moose in the background, near the staircase."
            />
            <section className={styles.section}>
                <h2 className={styles.prompt}>Some of my superpowers...</h2>
                <ul className={styles.text}>
                    {specialSkillsDotPoints.map((point, index) => (
                        <li key={index}>{point}</li>
                    ))}
                </ul>
            </section>
            <Image
                className={styles.photo}
                src={photo3}
                alt="Thomas and his partner enjoying icecream in front of pastel-coloured fences next to Pizza Teca."
            />
            <section className={styles.section}>
                <h2 className={styles.prompt}>
                    I wrote you a little something...
                </h2>
                <p className={styles.promptAnswer}>
                    <i className={styles.verse}>Lorem ipsum dolor sit amet,</i>
                    <i className={`${styles.verse} ${styles.endOfVerse}`}>
                        consectetur adipiscing elit.
                    </i>
                    <i className={styles.verse}>Nullam id ante dictum,</i>
                    <i className={styles.verse}>mattis lorem tempus,</i>
                    <i className={`${styles.verse} ${styles.endOfVerse}`}>
                        pulvinar diam.
                    </i>
                    <i className={styles.verse}>
                        Pellentesque habitant morbi tristique
                    </i>
                    <i className={styles.verse}>
                        senectus et netus et malesuada
                    </i>
                    <i className={`${styles.verse} ${styles.endOfVerse}`}>
                        fames ac turpis egestas.
                    </i>

                    <i className={styles.verse}>Duis efficitur enim augue,</i>
                    <i className={`${styles.verse} ${styles.endOfVerse}`}>
                        at blandit ante viverra et.
                    </i>
                </p>
            </section>
            <Image
                className={styles.photo}
                src={photo5}
                alt="Thomas and his partner holding hands and looking at each other at a small harbour in Hong Kong during sunset."
            />
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>
                    <MapPin weight="fill" />
                    My location
                </h2>
                <p className={styles.text}>Melbourne, 0km away</p>
            </section>
        </div>
    );
}
