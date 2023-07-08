import Image from 'next/image';
import CandidateSearch from './CandidateSearch';

export default function Home() {
  const keyFeaturesData = [
    {
      title: 'Advanced Applicant Tracking',
      description:
        'Efficiently track and manage candidates throughout the hiring process.',
      icon: 'icon-applicant-tracking',
    },
    {
      title: 'Automated Resume Screening',
      description:
        'Save time by automatically screening resumes and identifying top candidates.',
      icon: 'icon-resume-screening',
    },
    {
      title: 'Streamlined Interview Scheduling',
      description:
        'Easily schedule and manage interviews with candidates through our intuitive interface.',
      icon: 'icon-interview-scheduling',
    },
  ];

  const features = keyFeaturesData.map((feature, index) => (
    <div className='max-w-md text-center sm:text-center'>
      <div className='flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24'>
        <svg
          className='w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16'
          stroke='currentColor'
          viewBox='0 0 52 52'
        >
          <polygon
            strokeWidth='3'
            strokeLinecap='round'
            strokeLinejoin='round'
            fill='none'
            points='29 13 14 29 25 29 23 39 38 23 27 23'
          />
        </svg>
      </div>
      <h6 className='mb-2 font-semibold leading-5'>{feature.title}</h6>
      <p className='mb-3 text-sm text-gray-900'>{feature.description}</p>
      <a
        href='/'
        aria-label=''
        className='inline-flex items-center text-[#631ffc] font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800'
      >
        Learn more
      </a>
    </div>
  ));

  const benefitsData = [
    {
      title: 'Time Saving',
      description:
        'Our solution automates repetitive tasks, allowing HR professionals to focus on strategic initiatives.',
      icon: 'icon-time-saving',
    },
    {
      title: 'Efficiency Boost',
      description:
        'Improve your hiring process and reduce time-to-fill positions with our streamlined workflow.',
      icon: 'icon-efficiency-boost',
    },
    {
      title: 'Access to Top Talent',
      description:
        'Expand your reach and tap into a larger pool of qualified candidates through our extensive network.',
      icon: 'icon-access-to-talent',
    },
    // Add more benefits as needed
  ];
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
        <div className='max-w-2xl mx-auto sm:max-w-xl md:max-w-2xl'>
          <div className='text-center'>
            <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
              <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto'>
                The quick, brown fox jumps over a lazy dog
              </h2>
              <p className='text-base text-gray-700 md:text-lg'>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque rem aperiam, eaque ipsa quae.
              </p>
            </div>
            <form className='flex flex-col items-center w-full mb-4 md:flex-row md:px-16'>
              <input
                placeholder='Email'
                required=''
                type='text'
                className='flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline'
              />
              <button
                type='submit'
                className='inline-flex bg-[#631ffc] items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none'
              >
                Subscribe
              </button>
            </form>
            <p className='max-w-md mx-auto  text-xs text-gray-600 sm:text-sm md:mb-16'>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium.
            </p>
          </div>
        </div>
      </div>
      <div className='grid gap-8 row-gap-10 sm:grid-cols-2 lg:grid-cols-3'>
        {features}
      </div>
      <div>
        <CandidateSearch />
      </div>
    </main>
  );
}
