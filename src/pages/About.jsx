import React from 'react';
import DiscordButton from '../components/DiscordButton';

export default function About() {
  return (
    <div className='py-20 px-4 max-w-6xl mx-auto flex flex-col items-center'>
      <h1 className='text-4xl font-extrabold mb-8 dark:text-white'>
        Welcome to Inner Thoughts
      </h1>
      <p className='mb-6 text-2xl  dark:text-white leading-7'>
        At MIND, we redefine the real estate experience, offering a unique blend of expertise, innovation, and personalized service. Our mission is to assist clients in making informed decisions about their real estate journey, whether buying, selling, or renting properties.
      </p>
      <p className='mb-6 text-2xl  dark:text-white leading-7'>
      M.I.N.D. is a compassionate and understanding AI chatbot designed to engage users in meaningful conversations by employing advanced natural language processing. This ensures personalized and empathetic interactions that adapt to individual emotions, providing a unique and supportive experience. The app offers a diverse range of activities and exercises tailored for various aspects of mental well-being, including guided mindfulness sessions and mood-tracking exercises. Users can utilize the personal space feature to share their thoughts, create a private journal, and join a vibrant online community for mutual support and encouragement. M.I.N.D. aims to be more than just an app; it aspires to be a trusted companion on the journey toward improved mental health.      </p>
      {/* <p className='mb-6 text-2xl  text-white leading-7'>
        Our dedicated agents bring a wealth of experience to the table, ensuring that your real estate goals are not just met but exceeded. We understand that each property transaction is unique, and we tailor our approach to suit your individual needs, making the process seamless and enjoyable.
      </p>
      <p className='mb-6 text-2xl  text-white leading-7'>
        MIND believes in the power of personalized service, and our commitment goes beyond transactions; it extends to building lasting relationships. We pride ourselves on being your trusted partner in your real estate endeavors, providing support and guidance every step of the way.
      </p> */}
      <DiscordButton />
    </div>
  );
}
