import React from 'react'

function TeamNews() {

  const people = [
    {
      name: 'Roger Cerpa',
      role: 'SAE',
      imageUrl:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.linkedin.com%2Fin%2Froger-cerpa&psig=AOvVaw1BVojT8LDximKw7_9WM25l&ust=1698893734437000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNj0ir7moYIDFQAAAAAdAAAAABAY',
    },
    // More people...
  ]

  
  return (
    <div className="bg-white py-24 sm:py-32">
    <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Learn more about the team</h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Here you will find the latests news about the DAS team, Design process, innovations, and much more.
        </p>
      </div>
      <ul className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
        {people.map((person) => (
          <li key={person.name}>
            <div className="flex items-center gap-x-6">
              <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
              <div>
                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
  )
}

export default TeamNews