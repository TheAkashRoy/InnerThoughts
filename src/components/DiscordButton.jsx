import React from 'react';
import { FaDiscord } from 'react-icons/fa';

const DiscordButton = () => {
  const discordLink = 'https://your-discord-link'; // Replace with your actual Discord link

  const openDiscord = () => {
    window.open(discordLink, '_blank');
  };

  return (
    <button
      className='flex items-center bg-blue-500 dark:text-white rounded-full px-6 py-3 focus:outline-none hover:bg-blue-600 text-lg font-bold'
      onClick={openDiscord}
    >
      <FaDiscord className='mr-2 text-2xl' />
      Join Our Community
    </button>
  );
};

export default DiscordButton;
