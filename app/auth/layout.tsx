


export default function AuthLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <main className='w-screen'>
        <nav className="flex bg-[#7C32A15E] justify-center border-b-2 border-black">
            <h1 className="py-2 my-2 text-3xl font-semibold">Learnify</h1>
        </nav>
        {children}

      </main>
    )
  }