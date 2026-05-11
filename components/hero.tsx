export function Hero() {
  return (
    <section id="home" className="py-16 md:py-20 bg-white border-b border-border">
      <div className="container mx-auto px-6">
        <div className="mb-8">
          <span className="text-sm text-gray-600">Home</span>
          <span className="text-sm text-gray-400 ml-2">see more info →</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-8 leading-tight uppercase tracking-tight">
              <div className="mb-2">DESIGN.</div>
              <div className="mb-2">CAST.</div>
              <div>RACE.</div>
            </h1>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                The Concrete Canoe Team is a multi-disciplinary design team completely managed by students. Over thirty
                undergraduates in the Faculty of Applied Science and Engineering from all the disciplines, as well as
                students from the Faculty of Arts and Science, form the active team.
              </p>

              <p>
                The Concrete Canoe team is a great way for students to apply the knowledge they gain in the classroom to
                a stimulating, interactive competition.
              </p>

              <p>
                New members are always welcome; sign up on our mailing list at team@concretecanoe.edu with your name,
                year and discipline for more information.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
              <img
                src="/img/Construction/casting.jpg"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute bottom-6 right-6 bg-white p-6 shadow-lg max-w-xs">
              <h3 className="text-xl font-bold text-gray-800 mb-2 uppercase">CANOES</h3>
              <p className="text-sm text-gray-600">View our past canoes since 1998.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
