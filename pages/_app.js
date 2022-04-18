import '../styles/globals.css'
import Link from 'next/link'
import dynamic from 'next/dynamic'

function RinApp({ Component, pageProps }) {
  return (
    <>
      {nav()}
      <Component {...pageProps} />
      {Ned()}
      
    </>
  );


  function Ned() {
    return <><input type="checkbox" id="Ned" class="modal-toggle" /><div class="modal">
      <div class="modal-box relative">
        <label for="Ned" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
        <h3 class="text-lg font-bold">Congratulations random Interner user!</h3>
        <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
      </div>
    </div></>;
  }

  function nav() {
    /*Navbar Start*/
    const NavStart = <div class="navbar-start flex-none">
      <div class="tooltip tooltip-bottom" data-tip="bruh">
        <label for="Ned" class="btn-ghost btn drawer-button swap swap-rotate">
          <input type="checkbox" />
          <svg class="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>
          <svg class="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>
        </label>
      </div>
    </div>;

    /*Navbar Center*/
    const NavCenter = <div class="navbar-center">
      <Link href="/"><a class="btn btn-ghost normal-case text-xl font-bold tracking-widest">りんめ</a></Link>
    </div>;

    /*Navbar End*/
    const NavEnd = <div class="navbar-end">
      <button class="btn btn-square btn-ghost">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
      </button>
    </div>;

    /* Return Navbar */
    return <div class="navbar bg-base-100 pb-10">
      {NavStart}
      {NavCenter}
      {NavEnd}
    </div>
  };
}

export default dynamic(() => Promise.resolve(RinApp), { ssr: false });
