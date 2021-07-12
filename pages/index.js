import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Por Ellas </title>
        <meta
          name="description"
          content="Organización de eventos deportivos con causa"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gray-200 p-3">
        <h1 className=" bg-blue-700 text-8xl text-white p-4 text-center">porellas.org</h1>
        <h4 className="flex align-middle justify-center ">
          <div className="p-4 w-2/4 text-center  bg-green-400 border-2 border-blue-200 hover:border-transparent">
            Pronto...
          </div>
        </h4>
      </main>
    </div>
  )
}
