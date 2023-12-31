import { Avatar, Button, Progress } from '@nextui-org/react';
import Image from 'next/image';
import { useMotionValue, useTransform, motion } from 'framer-motion';
import Link from 'next/link';
import { formatTime } from '@/helpers/dayjs';

const MainSeriesCard = ({ item }: any) => {
  const truncateHexAddress = (hexAddress: string) => {
    const prefix = hexAddress.slice(0, 4); // Extract the '0x' prefix
    const truncatedAddress =
      hexAddress.slice(2, 4) + '...' + hexAddress.slice(-4);
    return prefix + truncatedAddress;
  };

  console.log('mmmmm', item);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [100, -100], [-30, 30]);

  return (
    <section className='bg-white dark:bg-gray-900'>
      <div className='relative grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12'>
        <div className=' relative mr-auto place-self-center lg:col-span-7'>
          <a
            href='#'
            className='inline-flex justify-between items-center px-1 pr-4 mb-7 text-sm text-gray-700 bg-green-400 rounded-full hover:bg-gray-200 '
          >
            <span className='absolute flex min-w-max text-gray font-semibold  sm:-top-[50px] sm:-left-[150px] ml-48 opacity-20  leading-0'>
              <span className='text-[130px]'>
                #{item?.seriesInfo.series / 10}
              </span>
            </span>

            <Avatar
              isBordered
              color='success'
              src='https://i.pravatar.cc/150?u=a04258114e29026302d'
              className=' mr-3'
            />
            <span className='text-md text-white text-semibold '>
              {truncateHexAddress(item.seriesInfo.owner)}
            </span>
          </a>

          <h1 className='max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl '>
            {item.seriesInfo.title}
          </h1>
          <p className='max-w-2xl mb-2 block font-light text-gray-500 lg:mb-3 md:text-lg lg:text-xl break-words dark:text-gray-400'>
            {item.seriesInfo.description}
          </p>

          <div className='flex flex-col mt-5 gap-1'>
            <Progress
              aria-label='Music progress'
              classNames={{
                indicator: 'bg-green-600 ',
                track: 'bg-default-500/30',
              }}
              color='default'
              size='sm'
              value={
                item?.seriesInfo.applyCount *
                (100 / Number(item?.seriesInfo.quantity))
              }
            />
            <div className='flex justify-between'>
              <p className='text-small'>
                {item?.seriesInfo.applyCount}명 참여 완료
              </p>
              <p className='text-small text-foreground/50'>
                최대 {item?.seriesInfo.quantity}명
              </p>
            </div>
          </div>

          <blockquote className='p-4 my-4 border-l-4 border-teal-400 bg-teal-50 space-y-1'>
            <span className='text-md flex text-green-500'>
              <p>시리즈 진행 기간 : &nbsp;</p>
              <p>{formatTime(item?.seriesInfo.useWhenFrom)}</p>
              <p>&nbsp;~&nbsp;</p>
              <p>{formatTime(item?.seriesInfo.useWhenTo)}</p>
            </span>
            <span className='text-md flex text-green-500 '>
              <p>혜택 : &nbsp;</p>
              <p>{item?.seriesInfo.benefit}</p>
            </span>
            <span className='text-md flex text-green-500 '>
              <p>사용처 : &nbsp;</p>
              <p>{item?.seriesInfo.useWhere}</p>
            </span>
          </blockquote>

          <Link
            href={`/Series/${item?.seriesInfo.series}`}
            className='mt-5 relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-green-400 border-2 border-green-400 rounded-full hover:text-white group hover:bg-gray-50'
          >
            <span className='absolute left-0 block w-full h-0 transition-all bg-green-400 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease'></span>
            <span className='absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease'>
              <svg
                className='w-5 h-5'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M14 5l7 7m0 0l-7 7m7-7H3'
                ></path>
              </svg>
            </span>
            <span className='relative'>자세히 보기</span>
          </Link>

          {/* <Link
            href='/Series/1'
            className='px-5 py-2.5 mt-2 relative rounded group font-medium text-white inline-block shadow-2xl shadow-cyan-500'
          >
            <span className='absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-green-600 to-blue-500'></span>
            <span className='h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-green-600 to-blue-500'></span>
            <span className='absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-green-600 to-blue-500'></span>
            <span className='absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-green-600 from-blue-500'></span>
            <span className='relative'>자세히 보기</span>
          </Link> */}
        </div>
        <div className='hidden relative lg:mt-0 lg:col-span-5 lg:flex'>
          <motion.div
            style={{ x, y, rotateX, rotateY, z: 100 }}
            drag
            dragElastic={0.18}
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            whileTap={{ cursor: 'grabbing' }}
          >
            <Image
              src={item?.data[0].image}
              height={500}
              width={500}
              alt='Stamp Board Image of Main Series'
              className='shadow-2xl'
            />

            <motion.div
              style={{ x, y, rotateX, rotateY, z: 100000 }}
              className='absolute -left-40 -bottom-10'
            >
              <div
                className='grid grid-rows-2 grid-cols-2 gap-4'
                draggable='false'
              >
                {item?.data[1].image && (
                  <Image
                    src={item?.data[1].image}
                    alt='stamp1'
                    width={100}
                    height={100}
                    className='rounded-xl shadow-2xl'
                  />
                )}

                {item?.data[2].image && (
                  <Image
                    src={item?.data[2].image}
                    alt='stamp1'
                    width={100}
                    height={100}
                    className='rounded-xl shadow-2xl'
                  />
                )}
                {item?.data[3].image && (
                  <Image
                    src={item?.data[3].image}
                    alt='stamp1'
                    width={100}
                    height={100}
                    className='rounded-xl shadow-2xl'
                  />
                )}
                {item?.data[4].image && (
                  <Image
                    src={item?.data[4].image}
                    alt='stamp1'
                    width={100}
                    height={100}
                    className='rounded-xl shadow-2xl'
                  />
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MainSeriesCard;
