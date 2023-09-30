import type { AppProps } from "next/app";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import store from "@/redux/store";
import {ChakraProvider} from '@chakra-ui/react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}
