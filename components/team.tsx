export function Team() {
  const teamMembers = [
    {
      id: 1,
      name: "",
      role: "",
      bio: "",
      image: "",
    },
    {
      id: 2,
      name: "",
      role: "",
      bio: "",
      image: "",
    },
    {
      id: 3,
      name: "",
      role: "",
      bio: "",
      image: "",
    },
    {
      id: 4,
      name: "",
      role: "",
      bio: "",
      image: "",
    },
    {
      id: 5,
      name: "",
      role: "",
      bio: "",
      image: "",
    },
    {
      id: 6,
      name: "",
      role: "",
      bio: "",
      image: "",
    },
  ]

  return (
    <section id="team" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 uppercase tracking-tight">Our Team</h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
            The passionate individuals behind our concrete canoe success
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="group">
              <div className="relative aspect-square overflow-hidden rounded-sm mb-4">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
              <p className="text-sm text-primary font-medium mb-2">{member.role}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
