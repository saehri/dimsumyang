'use client';

import Image from 'next/image';
import Link from 'next/link';
import {usePathname} from 'next/navigation';

export default function Sidebar() {
  const activePath = usePathname();

  return (
    <div
      style={{gridColumn: '1/3'}}
      className='p-6 border-r border-slate-200 bg-slate-50 flex flex-col justify-between h-full'
    >
      <div className='flex flex-row-reverse gap-4 justify-end mb-20'>
        <div className='flex flex-col'>
          <span className='font-bold text-base text-slate-950'>
            Dimsum Yang
          </span>
          <span className='text-xs text-slate-500'>Administrator</span>
        </div>

        <div className='w-12 h-12 rounded-full bg-slate-200 grid place-items-center'>
          <Image
            src='/assets/decoration/logo.png'
            width={24}
            height={48}
            priority
            alt='logo'
          />
        </div>
      </div>

      <nav className='flex flex-col justify-between grow'>
        <div className='flex flex-col gap-8'>
          <SidebarLink path='/admin' activePath={activePath}>
            <HomeIcon />
            <span>Home</span>
          </SidebarLink>

          <SidebarLink path='/admin/prasmanan' activePath={activePath}>
            <PrasmananIcon />
            <span>Prasmanans</span>
          </SidebarLink>

          <SidebarLink path='/admin/reseller' activePath={activePath}>
            <ResellerIcon />
            <span>Resellers</span>
          </SidebarLink>

          <SidebarLink path='/admin/menu' activePath={activePath}>
            <MenuIcon />
            <span>Menu Catalog</span>
          </SidebarLink>

          <SidebarLink path='/admin/testimonial' activePath={activePath}>
            <TestimonialIcon />
            <span>Testimonial</span>
          </SidebarLink>
        </div>

        <div className='flex flex-col gap-8 mb-8'>
          <SidebarLink path='/admin/logs' activePath={activePath}>
            <LogsIcon />
            <span>Work History</span>
          </SidebarLink>

          <SidebarLink path='/auth' activePath={activePath}>
            <LogoutIcon />
            <span>Log Out</span>
          </SidebarLink>
        </div>
      </nav>
    </div>
  );
}

function SidebarLink({
  children,
  path,
  activePath,
}: {
  children: React.ReactNode[];
  path: string;
  activePath: string;
}) {
  return (
    <Link
      href={path}
      className={`flex gap-4 items-center ${
        path === activePath ? 'text-slate-950' : 'text-slate-500'
      } font-semibold text-sm hover:text-slate-800 transition-all`}
    >
      <div className='w-6 h-6'>{children[0]}</div>
      {children[1]}
    </Link>
  );
}

/* 
  ICONS
*/

function MenuIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 -960 960 960'
      fill='currentColor'
    >
      <path d='M113.333-558.667q-14.166 0-23.75-9.583Q80-577.833 80-592v-6.667q0-111 106.167-176.166Q292.333-840 480-840q187.667 0 293.833 65.167Q880-709.667 880-598.667V-592q0 14.167-9.583 23.75-9.584 9.583-23.75 9.583H113.333ZM150-625.333h660Q800.334-690.666 710.167-732T480-773.334q-140 0-230.834 41.334T150-625.333Zm-70 208q0-10.586 8-20.793 8-10.207 21.333-16.54 21.334-8.334 43.043-22.167 21.709-13.833 62.957-13.833 54.667 0 73 21.333Q306.667-448 346-448t59.333-21.333q20-21.333 74.667-21.333t74.667 21.333Q574.667-448 614-448t57.667-21.333q18.333-21.333 73-21.333 41 0 63 13.666 22 13.667 43 22 13.123 6.5 21.228 16.25Q880-429 880-417.333q0 15.774-11.833 25.054-11.834 9.279-25.5 5.946-31.334-8-48.167-22.834Q777.667-424 745.99-424q-39.324 0-58.323 21.333-19 21.334-73.667 21.334t-74.667-21.334Q519.333-424 480-424t-59.333 21.333q-20 21.334-74.667 21.334t-73-21.334Q254.667-424 215.344-424q-31.677 0-49.011 14.833-17.333 14.834-49 22.834-13.666 3.333-25.5-5.946Q80-401.559 80-417.333ZM146.666-120q-27 0-46.833-19.833T80-186.666v-58.667q0-27.5 19.583-47.084Q119.166-312 146.666-312h666.668q27.5 0 47.083 19.583Q880-272.833 880-245.333v58.667q0 27-19.833 46.833T813.334-120H146.666Zm0-66.666h666.668v-58.667H146.666v58.667ZM150-625.333h660-660Zm-3.334 380h666.668-666.668Z' />
    </svg>
  );
}

function PrasmananIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 -960 960 960'
      fill='currentColor'
    >
      <path d='M186.333-120q-27 0-46.833-19.833t-19.833-46.833v-332.001q-26.334-23-36.5-57.333Q73-610.333 84.333-646.667L127-782q8-26.667 28.167-42.333Q175.333-840 201.667-840h554q27.666 0 48.333 15.833 20.667 15.834 29 42.167l43.333 135.333q11.334 36.334.834 70.334t-36.834 57.666v332.001q0 27-19.833 46.833T773.667-120H186.333Zm383.334-433.333q28.333 0 46.333-18.834 18-18.833 14.334-44.5l-24-156.667h-92.668V-614q0 24.333 16.001 42.5 16 18.167 40 18.167Zm-184.667 0q26.333 0 44.167-17.834Q447-589 447-614v-159.334h-92.667l-24 156.667q-4 25.334 12.833 44.334 16.834 19 41.834 19Zm-180.667 0q22 0 38.167-15.334 16.167-15.333 19.167-38l24.666-166.667h-92.667l-44 142.001Q141-604 157.166-578.667q16.167 25.334 47.167 25.334Zm551.334 0q31 0 47.667-25 16.666-25 7.666-53l-44.666-142.001h-92.001L699-606.667q3 22.667 19.167 38 16.166 15.334 37.5 15.334ZM186.333-186.666h587.334V-488q-1 1.333-6.5 1.333h-11.5q-25.667 0-47.5-10-21.834-10-43.167-31.333-16.667 19.333-40.333 30.333-23.667 11-51.667 11-29 0-51.167-9-22.166-9-41.5-28.333-15.666 18-38.5 27.666Q419-486.667 391-486.667q-30.333 0-54.167-10.667Q313-508 295.667-528q-23 21-45.167 31.166-22.167 10.167-46.167 10.167h-10.5q-5.167 0-7.5-1.333v301.334Zm587.334 0H186.333 773.667Z' />
    </svg>
  );
}

function ResellerIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 -960 960 960'
      fill='currentColor'
    >
      <path d='M155.999-586.666h649.335L764-733.334H199l-43.001 146.668ZM481-660ZM263.666-426.666h434.668l-12-93.334H276.666l-13 93.334Zm-65 266.666q-15.333 0-24.833-11.167-9.5-11.166-7.5-26.499L210-520h-89q-20 0-31.5-16T83-571l57-200q4-13 14-21t24-8h606q14 0 24 8t14 21l57 200q5 19-6.5 35T841-520h-88l42.667 322.334q2 15.333-7.5 26.499Q778.667-160 763.334-160q-12.334 0-21.5-8.167-9.167-8.166-11.167-20.5L707.334-360H254.666l-23.333 171.333q-2 12.334-11.167 20.5Q211-160 198.666-160Z' />
    </svg>
  );
}

function TestimonialIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 -960 960 960'
      fill='currentColor'
    >
      <path d='M240-240 108.667-108.667q-8 8-18.334 3.973Q80-108.722 80-120v-693.334q0-27 19.833-46.833T146.666-880h666.668q27 0 46.833 19.833T880-813.334v506.668q0 27-19.833 46.833T813.334-240H240Zm-93.334-66.666h666.668v-506.668H146.666v506.668Zm0 0v-506.668 506.668ZM480-461l83.334 50.667q8.999 5.666 17.999-.834 9-6.5 6.667-17.499L566-523l74-64.333q8.667-7.667 5-17.834-3.667-10.166-15-11.166L533-624l-37.667-89.334q-4.247-9.999-15.29-9.999t-15.376 9.999L427-624l-97 7.667q-11.333 1-15 11.166-3.667 10.167 5 17.834L394-523l-22 94.334q-2.333 10.999 6.667 17.499 9 6.5 17.999.834L480-461Z' />
    </svg>
  );
}

function LogsIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 -960 960 960'
      fill='currentColor'
    >
      <path d='M146.666-186.666v-475.335 475.335Zm0 66.666q-27 0-46.833-19.833T80-186.666v-475.335Q80-689 99.833-708.834q19.833-19.833 46.833-19.833h180.001v-84.667q0-26.333 19.833-46.499Q366.333-880 393.333-880h173.334q27 0 46.833 20.167 19.833 20.166 19.833 46.499v84.667h180.001q27 0 46.833 19.833Q880-689 880-662.001v215.668q-15.333-11.666-31.667-20.833-16.333-9.167-34.999-16.833v-178.002H146.666v475.668-.333H463.97q3.364 17.666 9.364 34.333 6 16.666 14.333 32.333H146.666Zm246.667-608.667h173.334v-84.667H393.333v84.667ZM720-44.667q-80.333 0-137.833-57.5T524.667-240q0-80.333 57.5-137.833T720-435.333q80.333 0 137.833 57.5T915.333-240q0 80.333-57.5 137.833T720-44.667Zm71.333-96.666 27.334-27.334L738-244v-120h-41.333v133.184l94.666 89.483Z' />
    </svg>
  );
}

function LogoutIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 -960 960 960'
      fill='currentColor'
    >
      <path d='M313.333-448.667h333.334q14.166 0 23.75-9.617Q680-467.901 680-482.117q0-14.216-9.583-23.716-9.584-9.5-23.75-9.5H313.333q-14.166 0-23.75 9.617Q280-496.099 280-481.883q0 14.216 9.583 23.716 9.584 9.5 23.75 9.5ZM480.177-80q-82.822 0-155.666-31.5t-127.178-85.833Q143-251.667 111.5-324.56 80-397.454 80-480.333q0-82.88 31.5-155.773Q143-709 197.333-763q54.334-54 127.227-85.5Q397.454-880 480.333-880q82.88 0 155.773 31.5Q709-817 763-763t85.5 127Q880-563 880-480.177q0 82.822-31.5 155.666T763-197.456q-54 54.21-127 85.833Q563-80 480.177-80Zm.156-66.666q139 0 236.001-97.334 97-97.333 97-236.333t-96.875-236.001q-96.876-97-236.459-97-138.667 0-236 96.875Q146.666-619.583 146.666-480q0 138.667 97.334 236 97.333 97.334 236.333 97.334ZM480-480Z' />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 -960 960 960'
      fill='currentColor'
    >
      <path d='M226.666-186.666h140.001v-246.667h226.666v246.667h140.001v-380.001L480-756.667l-253.334 190v380.001Zm0 66.666q-27.5 0-47.083-19.583T160-186.666v-380.001q0-15.833 7.083-30 7.084-14.166 19.584-23.333L440-810q9.197-6.667 19.23-10 10.032-3.333 20.901-3.333T500.943-820q9.943 3.333 19.057 10l253.333 190q12.5 9.167 19.584 23.333 7.083 14.167 7.083 30v380.001q0 27.5-19.583 47.083T733.334-120H526.667v-246.667h-93.334V-120H226.666ZM480-472Z' />
    </svg>
  );
}
