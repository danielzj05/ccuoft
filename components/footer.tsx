export function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-bold text-gray-800 mb-4 uppercase text-sm">About</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#team" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Team Members
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-800 mb-4 uppercase text-sm">Projects</h4>
            <ul className="space-y-2">
              <li>
                <a href="#gallery" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Canoes
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Gallery
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-800 mb-4 uppercase text-sm">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Sponsors
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  News
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-800 mb-4 uppercase text-sm">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:team@concretecanoe.edu" // change this
                  className="text-sm text-gray-600 hover:text-primary transition-colors"
                >
                  team@concretecanoe.edu // change this
                </a>
              </li>
              <li>
                <span className="text-sm text-gray-600">University Engineering Dept.</span>
              </li>
            </ul>
          </div>
        </div>
        // what is this
      </div>
    </footer>
  )
}
