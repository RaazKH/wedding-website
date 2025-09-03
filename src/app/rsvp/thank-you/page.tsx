export default function ThankYou() {
  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="font-serif text-4xl md:text-6xl font-light text-center mb-16">
          Thank You!
        </h1>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl text-gray-600 mb-8">
            Thank you for your RSVP! We can't wait to celebrate with you.
          </p>
          {/* TODO BELOW? */}
          <p className="text-lg text-gray-500 mb-8">
            You should receive a confirmation email shortly.
          </p>

          <div className="mt-12">
            <a
              href="/registry"
              className="inline-block bg-accent text-white px-8 py-3 rounded-lg font-medium hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 transition-colors shadow-sm"
            >
              View Our Registry
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}