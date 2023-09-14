"use client"
// import React, { useState, useEffect } from 'react';
// import { Box, Text, Image, Divider, Button } from '@chakra-ui/react';
// import './HeroSection.css';

// interface SliderItem {
//   image: string;
//   heading: string;
//   desc: string;
// }

// const sliderData: SliderItem[] = [
//   {
//     image: "./images/slide1.jpg",
//     heading: "Slide One",
//     desc: "This is the description of slide one Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi quos quas, voluptatum nesciunt illum exercitationem.",
//   },
//   {
//     image: "./images/slide2.jpg",
//     heading: "Slide Two",
//     desc: "This is the description of slide two Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi quos quas, voluptatum nesciunt illum exercitationem.",
//   },
//   {
//     image: "./images/slide3.jpg",
//     heading: "Slide Three",
//     desc: "This is the description of slide three Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi quos quas, voluptatum nesciunt illum exercitationem.",
//   },
// ];

// const HeroSection: React.FC = () => {
//   const [currentSlide, setCurrentSlide] = useState<number>(0);
//   const [isPaused, setIsPaused] = useState<boolean>(false);
//   const slideLength: number = sliderData.length;

//   const autoScroll: boolean = true;
//   let slideInterval: NodeJS.Timeout | null = null;
//   const intervalTime: number = 5000;

//   const togglePause = () => {
//     setIsPaused(!isPaused);
//   };

//   const nextSlide = () => {
//     if (!isPaused) {
//       setCurrentSlide((prevSlide) => (prevSlide === slideLength - 1 ? 0 : prevSlide + 1));
//     }
//   };

//   function auto() {
//     slideInterval = setInterval(() => {
//       if (!isPaused) {
//         nextSlide();
//       }
//     }, intervalTime);
//   }

//   useEffect(() => {
//     setCurrentSlide(0);
//   }, []);

//   useEffect(() => {
//     if (autoScroll) {
//       auto();
//     }
//     return () => {
//       if (slideInterval) {
//         clearInterval(slideInterval);
//       }
//     };
//   }, [currentSlide, isPaused]);

//   return (
//     <Box className='slider'>
//       {sliderData.map((slide, index) => {
//         return (
//           <Box
//             className={index === currentSlide ? "slide current" : "slide"}
//             key={index}
//           >
//             {index === currentSlide && (
//               <>
//                 <Image src={slide.image} alt={slide.heading} />
//                 <Box className='content'>
//                   <Text as={'h2'}>{slide.heading}</Text>
//                   <Text as={'p'}>{slide.desc}</Text>
//                   <Divider />
//                   <Button>CHAT WITH US</Button>
//                   {/* Add pause button */}
//                   <Button ml={'10px'} onClick={togglePause}>
//                     {isPaused ? 'Resume' : 'Pause'}
//                   </Button>
//                 </Box>
//               </>
//             )}
//           </Box>
//         );
//       })}
//     </Box>
//   );
// };

// export default HeroSection;


import React, { useState, useEffect } from 'react';
import { Box, Text, Image, Divider, Button } from '@chakra-ui/react';
import './HeroSection.css';

interface SliderItem {
  image: string;
  heading: string;
  desc: string;
}

const sliderData: SliderItem[] = [
  {
        image: "./images/slide1.jpg",
        heading: "Slide One",
        desc: "This is the description of slide one Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi quos quas, voluptatum nesciunt illum exercitationem.",
      },
      {
        image: "./images/slide2.jpg",
        heading: "Slide Two",
        desc: "This is the description of slide two Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi quos quas, voluptatum nesciunt illum exercitationem.",
      },
      {
        image: "./images/slide3.jpg",
        heading: "Slide Three",
        desc: "This is the description of slide three Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi quos quas, voluptatum nesciunt illum exercitationem.",
      },
];

const Slide: React.FC<{
  slide: SliderItem;
  isCurrent: boolean;
  togglePause: () => void;
  isPaused: boolean;
}> = ({ slide, isCurrent, togglePause, isPaused }) => {
  return (
    <Box className={isCurrent ? 'slide current' : 'slide'}>
      {isCurrent && (
        <>
          <Image src={slide.image} alt={slide.heading} />
          <Box className='content'>
            <Text as={'h2'}>{slide.heading}</Text>
            <Text as={'p'}>{slide.desc}</Text>
            <Divider />
            <Button>CHAT WITH US</Button>
            {/* Add pause button */}
            <Button ml={'10px'} onClick={togglePause}>
              {isPaused ? 'Resume' : 'Pause'}
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const slideLength: number = sliderData.length;

  const autoScroll: boolean = true;
  let slideInterval: NodeJS.Timeout | null = null;
  const intervalTime: number = 5000;

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  const nextSlide = () => {
    if (!isPaused) {
      setCurrentSlide((prevSlide) => (prevSlide === slideLength - 1 ? 0 : prevSlide + 1));
    }
  };

  function auto() {
    slideInterval = setInterval(() => {
      if (!isPaused) {
        nextSlide();
      }
    }, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => {
      if (slideInterval) {
        clearInterval(slideInterval);
      }
    };
  }, [currentSlide, isPaused]);

  return (
    <Box className='slider'>
      {sliderData.map((slide, index) => (
        <Slide
          key={index}
          slide={slide}
          isCurrent={index === currentSlide}
          togglePause={togglePause}
          isPaused={isPaused}
        />
      ))}
    </Box>
  );
};

export default HeroSection;
