import HeroSection from "@/components/Hero";
import NavBar from "@/components/NavBar";
import { ChakraProvider } from "@chakra-ui/react";


export default function Home() {
  return (
    <ChakraProvider>
     <main>
    <NavBar />
    <HeroSection />
       </main>
  </ChakraProvider>
  )
}
