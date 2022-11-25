import Head from 'next/head'
import { useEffect } from 'react'
import Background from '../components/Background'

export default function Home() {
  return (
    <>
      <Head>
        <title>My Project</title>
      </Head>

      {/* <Background /> */}

      <div className="flex justify-center items-center h-screen">
        <h1>GREAT SUCCESS</h1>
      </div>
    </>
  )
}
