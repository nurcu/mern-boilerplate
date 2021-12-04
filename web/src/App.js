import * as React from 'react'
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings
} from 'react-icons/fi';

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import Sidebar from "./components/Sidebar";

function App({ Component , pageProps}) {
  // 2. Use at the root of your app
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App