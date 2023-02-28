import { BorderBox1, BorderBox2, ConvertIcon, SendToMobileIcon } from './IconComponents';

export default function BookCoverHero() {
  return (
    <div className="relative flex w-full">
      <BorderBox1 classGroup="absolute animate-slideInLeft -top-10 -left-8 " />
      <BorderBox2 classGroup="absolute animate-slideInRight top-1/3 -right-8" />
      <BackgroundGlass />
      <BookCover />
      <ColourPaletteBar />
      <IconBox
        position="absolute -left-12 bottom-16 animate-slideInRight"
        title="Convert Books"
        icon={<ConvertIcon className="fill-slateDark-12" />}
      />
      <IconBox
        position="absolute right-12 top-20 animate-slideInLeft"
        title="Send to device"
        icon={<SendToMobileIcon className="fill-slateDark-12" />}
      />
    </div>
  );
}

function ColourPaletteBar() {
  return (
    <div className="absolute left-8 top-12 z-40 flex animate-slideInBottom flex-col gap-3 rounded-xl bg-white/10 px-4 py-4 backdrop-blur-[20px]">
      <ColourPaletteCircle colour="bg-blue-11" />
      <ColourPaletteCircle colour="bg-blue-8" />
      <ColourPaletteCircle colour="bg-blueDark-10" />
      <ColourPaletteCircle colour="bg-white" />
    </div>
  );
}

function BackgroundGlass() {
  return (
    <div className="absolute h-full w-full animate-slideInBottom overflow-hidden rounded-2xl backdrop-blur-[2px]">
      <div className="absolute -top-1/2 left-1/3 aspect-square h-auto w-2/3 bg-gradient-radial from-slateDark-11/40 blur-xl"></div>
      <div className="absolute top-1/2 -left-1/3 aspect-square h-auto w-2/3 bg-gradient-radial from-slateDark-11/40 blur-xl"></div>
      <div className="absolute top-1/2 left-12 aspect-square h-auto w-20 bg-gradient-radial from-blueDark-9/50 blur-md"></div>
      <div className="absolute top-1/2 right-0 aspect-square h-auto w-2/3 bg-gradient-radial from-blueDark-9/30 blur-xl"></div>
      <div className="h-full w-full rounded-2xl bg-[url('/assets/grain5.png')]  opacity-30 mix-blend-overlay"></div>
    </div>
  );
}

function BookCover() {
  return (
    <div className="flex w-full animate-slideInTop items-center justify-center rounded-xl py-12 delay-500">
      <div className="relative flex aspect-[9/13] h-auto w-1/2 flex-col items-center justify-center gap-4 overflow-hidden rounded-2xl bg-[url(/assets/abstract-blue2.jpg)] bg-cover bg-center bg-no-repeat">
        <div className="absolute h-full w-full bg-[url('/assets/grain4.png')] opacity-50 mix-blend-overlay"></div>
        <p className="mx-2 text-center text-4xl font-light">Consider Phlebas</p>
        <p className="text-sm">Iain M. Banks</p>
      </div>
    </div>
  );
}

function ColourPaletteCircle(props: { colour: string }) {
  return <div className={`aspect-square h-auto w-8 rounded-full ${props.colour}`}></div>;
}

function IconBox(props: { title: string; desc?: string; icon: JSX.Element; position: string }) {
  return (
    <div
      className={`${props.position} flex items-center gap-2 whitespace-nowrap rounded-xl border border-white/50 bg-blue-8/30 px-4 py-2 backdrop-blur-[40px]`}>
      {props.icon}
      <div className="flex flex-col leading-tight">
        <p className="text-xs font-medium text-blueDark-12">{props.title}</p>
        {props.desc ? (
          <p className="text-[10px] font-light text-blue-5">{props.desc}</p>
        ) : (
          <span className="my-1 h-2 w-2/3 rounded-full bg-blue-5 opacity-50"></span>
        )}
      </div>
    </div>
  );
}
