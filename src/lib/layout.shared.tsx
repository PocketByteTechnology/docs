import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Logo from './Logo';
import { Book, ExternalLink, UsersRound } from 'lucide-react';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: <Logo />,
      transparentMode: "always",
    },
    // themeSwitch: {
    //   enabled: false,
    // },
    githubUrl: 'https://github.com/PocketByteTechnology',
    links: [
      {
        icon: <Book />,
        text: 'Docs',
        url: '/docs',
        secondary: false
      },
      {
        secondary: true,
        type: 'custom',
        children: <a href="https://discord.com/invite/6gWzPWpY5w" target='_blank' className="flex gap-2 place-items-center rounded-full text-sm py-1.5 px-4 bg-indigo-600 hover:bg-indigo-700 transition text-white">Join Discord<ExternalLink size={16} /></a>
      }
    ]
  };
}
