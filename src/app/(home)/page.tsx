"use client"

import Image from 'next/image';
import { Accordion, Accordions } from 'fumadocs-ui/components/accordion';
import Newsletter from '@/components/Newsletter';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center flex-1">

      <div className="text-center max-w-4xl ml-auto mr-auto mt-12 md:mt-24 mb-8 px-4 md:px-0">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">The Indie Game Console for <span className='text-fd-accent-foreground'>Makers</span></h1>
        <p className="text-xl md:text-3xl text-fd-muted-foreground mb-8">Create your own games to share with the community and download a plethora of apps built by others.</p>
        <a href="https://discord.com/invite/6gWzPWpY5w" target='_blank' className="flex gap-2 place-items-center rounded-full text-lg py-2 px-4 w-min text-nowrap ml-auto mr-auto bg-indigo-600 hover:bg-indigo-700 transition text-white">Join Discord<ExternalLink size={22} /></a>
      </div>
      <div className="flex flex-wrap place-items-center ml-auto mr-auto mb-24 px-4 md:px-0">
        <Image src="/assets/PocketByteREV2Top.png" width={500} height={500} alt="PocketByte REV2 top render" />
        <Image src="/assets/PocketByteREV2Bottom.png" width={500} height={500} alt="PocketByte REV2 bottom render" />
      </div>
      {/* <div className="text-center max-w-4xl ml-auto mr-auto">
        <h1 className="text-6xl font-bold mb-4">The Indie Game Console for Makers</h1>
        <p className="text-3xl">Create your own games to share with the community and download a plethora of apps built by others.</p>
      </div> */}

      <div className='place-self-center max-w-4xl w-full mb-24 px-4 md:px-0'>
        <h2 className='text-3xl md:text-4xl font-bold text-center mb-4'>FAQ</h2>
        <Accordions type="multiple">
          <Accordion title="Do I need programming experience?">Nope! PocketByte is designed for plug-and-play. If you want to create games, our C SDK is beginner-friendly with tons of examples. Visit our docs for more info.</Accordion>
          <Accordion title="How do I get in touch?">Send us an email at contact@pocketbyte.co. We read every message! Feel free to join our Discord server as well. We may be more responsive there.</Accordion>
          <Accordion title="When can I get one?">We're still in development! Join the waitlist below to be the first to know when the pilot launches. Early supporters might even get some special perks.</Accordion>
          <Accordion title="How can I make my own game?">Visit our <Link href={"/docs"} className='text-blue-500 underline'>docs</Link> to get started with PocketByte SDK and learn how to make your first game.</Accordion>
        </Accordions>
      </div>

      <Newsletter />

      <div className='border-t border-t-fd-border'>
        <ul className='flex flex-wrap flex-col md:flex-row mt-8 justify-center gap-16 md:gap-54'>
          <li className='flex flex-col gap-2 max-w-xs place-self-center'>
            <Image src="/assets/PocketByteWordmarkGearAmber.png" alt="PocketByte" width={200} height={200} className='place-self-center md:place-self-auto' />
            <p className='text-center md:text-left'>The indie video game handheld with swappable inputs and infinite software.</p>
          </li>
          <div className='flex gap-16 place-self-center'>
            <li className=''>
              <h3 className='text-fd-muted-foreground'>Community</h3>
              <ul className='flex flex-col gap-1 mt-6'>
                <li><a href="https://www.youtube.com/@pocketbytetechnology" target='_blank'>YouTube</a></li> 
                <li><a href="https://discord.com/invite/6gWzPWpY5w" target='_blank'>Discord</a></li> 
                <li><a href="https://discord.com/invite/6gWzPWpY5w" target='_blank'>Reddit</a></li> 
                <li><a href="https://github.com/PocketByteTechnology" target='_blank'>GitHub</a></li> 
              </ul>
            </li>
            <li className=''>
              <h3 className='text-fd-muted-foreground'>Explore</h3>
                <ul className='flex flex-col gap-1 mt-6'>
                <li><Link href="/docs" target='_blank'>Docs</Link></li> 
              </ul>
            </li>
          </div>
        </ul>
        <p className='text-fd-muted-foreground text-sm my-16 text-center'>© 2026 POCKETBYTE TECHNOLOGY. Made with love in Canada.</p>
      </div>

    </div>
  );
}
