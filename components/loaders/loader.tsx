export default function PageLoader() {
  return (
    <>
      <div className='fixed top-0 left-0 z-[900] w-screen h-screen overflow-hidden p-4 bg-primary-white grid place-items-center'>
        <div className='animate-spin'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 -960 960 960'
            height='40'
            width='40'
          >
            <path d='M190-80q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T190-140h66v-127q0-70 36.5-128.5T394-480q-65-26-101.5-85T256-694v-126h-66q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T190-880h580q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T770-820h-66v126q0 70-37 129t-101 85q65 26 101.5 84.5T704-267v127h66q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5Q800-97 791.375-88.5T770-80H190Z' />
          </svg>
        </div>
      </div>
    </>
  );
}
