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
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">Welcome to PocketByte Developer</h1>
        <p className="text-xl md:text-3xl text-fd-muted-foreground mb-8">Your one-stop-shop for PocketByte development. Find resources, tutorials, documentation, and more.</p>
        <a className='px-6 py-2 rounded-full bg-fd-foreground hover:bg-fd-foreground/85 transition text-fd-background cursor-pointer' href="/docs">Visit Docs</a>
      </div>
      <div className="flex flex-wrap place-items-center ml-auto mr-auto mb-24 px-4 md:px-0">
        <Image src="/assets/PocketByteREV2Top.png" width={500} height={500} alt="PocketByte REV2 top render" />
        <Image src="/assets/PocketByteREV2Bottom.png" width={500} height={500} alt="PocketByte REV2 bottom render" />
      </div>

      <div className='border-t border-t-fd-border'>
        <ul className='flex flex-wrap flex-col md:flex-row mt-8 justify-center gap-16 md:gap-54'>
          <li className='flex flex-col gap-2 max-w-xs place-self-center'>
            <div className='justify-items-center flex gap-2.5'>
              <Image src="/assets/PocketByteWordmarkGearAmber.png" alt="PocketByte" width={200} height={200} className='place-self-center md:place-self-auto' />
              <p className="text-2xl font-normal place-self-center text-fd-accent-foreground">Developer</p>
            </div>
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
