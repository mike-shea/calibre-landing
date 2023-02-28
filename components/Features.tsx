import { IconComponentType, SyncIcon, DownloadIcon, MobileMagicIcon } from './IconComponents';
import Image from 'next/image';

const featuresArray = [
  {
    imgSrc: '/assets/feature-convert.png',
    title: 'Easily manage your library',
    desc: 'Keep your library organized. Add books, edit existing metadata, and much more.',
    icon: SyncIcon
  },
  {
    imgSrc: '/assets/feature-icons.png',
    title: 'Sync across all devices',
    desc: 'Access your library from any device without needing to transfer files manually.',
    icon: MobileMagicIcon
  },
  {
    imgSrc: '/assets/feature-filter.png',
    title: 'Powerful search and filter',
    desc: 'Advanced search and filter options to quickly find the perfect book to read.',
    icon: DownloadIcon
  }
];

function Block(props: { imgSrc: string; title: string; desc: string; icon: IconComponentType }) {
  return (
    <div className="flex w-full max-w-xs flex-col gap-12 rounded-xl border border-blue-8 bg-blueDark-6/20 py-4 px-4 text-white">
      <div className="relative flex h-24 w-full">
        <Image alt="convert" objectFit="cover" src={props.imgSrc} layout="fill" />
      </div>
      <div className="flex items-start gap-2">
        <props.icon classGroup="w-full w-7 mt-1" className="fill-white" />

        <div className="flex w-full flex-col gap-1 ">
          <p className="">{props.title}</p>
          <p className="text-sm text-blue-6">{props.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default function FeaturesSection() {
  return (
    <section className="flex w-full flex-col items-center justify-center bg-blue-9 px-8 py-36">
      <div className="flex max-w-5xl flex-col gap-4 text-center text-white">
        <h2 className="text-4xl font-medium">Keep all of your books in one place</h2>
        <p className="text-blue-4">
          Take control of your library and unlock the power of digital reading.
        </p>
      </div>
      <div className="grid max-w-4xl grid-cols-3 gap-6 py-12">
        {featuresArray.map((feature) => (
          <Block key={feature.imgSrc} {...feature} />
        ))}
      </div>
    </section>
  );
}
