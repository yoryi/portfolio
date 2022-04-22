// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta content="Jorgihno | Portfolio" property="title" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta name="description" content="Web site created using create-react-app" />
                    <link href="/favicon.png" rel="icon" type="image/png" />
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
