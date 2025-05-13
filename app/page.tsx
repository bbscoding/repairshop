import Link from "next/link";
import styles from "./style.module.css"

export default function Home() {
  return (
   <div className={`bg-black ${styles.homeImg} bg-cover bg-center`}>
    <main className="flex flex-col justify-center text-center max-w-5xl mx-auto h-dvh">
      <div className="flex flex-col gap-6 p-12 rounded-xl bg-black/90 w-4/5 sm:max-w-96 mx-auto text-white sm:text-2xl">
        <h1 className="text-4xl font-bold">Batuhan&apos;s Computer <br/> Repair Shop</h1>
        <address>
          Şişhane, Şişhane Cd. No: 1, 34420 Beyoğlu/İstanbul<br/>
        </address>
        <p>
          Open Daily: 9am top 5pm<br/>
          <Link href="tel:+905555555" className="hover:underline">+90 555 55 55</Link><br/>
        </p>
      </div>
    </main>
   </div>
  );
}
