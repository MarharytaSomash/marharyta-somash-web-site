import "../styles/globals.scss";
import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Loader from "../components/Loader";
import { Provider } from "react-redux";
import { AppProps } from "next/app";
import store from "../store";

function App({ Component, pageProps }: AppProps) {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => setLoading(false), 4000);
    }, []);

    return (
        <>
            <Provider store={store}>
                {loading ? (
                    <Loader />
                ) : (
                    <Layout>
                        <main>
                            <Component {...pageProps} />
                        </main>
                    </Layout>
                )}
            </Provider>
        </>
    );
}
export default App;
