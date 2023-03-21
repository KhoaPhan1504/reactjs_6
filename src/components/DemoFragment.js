import Column1 from "./Column1";
import Column2 from "./Column2";

const DemoFragment = (props) => {


    return (
        <div>
            <h1>Demo fragment</h1>
            <table border="1">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>quanghai</td>
                    </tr>
                    <tr>
                        {/* <td>2</td>
                        <td>tuananh</td>
                        <td>tuananh</td> */}
                        <Column1 />
                    </tr>
                    <tr>
                        {/* <td>2</td>
                        <td>tuananh</td>
                        <td>tuananh</td>
                        <td>tuananh</td> */}
                        <Column1 />
                        <Column2 />
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default DemoFragment;