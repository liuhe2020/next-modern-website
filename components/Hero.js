import Image from 'next/image';
import styles from '../styles/styles';
import { discount, robot } from '../assets';

export default function Hero() {
  return (
    <section
      id='home'
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <h2 className={`text-7xl ${styles.padding}`}>
        I am what a modern website should look like and perform. The dog's
        bollocks as my maker calls me.
      </h2>
    </section>
  );
}
