'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    document.body.style.overflow = 'auto'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])
  return (
    <main>
      {/* Hero */}
      <section className="relative h-[90vh] min-h-[560px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1625668350881-18dac2bc06c1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470&auto=format&fit=crop"
            alt="Portugal coastal cityscape background"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-white/60 md:bg-white/50"></div>
        </div>
        <div className="relative container mx-auto px-4 w-full">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="subtitle color-dark-red uppercase tracking-wide text-9xl sm:text-10xl md:text-11xl mb-3 leading-tight">
              <span className="block">LAYLI</span>
              <span className="block normal-case cursive color-dark-red text-4xl md:text-6xl tracking-normal">and</span>
              <span className="block">RAAZ</span>
            </h1>
            <p className="font-medium subtitle color-red uppercase text-3xl md:text-6xl opacity-80 mb-8">
              are getting married
            </p>
          </div>
        </div>
      </section>

      {/* Note + Registry */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="bg-box/40 border border-box/60 rounded-lg p-6 md:p-10 max-w-4xl mx-auto">
            <h2 className="tracking-wide text-center cursive color-orange text-2xl md:text-3xl mb-4">Our Special Day</h2>
            <p className="body-text color-blue mb-6">
              We are so excited to celebrate with you in beautiful Portugal. On this page, you'll find a short overview and quick links. For the full story and details, explore the sections below.
            </p>
            <p className="tracking-wider text-center cursive color-blue text-1xl md:text-2xl">
              With Love, Layli & Raaz
            </p>
          </div>
          <div className="flex justify-center mt-6">
            <Link href="/registry" className="btn min-w-[160px] text-center">Gift Registry</Link>
          </div>
        </div>
      </section>

      {/* Date / Location + RSVP */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <p className="subtitle color-dark-red text-lg opacity-80 mb-2">January 24, 2026</p>
          <h3 className="subtitle color-dark-red text-3xl md:text-4xl mb-3">Lisbon, Portugal</h3>
          <p className="body-text color-blue max-w-2xl mx-auto mb-8">Join us for a day of love, laughter, and great vibes beneath the Portuguese sky.</p>
          <Link href="/rsvp" className="btn min-w-[180px] inline-block">More info / RSVP</Link>
        </div>
      </section>

      {/* Our Story (inlined) */}
      <section id="story" className="mt-10">
        <div className="container mx-auto px-4">
          <h2 className="cursive color-orange text-6xl md:text-6xl font-light text-center mb-16">Our Story</h2>

          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <div className="grid lg:grid-cols-3 gap-12 items-start mb-16">
                <div className="lg:col-span-2">
                  <h3 className="font-semibold subtitle color-dark-red text-2xl md:text-3xl font-light mb-4">From Haifa to London</h3>
                  <p className="body-text color-blue text-lg leading-relaxed mb-4">After three years in Haifa, Israel, Raaz's smooth return to Chicago in October 2023 was upended by the outbreak of war. Instead of flying home, he found himself on an unexpected detour in London. Little did he know this twist of fate would lead to something extraordinary.</p>
                  <p className="body-text color-blue text-lg leading-relaxed">Meanwhile in London, Layli had been trying to meet someone new. After slowly losing hope in finding the right person on her own, she'd started asking friends if they knew any nice guys worth meeting. Ironically, the one introduction that would change her life came from someone she hadn't even asked.</p>
                </div>
                <div>
                  <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg mb-3">
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500 text-sm">Photo 1</span>
                    </div>
                    <Image src="/photo1.jpg" alt="Layli and Raaz" fill className="object-cover" />
                  </div>
                  <p className="caption text-center">Eating yummy Thai food in London</p>
                </div>
              </div>

              <div className="grid lg:grid-cols-3 gap-12 items-start mb-16">
                <div className="lg:order-first">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg mb-3">
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500 text-sm">Photo 2</span>
                    </div>
                    <Image src="/photo2.jpg" alt="Layli and Raaz" fill className="object-cover" />
                  </div>
                  <p className="caption text-center">Rooftop Cinema, a gift from the Semple family</p>
                </div>
                <div className="lg:col-span-2">
                  <h3 className="font-semibold subtitle color-dark-red text-2xl md:text-3xl font-light mb-4">The Mission</h3>
                  <p className="body-text color-blue text-lg leading-relaxed mb-4">While Raaz was planning his transition back to life in Chicago in early 2024, his sister-in-law Dawning was on a mission. She reached out to her friend Layli in London with a message about her brother-in-law who "can be charming and charismatic when he wants to be." Dawning was determined they should meet while Raaz was in London. Both agreed to meet without much enthusiasm. Raaz was focused on finding a new job and settling down. Layli was open to a friendly interaction and had no expectations. The meeting never happened though and Raaz flew back to Chicago.</p>
                  <p className="body-text color-blue text-lg leading-relaxed">But Dawning was persistent. She enlisted reinforcements, winning over Raaz's mother and grandmother with tales of how amazing Layli was. Soon, three generations of women were united in their mission: get Raaz back to London to meet this girl.</p>
                </div>
              </div>

              <div className="grid lg:grid-cols-3 gap-12 items-start mb-16">
                <div className="lg:col-span-2">
                  <h3 className="font-semibold subtitle color-dark-red text-2xl md:text-3xl font-light mb-4">A Casual Meeting in Piccadilly</h3>
                  <p className="body-text color-blue text-lg leading-relaxed mb-4">When a friend's wedding brought Raaz back to London in February 2025, he finally relented. His plan? Meet Layli briefly, then report back to Dawning about how wrong she was. He told his cousin Rehan he'd probably be back in an hour.</p>
                  <p className="body-text color-blue text-lg leading-relaxed">They met outside a Boots pharmacy in Piccadilly Circus with no real plan except to "walk around and see things." One hour turned into two, then three, then four. By 11pm, they were still talking, but with sore feet and nowhere to sit, they finally called it a night.</p>
                </div>
                <div>
                  <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg mb-3">
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500 text-sm">Photo 3</span>
                    </div>
                    <Image src="/photo3.jpg" alt="Layli and Raaz" fill className="object-cover" />
                  </div>
                  <p className="caption text-center">Buckingham Fountain in Chicago</p>
                </div>
              </div>

              <div className="grid lg:grid-cols-3 gap-12 items-start mb-16">
                <div className="lg:order-first">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg mb-3">
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500 text-sm">Photo 4</span>
                    </div>
                    <Image src="/photo4.jpg" alt="Layli and Raaz" fill className="object-cover" />
                  </div>
                  <p className="caption text-center">$14 funnel cake!?! What has this world come to.</p>
                </div>
                <div className="lg:col-span-2">
                  <h3 className="font-semibold subtitle color-dark-red text-2xl md:text-3xl font-light mb-4">This Was It</h3>
                  <p className="body-text color-blue text-lg leading-relaxed mb-4">As Raaz headed back to Chicago, they agreed to stay in touch as friends. Daily texting turned into audio recordings, then phone calls, and finally video calls. Within a month, they both had to admit the truth: they had feelings for each other. When Layli asked Raaz to visit again, they realized they'd become more than friends.</p>
                  <p className="body-text color-blue text-lg leading-relaxed mb-4">Being practical people, neither wanted a long-term, long-distance relationship. They made a bold decision: spend time together intensively to know if this was "it." Raaz flew to London for six weeks, even traveling to Switzerland to meet Layli's parents. Then Layli came to Chicago for two weeks to meet Raaz's family.</p>
                  <p className="body-text color-blue text-lg leading-relaxed">By the end of their joint trip, they had their answer. This was it.</p>
                </div>
              </div>

              <div className="text-center caption text-xl max-w-2xl mx-auto">
                <p>Special thanks to Dawning, whose relentless matchmaking (and strategic family recruiting) brought us together!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
