import GrandParentComponent from "../../components/context/GrandParentCoponent";
import ParentManageState from "../../components/sharedata/ParenManageState";
import ParentComponent from "../../components/sharedata/ParentCoponent";

const Home = props => {
    return(
        <div className="home">
            <h1>This is home page</h1>
            <hr></hr>
            <h1>Buoi5 Share Data</h1>
            <ParentComponent />
            <ParentManageState />
            <GrandParentComponent />
        </div>
    )
}

export default Home;