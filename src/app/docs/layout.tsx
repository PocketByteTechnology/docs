import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import LogoDeveloper from '@/lib/LogoDeveloper';

export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <DocsLayout tree={source.getPageTree()} {...baseOptions()} nav={{title: <LogoDeveloper />}}>
      {children}
    </DocsLayout>
  );
}
