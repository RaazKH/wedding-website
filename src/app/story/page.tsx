import Image from 'next/image'

export default function Story() {
  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="font-serif text-4xl md:text-6xl font-light text-center mb-16">
          Our Story
        </h1>

        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <div className="grid lg:grid-cols-3 gap-12 items-start mb-16">
              <div className="lg:col-span-2">
                <h2 className="font-serif text-2xl md:text-3xl font-light text-gray-900 mb-4">From Haifa to London</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">After three years in Haifa, Israel, Raaz's smooth return to Chicago in October 2023 was upended by the outbreak of war. Instead of flying home, he found himself on an unexpected detour in London. Little did he know this twist of fate would lead to something extraordinary.</p>
                <p className="text-lg text-gray-700 leading-relaxed">Meanwhile in London, Layli had been trying to meet someone new. After slowly losing hope in finding the right person on her own, she'd started asking friends if they knew any nice guys worth meeting. Ironically, the one introduction that would change her life came from someone she hadn't even asked.</p>
              </div>
              <div>
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg mb-3">
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Photo 1</span>
                  </div>
                  <Image
                    src="/photo1.jpg"
                    alt="Raaz and Layli"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm text-gray-600 italic text-center">Eating yummy Thai food in London</p>
              </div>
            </div>

            {/* Second Section with Photo on Left */}
            <div className="grid lg:grid-cols-3 gap-12 items-start mb-16">
              <div className="lg:order-first">
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg mb-3">
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Photo 2</span>
                  </div>
                  <Image
                    src="/photo2.jpg"
                    alt="Raaz and Layli"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm text-gray-600 italic text-center">Rooftop Cinema, a gift from the Semple family</p>
              </div>
              <div className="lg:col-span-2">
                <h2 className="font-serif text-2xl md:text-3xl font-light text-gray-900 mb-4">The Mission</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">While Raaz was planning his transition back to life in Chicago in early 2024, his sister-in-law Dawning was on a mission. She reached out to her friend Layli in London with a message about her brother-in-law who "can be charming and charismatic when he wants to be." Dawning was determined they should meet while Raaz was in London. Both agreed to meet without much enthusiasm. Raaz was focused on finding a new job and settling down. Layli was open to a friendly interaction and had no expectations. Th meeting never happened though and Raaz flew back to Chicago.</p>
                <p className="text-lg text-gray-700 leading-relaxed">But Dawning was persistent. She enlisted reinforcements, winning over Raaz's mother and grandmother with tales of how amazing Layli was. Soon, three generations of women were united in their mission: get Raaz back to London to meet this girl.</p>
              </div>
            </div>

            {/* Third Section with Photo on Right */}
            <div className="grid lg:grid-cols-3 gap-12 items-start mb-16">
              <div className="lg:col-span-2">
                <h2 className="font-serif text-2xl md:text-3xl font-light text-gray-900 mb-4">A Casual Meeting in Piccadilly</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">When a friend's wedding brought Raaz back to London in February 2025, he finally relented. His plan? Meet Layli briefly, then report back to Dawning about how wrong she was. He told his cousin Rehan he'd probably be back in an hour.</p>
                <p className="text-lg text-gray-700 leading-relaxed">They met outside a Boots pharmacy in Piccadilly Circus with no real plan except to "walk around and see things." One hour turned into two, then three, then four. By 11pm, they were still talking, but with sore feet and nowhere to sit, they finally called it a night.</p>
              </div>
              <div>
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg mb-3">
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Photo 3</span>
                  </div>
                  <Image
                    src="/photo3.jpg"
                    alt="Raaz and Layli"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm text-gray-600 italic text-center">Buckingham Fountain in Chicago</p>
              </div>
            </div>

            {/* Fourth Section with Photo on Left */}
            <div className="grid lg:grid-cols-3 gap-12 items-start mb-16">
              <div className="lg:order-first">
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg mb-3">
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Photo 4</span>
                  </div>
                  <Image
                    src="/photo4.jpg"
                    alt="Raaz and Layli"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm text-gray-600 italic text-center">$14 funnel cake!?! What has this world come to.</p>
              </div>
              <div className="lg:col-span-2">
                <h2 className="font-serif text-2xl md:text-3xl font-light text-gray-900 mb-4">The Two-Month Trial</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">As Raaz headed back to Chicago, they agreed to stay in touch as friends. Daily texting turned into audio recordings, then phone calls, and finally video calls. Within a month, they both had to admit the truth: they had feelings for each other. When Layli asked Raaz to visit again, they realized they'd become more than friends.</p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">Being practical people, neither wanted a long-term, long-distance relationship. They made a bold decision: spend two months together intensively to know if this was "it." Raaz flew to London for six weeks, even traveling to Switzerland to meet Layli's parents. Then Layli came to Chicago for two weeks to meet Raaz's family.</p>
                <p className="text-lg text-gray-700 leading-relaxed">By the end of their two-month investigation, they had their answer. This was it.</p>
              </div>
            </div>
            <div className="text-center text-gray-600 italic text-xl max-w-2xl mx-auto">
              <p>Special thanks to Dawning, whose relentless matchmaking (and strategic family recruiting) brought us together!</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
