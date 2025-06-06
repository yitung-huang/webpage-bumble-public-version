'use client';

import { Check, X } from '@phosphor-icons/react/dist/ssr';
import { useSwiper } from 'swiper/react';
import styles from './SwiperActions.module.css';

export default function SwiperActions() {
    const swiper = useSwiper();

    return (
        <div className={styles.actions}>
            <button
                className={styles.button}
                type="button"
                onClick={() => swiper.slideNext()}
            >
                <X weight="bold" />
            </button>
            <button
                className={styles.button}
                type="button"
                onClick={() => swiper.slidePrev()}
            >
                <Check weight="bold" />
            </button>
        </div>
    );
}
