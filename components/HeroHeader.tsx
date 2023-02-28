import BookCoverHero from './BookCoverHero';
import { DownloadIcon, HeartIcon } from './IconComponents';

function Button(props: { text: string }) {
  return (
    <button className="flex rounded-full bg-gradient-to-b from-blueDark-9 to-blueDark-8 px-12 py-4 dark:text-slateDark-12 ">
      {props.text}
    </button>
  );
}

function PillStats(props: { text: string; Icon: JSX.Element }) {
  return (
    <div className="flex items-center gap-2 rounded-full border-2 px-6 py-5 dark:border-slateDark-8 dark:text-slateDark-12">
      {props.Icon}
      {props.text}
    </div>
  );
}

export default function HeroHeader() {
  return (
    <section className="flex w-full justify-center py-24 dark:text-slateDark-12">
      <div className="flex w-full max-w-6xl items-center gap-12 px-8">
        <div className="flex  w-full flex-col items-start">
          <h1 className="pb-8 text-4xl font-medium">The easiest way to manage your books</h1>
          <p className=" max-w-[30ch] pb-12 text-xl dark:text-slateDark-11">
            A powerful and easy-to-use digital book manager for your e-reader
          </p>
          <Button text="Install on Mac" />
          <div className="flex gap-4 pt-12">
            <PillStats text="30k likes" Icon={<HeartIcon />} />
            <PillStats text="30,000,000 installs" Icon={<DownloadIcon />} />
          </div>
        </div>
        <BookCoverHero />
      </div>
    </section>
  );
}
