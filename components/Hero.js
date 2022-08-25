import Image from 'next/image';
import styles from '../styles/styles';
import { discount, robot } from '../assets';

export default function Hero() {
  return (
    <section id='home' className={`flex md:flex-row flex-col my-10`}>
      <h2 className={`text-4xl font-medium my-5`}>
        This is what a modern website should look like and perform. The top
        dog's bollocks as my maker calls it.
      </h2>
      <div className='h-[320px] my-10'>
        <video
          src='/hero.mp4'
          autoPlay
          loop
          muted
          className='h-full object-cover'
        />
      </div>
    </section>
  );
}
