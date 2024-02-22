'use client';

import '@/styles/global.css';
import { Flex } from '@chakra-ui/react';
import { useEffect, useLayoutEffect, useState } from 'react';
import gsap from "gsap";
import { usePathname } from 'next/navigation';

const LoaderProvider = ({ children }) => {
  const [showLoader, setShowLoader] = useState(true);
  const [minTime, setMinTime] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setShowLoader(true);
    setMinTime(false);
    showLoaderPill();
    
    setTimeout(() => setMinTime(true), 3000);
    if (document.readyState !== 'complete') {
      const handler = () => {
        setShowLoader(false);
        document.body.style.overflowY = "scroll";
      };
      window.addEventListener('load', handler);

      return () => {
        window.removeEventListener('load', handler);
      };
    } else {
      const timeout = window.setTimeout(() => {
        setShowLoader(false);
        document.body.style.overflowY = "scroll";
      }, 0);
      return () => window.clearTimeout(timeout);
    }
  }, [pathname]);

  useLayoutEffect(() => {
    if (!showLoader && minTime) {
      hideLoaderPill();
      const svg = typeof document !== 'undefined' && document.getElementById("burgerMenu");
      console.log(svg)
      setTimeout(() => svg.style.opacity = 1, 50)
    }
  }, [showLoader, minTime])

  const showLoaderPill = () => {
    gsap.to(".pillvid", {
      opacity: 1,
      scale: 1,
      transitionDuration: 0,
      display: "block",
    });
    gsap.to(".preloader", {
      opacity: 1,
      transitionDuration: 0,
      display: "flex",
    });
  }

  const hideLoaderPill = () => {
    gsap.to(".pillvid", {
      opacity: 0,
      scale: 4,
      transitionDuration: 0.4,
      display: "none",
    });
    gsap.to(".preloader", {
      opacity: 0,
      transitionDuration: 0.4,
      display: "none",
    });
  }

  return (
    <>
      <Loader />
      {children}
    </>
  );
};

const Loader = () => <Flex
  id="preloader"
  flexDir={'column'}
  h={'100vh'}
  w={'100vw'}
  className="preloader"
  bgColor={'#000'}
  pos="fixed"
  left="0"
  right="0"
  top="0"
  bottom="0"
>

  <Flex pos={'relative'} gap={'50px'} flexDir={'column'} alignItems={'center'}>
    <video autoPlay muted loop playsInline src="/videos/loader.mp4"
      style={{
        height: '400px',
        opacity: 0.1
      }}
      className={'pillvid'}
    >

    </video>
    {/* <Flex  mx={'auto'} overflow={'hidden'} w={{ base: "300px", lg: '400px'}} h={'10px'} borderRadius={'8px'} border={"1px solid #959595"} className='progressbarbox'>
      <Flex h={'100%'}bgColor={'#bbbbbb'} width={'0px'}transition={'width 1s ease-out'} className='progressbar'/>
    </Flex> */}
  </Flex>
</Flex>

export default LoaderProvider;
