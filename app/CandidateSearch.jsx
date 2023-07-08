'use client';
import React, { useState } from 'react';
// import CandidateSearch from './CandidateSearch';

const CandidateSearch = () => {
  const [location, setLocation] = useState('');
  const [jobRoles, setJobRoles] = useState('');
  const [candidates, setCandidates] = useState([]);
  // const [search, setSearch] = useState('');

  const fetchedCandidates = [
    {
      id: 1,
      name: 'John Doe',
      location: 'New York',
      role: 'Software Developer',
    },
    {
      id: 2,
      name: 'Jane Smith',
      location: 'San Francisco',
      role: 'UX Designer',
    },
    {
      id: 3,
      name: 'Parth Sawant',
      location: 'Mumbai',
      role: 'Blockchain developer',
    },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    const filteredCandidate = filterCandidate(location, jobRoles);
    setCandidates(filteredCandidate);
  };
  const filterCandidate = (location, jobRoles) => {
    return fetchedCandidates.filter((candidate) => {
      const candidateLocation = candidate.location.toLowerCase();
      const candidateRole = candidate.role.toLowerCase();
      const searchLocation = location.toLowerCase();
      const searchRole = jobRoles.toLowerCase();
      return (
        candidateLocation.includes(searchLocation) &&
        candidateRole.includes(searchRole)
      );
    });
  };

  return (
    <div className='w-screen flex flex-col items-center justify-between mt-[180px] mb-4 md:px-16'>
      <p className='mb-4 font-sans text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl sm:leading-none'>
        Candidate Search
      </p>
      <br />
      <form
        onSubmit={handleSearch}
        className='flex flex-col items-center justify-center w-full mb-4 md:flex-row md:px-16'
      >
        <label className='px-2' htmlFor='location'>
          Location:
        </label>
        <input
          type='text'
          id='location'
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
          className='flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline'
        />
        <label className='px-2' htmlFor='jobRoles'>
          Job Roles:
        </label>
        <input
          type='text'
          id='jobRoles'
          value={jobRoles}
          onChange={(e) => setJobRoles(e.target.value)}
          required
          className='flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline'
        />
        <button
          className='inline-flex bg-[#631ffc] items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none'
          type='submit'
        >
          Search
        </button>
      </form>

      {candidates.length > 0 && (
        <div className='w-[90%]'>
          {candidates.map((candidate) => (
            <div key={candidate.id}>
              <table className='w-full items-center rounded-sm justify-center  border-gray-300 border-[1px] text-sm text-left'>
                <thead className=' bg-gray-200 font-semibold'>
                  <tr>
                    <th className='px-6 py-3'>id</th>
                    <th className='px-6 py-3'>Name</th>
                    <th className='px-6 py-3'>Location</th>
                    <th className='px-6 py-3'>Role</th>
                  </tr>
                </thead>
                <tbody className='text-sm'>
                  {/* <h3>Found Candidates:</h3> */}
                  <tr>
                    <td className='px-6 py-4'>{candidate.id}</td>
                    <th className='px-6 py-4'>{candidate.name}</th>
                    <td className='px-6 py-4'>{candidate.location}</td>
                    <td className='px-6 py-4'>{candidate.role}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CandidateSearch;
