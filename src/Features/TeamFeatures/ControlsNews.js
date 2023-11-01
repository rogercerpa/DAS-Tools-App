import React from 'react'

function ControlsNews() {

  const posts = [
    {
      id: 1,
      title: 'nPS80 DALI',
      href: '#',
      description:
        'The nPS 80 DALI controller provides nLight® devices with the ability to control DALI drivers, bringing all the benefits of an nLight system where DALI protocol is required',
      date: 'Aug 20, 2023',
      datetime: '2023-03-16',
      category: { title: 'New', href: '#' },
      author: {
        name: 'nLight',
        role: 'DALI Protocol',
        href: 'https://www.acuitybrands.com/products/detail/1801992/nlight/nps-80-dali/nlight-controller-with-dali-protocol',
        imageUrl:
          'https://img.acuitybrands.com/public-assets/catalog/1801992/nps-80-dali-clss2_004-(1)_mid.png?abl_version=09%2f12%2f2023+12%3a28%3a04',
      },
    },
    // More posts...
  ]

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 ">
        <div className="mx-auto  lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Acuity Controls News</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Here you will find the latests news about Acuity Lighting Controls.
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
                <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ControlsNews