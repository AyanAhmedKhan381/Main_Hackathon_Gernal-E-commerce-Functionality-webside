'use client'
import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import SearchIcon from '../Navbar/SearchIcon';
import SearchInput from '../Helper/SearchInput';

const Sidebar = () => {
  const [search, setSearch] = useState('');

  const categories = [
    { name: 'Crafts', count: 2 },
    { name: 'Design', count: 8 },
    { name: 'Handmade', count: 7 },
    { name: 'Interior', count: 1 },
    { name: 'Wood', count: 6 },
  ];

  return (
    <aside className="p-6 py-5 rounded-lg">
      {/* Search Bar */}
      <div className="mb-2">
      <SearchIcon icon={<SearchInput/>}/>
      </div>

      {/* Categories Section */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Categories</h3>
        <ul className="space-y-4">
          {categories.map((category, idx) => (
            <li
              key={idx}
              className="flex justify-between items-center py-3.5 text-gray-700 hover:text-gray-900"
            >
              <span>{category.name}</span>
              <span className="text-gray-400">{category.count}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
