import Layout from '../components/MyLayout.js'
import HeaderLayout from '../components/HeaderLayout'

export default () => (
    <div>
        <HeaderLayout />
        <Layout>
            <body>
                <div className="flex-container">
                    <div className="flex-item">
                        <h2>Not so lost in space</h2>
                        <p>This item sits right in the middle of its container, regardless of the dimensions of either.</p>
                    </div>
                </div>

            </body>

            <style jsx> {`
                html, body {
                    height: 100%;
              }
    body {
                    margin: 0;
                font-family: Avenir Next, Avenir, Franklin Gothic, sans-serif;
              }
    .flex-container {
                    height: 100%;
                display: -webkit-flex;
                display: -ms-flexbox;
                display: -webkit-box;
                display: -moz-box;
                display: flex;
                -webkit-flex-direction: column;
                    -ms-flex-direction: column;
                        -webkit-box-orient: vertical;
                        -webkit-box-direction: normal;
                           -moz-box-orient: vertical;
                           -moz-box-direction: normal;
                        flex-direction: column;
                -webkit-justify-content: center;
                -ms-flex-pack: center;
                -webkit-box-pack: center;
                   -moz-box-pack: center;
                        justify-content: center;
                -webkit-align-items: center;
                     -ms-flex-align: center;
                        -webkit-box-align: center;
                           -moz-box-align: center;
                        align-items: center;
                background-color: #12459e;
              }
    .flex-item {
                    max - width: 25em;
                padding: 2em;
                margin: 1em;
                background-color: #fff;
              }
`}  </style>

        </Layout>
    </div>
)