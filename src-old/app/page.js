import React from 'react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-white text-black">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold tracking-tighter">Saurabh Brothers</h1>
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Fresh Start &nbsp;
        </p>
      </div>

      <div className="relative flex place-items-center mt-20">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready for a new vision.</h2>
          <p className="text-gray-500">The previous design has been cleared. Tell me what you&apos;d like to build next.</p>
        </div>
      </div>
    </main>
  );
}
