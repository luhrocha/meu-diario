import Document, {Html, Head, Main, NextScript} from 'next/document';
import React from 'react';

class MyDocument extends Document{
    render(): JSX.Element{
        return(
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                    <link href="https://fonts.googleapis.com/css2?family=DynaPuff:wght@400;700&family=Roboto+Serif:opsz,wght@8..144,400;8..144,700&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" /> 
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;