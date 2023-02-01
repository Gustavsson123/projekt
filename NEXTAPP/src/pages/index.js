import Head from 'next/head'
import { useEffect } from 'react'
import Background from '../components/Background'

export default function Home() {
  const callAPI = async () => {
    try {
      const res = await fetch(`https://opendata-download-metobs.smhi.se/api/version/1.0/parameter/1.json`);
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className=''>
      <main >
        <button onClick={callAPI}>Make API call</button>
        <p>{ }</p>
      </main>
    </div>
  );
}