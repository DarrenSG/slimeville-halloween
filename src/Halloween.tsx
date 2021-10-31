import background from "./assets/halloween_background.jpg";
import logo from "./assets/halloween_logo.png";
import poster from "./assets/halloween_poster.jpg";
import twitter from "./assets/twitter.png";
import discord from "./assets/discord.png";

const Halloween = (props: any) => {
  return (
    <main
      className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center"
      style={{ backgroundImage: `url(${background})`, color: '#CBF73E' }}>
      <nav className="py-4 px-6 flex justify-between w-full lg:fixed top-0 left-0 right-0">
        <h1 className="text-2xl font-medium leading-none">weareslimes.com</h1>
        <div className="flex space-x-3 pt-1">
          <a href="https://twitter.com/WeAreSlimes" target="_blank">
            <img src={twitter} alt="Twitter" className="w-7" />
          </a>
          <a href="https://discord.gg/5zwUs38P9q" target="_blank">
            <img src={discord} alt="Discord" className="w-7" />
          </a>
        </div>
      </nav>
      <img src={logo} alt="logo" style={{ maxWidth: '820px' }} className="block mx-auto -my-5 w-full" />
      <section
        className="grid lg:grid-cols-4 max-w-6xl mx-auto border-4 rounded-xl border-gray-400 p-6 lg:gap-8"
        style={{ backgroundColor: '#1D0909' }}>
        <div className="lg:col-span-3 flex flex-col">
          <h2 className="text-5xl font-medium text-center my-4">A Limited Edition Spooky Slime</h2>
          <div className="grid lg:grid-cols-3 py-5 my-auto gap-8 lg:gap-2">
            <div className="lg:col-span-2 text-center text-2xl font-medium">
              <p className="mb-3">The very first drop by the slimes!</p>
              <p className="mb-5">Only 222 available!</p>
              <p className="mb-5">Free mint just have enough to cover<br />the 0.01 Solana transaction fee!</p>
              <p className="text-gray-300">+ Future Utility</p>
            </div>
            <div className="mx-auto flex flex-col space-y-5">
              {props.children}
              <p className="text-xl font-bold text-center w-56">Max 1 per wallet</p>
            </div>
          </div>

        </div>
        <img src={poster} alt="Poster" className="border-4 border-gray-400 rounded col-span-1" />
      </section>
    </main>
  );
};

export default Halloween;