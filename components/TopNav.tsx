import { CalibreLogo } from './IconComponents';

export default function TopNav() {
  return (
    <section className="flex w-full justify-center py-8">
      <nav className="flex w-full max-w-6xl justify-between px-8 dark:text-slateDark-12">
        <div className="flex items-center gap-2 ">
          <CalibreLogo />
          <p className="text-white">Calibre</p>
        </div>
        <ul className="flex gap-4">
          <li>Features</li>
          <li>About</li>
          <li>Docs</li>
          <li>Downloads</li>
        </ul>
      </nav>
    </section>
  );
}
