"use client"
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

interface SearchComponentProps {
  classes: string
}

export function SearchComponent({classes}: SearchComponentProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter()

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    router.push(`/recipes/search/${searchQuery}`)
    
  };
  
  return (
    <>
  <div className={`${classes} flex flex-col justify-center`}>
  <div className="relative p-12 w-full sm:max-w-2xl sm:mx-auto">
    <div className="overflow-hidden z-0 rounded-full relative p-3">
      <form role="form" className="relative flex z-50 bg-white rounded-full" onSubmit={handleSubmit}>
        <input
          required
          value={searchQuery}
          onChange={handleChange}
          type="text" 
          placeholder="دنبال چی میگردی؟" 
          className="rounded-full flex-1 px-6 py-4 text-gray-700 focus:outline-none" 
        />
        <button className="bg-indigo-500 text-white rounded-full font-semibold px-8 py-4 hover:bg-indigo-400 focus:bg-indigo-600 focus:outline-none">جستجو</button>
      </form>
      <div className="glow glow-1 z-10 bg-pink-400 absolute"></div>
      <div className="glow glow-2 z-20 bg-purple-400 absolute"></div>
      <div className="glow glow-3 z-30 bg-yellow-400 absolute"></div>
      <div className="glow glow-4 z-40 bg-blue-400 absolute"></div>
    </div>
  </div>
</div>
    </>
  );
}
