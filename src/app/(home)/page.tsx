"use client"

import Image from 'next/image';
import { Accordion, Accordions } from 'fumadocs-ui/components/accordion';
import Newsletter from '@/components/Newsletter';
import Link from 'next/link';
import { ExternalLink, Quote } from 'lucide-react';

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

      {/* <div className='max-w-4xl w-full mb-24 rounded-xl place-self-center'>
        <h2 className='text-3xl md:text-4xl font-bold text-center mb-4'>Make it Yours</h2>
        <p className="text-lg md:text-2xl text-fd-muted-foreground mb-8 text-center">Customizable backplates that aren't just stylish.</p>
        <div className='flex place-items-center'>
          <Image src="/assets/PocketByteREV2Top.png" alt="PocketByte REV2 top render" width={310} height={310} className='drop-shadow-2xl drop-shadow-fd-primary-foreground' />
          <Image src="/assets/PocketByteREV2Bottom.png" alt="resin backplate" width={300} height={300} className='absolute ml-48 -z-10' />
        </div>
      </div>

      <div className='max-w-4xl w-full mb-24 rounded-xl place-self-center'>
        <h2 className='text-3xl md:text-4xl font-bold text-center mb-4'>Change it Up!</h2>
        <p className="text-lg md:text-2xl text-fd-muted-foreground mb-8 text-center">Connect a diverse variety of modules to the extension port. Swap your controls or add new features.</p>
      </div>*/}

      <div className='w-full bg-fd-primary-foreground mb-24 p-24'>
        <div className='ml-auto mr-auto w-max'>
          <Quote size={30} color='#fab81e'/>
          <p className='text-2xl italic font-light mt-4'>We made PocketByte because we're tired of AAA. <br/>Let's bring the passion back to casual gaming!</p>
        </div>
      </div>

      <div className='place-self-center max-w-4xl w-full mb-24 px-4 md:px-0'>
        <h2 className='text-3xl md:text-4xl font-bold text-center mb-4'>FAQ</h2>
        <Accordions type="multiple">
          <Accordion className="text-fd-muted-foreground" title="What can I do with PocketByte?">Play indie video games, emulate retro consoles, use it as a PDA/dumb phone, listen to MP3 music, communicate off-grid with LoRa/Meshtastic, automate your home wirelessly, learn about embedded systems, etc. PocketByte is a completely open platform meaning there is no limit to what you can do with it. Anybody can extend it with software (apps) and hardware.</Accordion>
          <Accordion className="text-fd-muted-foreground" title="I am an educator. Why should I use PocketByte with my students?">PocketByte enables your students to learn hands-on coding and electronics by building real projects that they can actually use. It builds the independance, critical thinking, and problem-solving skills needed to succeed outside of the classroom. The best part? It will make you the fun teacher!</Accordion>
          <Accordion className="text-fd-muted-foreground" title="Is it open-source?">The platform, SDK, and software will be completely open-source. The hardware schematics for the main PCB will not be available.</Accordion>
          <Accordion className="text-fd-muted-foreground" title="Is the device really portable?">Yes! While a little big for your jean pockets, PocketByte fits perfectly in your bag, purse, or cargo pockets. Bring it with you wherever you go.</Accordion>
          <Accordion className="text-fd-muted-foreground" title="When can I get one?">We're still in development! Join the waitlist below to be the first to know when the pilot launches. Early supporters might even get some special perks.</Accordion>
          <Accordion className="text-fd-muted-foreground" title="How much will it cost?">We're still in development, but expect something within the $100-$150 CAD ($70-$100 USD) range. Educators who buy in bulk may be eligible to receive a major discount (please email us). We want to make PocketByte affordable but, as a small company, we have to make some sacrifices.</Accordion>
          <Accordion className="text-fd-muted-foreground" title="Do I need programming experience?">Nope! PocketByte is designed for plug-and-play. As long as you know how to use a USB cable, you'll be fine. If you want to create games, our C SDK is beginner-friendly with tons of examples. Visit our <Link href="/docs" className='text-blue-500 underline'>docs</Link> for more info.</Accordion>
          <Accordion className="text-fd-muted-foreground" title="How can I make my own game?">Visit our <Link href={"/docs"} className='text-blue-500 underline'>docs</Link> to get started with PocketByte SDK and learn how to make your first game.</Accordion>
          <Accordion className="text-fd-muted-foreground" title="How can I make my own extension module?">Visit our <Link href="/docs" className='text-blue-500 underline'>docs</Link> to learn more about how the extension port works.</Accordion>
          <Accordion className="text-fd-muted-foreground" title="How do I get in touch?">Send us an email at <a href='mailto:contact@pocketbyte.co' className='text-fd-accent-foreground underline'>contact@pocketbyte.co</a>. We read every message! Feel free to join our Discord server as well. We may be more responsive there.</Accordion>
          <Accordion className="text-fd-muted-foreground" title="Will this be on Kickstarter?">Yes! We're launching on Kickstarter this year. Stick around if you want to receive exclusive rewards.</Accordion>
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
