import React from "react";
import ReactDOM from "react-dom";
import "./reset.css";
import "./index.css";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { BasketProvider } from "./contexts/BasketContext";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnMount: false,
            refetchOnWindowFocus: false,
        },
    },
});
ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <ChakraProvider>
                    <AuthProvider>
                        <BasketProvider>
                            <App />
                        </BasketProvider>
                    </AuthProvider>
                </ChakraProvider>
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
