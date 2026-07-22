import React, {Suspense} from 'react'
import CoinOverview from "@/components/home/CoinOverview";
import TrendingCoins from "@/components/home/TrendingCoins";
import Categories from "@/components/home/Categories";

const Page= async () =>{
  return <main className="main-container">
    <section className="home-grid">
        <Suspense fallback={<div>Loading...</div>}>
            <CoinOverview />
        </Suspense>

        <Suspense fallback={<div>Loading Trending...</div>}>
            <TrendingCoins />
        </Suspense>

    </section>

    <section className="w-full mt-7 space-y-4">
        <Suspense fallback={<div>Loading Categories...</div>}>
            <Categories />
        </Suspense>
    </section>
  </main>
}
export default Page