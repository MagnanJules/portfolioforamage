const posts = [
  {
    id: 1,
    title: 'OCR',
    href: '#',
    description:
      'A C project with AI to recognize text from images. The concept was to upload an image of a sudoku on the app and the app would solve it for you.',
    date: '2023',
    datetime: '2020-03-16',
    category: { title: 'C', href: '#' },
    author: {
      name: 'Magnan Jules',
    },
  },
  {
    id: 2,
    title: 'No Cap Game',
    href: '#',
    description:
      'A western video game made with Unity. The game is about a cowboy who has to survive in the wild west.',
    date: '2023',
    datetime: '2020-03-16',
    category: { title: 'C# Unity', href: '#' },
    author: {
      name: 'Magnan Jules',
    },
  },
  // More posts...
]

export default function Blog() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Here are some of my projects</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Video Games, Web Development, AI,and more!
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.category.title}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
