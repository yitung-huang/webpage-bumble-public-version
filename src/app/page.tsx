'use client';

import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import MatchedScreen from '@/components/MatchedScreen';
import OutOfMatchesScreen from '@/components/OutOfMatchesScreen';
import Profile from '@/components/Profile';
import SwiperActions from '@/components/SwiperActions';
import styles from './page.module.css';

export default function Home() {
    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <Image
                    className={styles.logo}
                    src="/logo.svg"
                    alt="Bumble logo"
                    width={160}
                    height={28}
                    priority
                />
            </header>
            <main className={styles.main}>
                <Swiper
                    effect="card"
                    grabCursor={true}
                    modules={[EffectCards, EffectFade]}
                    initialSlide={1}
                    className={styles.swiper}
                    onSlideChange={(swiper) => {
                        if (swiper.isBeginning || swiper.isEnd) {
                            swiper.allowSlideNext = false;
                            swiper.allowSlidePrev = false;
                        }
                    }}
                >
                    <SwiperSlide>
                        {({ isActive }) => (
                            <MatchedScreen isActive={isActive} />
                        )}
                    </SwiperSlide>
                    <SwiperSlide className={styles.profileCard}>
                        <Profile />
                        <SwiperActions />
                    </SwiperSlide>
                    <SwiperSlide>
                        <OutOfMatchesScreen />
                    </SwiperSlide>
                </Swiper>
            </main>
            <footer className={styles.footer}></footer>
        </div>
    );
}
