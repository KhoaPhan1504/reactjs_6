import './App.css';
import ClassComponentWithDefaultProps from './components/ClassComponentWithDefaultProps';
import DemoClassComponent from './components/DemoClassComponent';
import DemoFragment from './components/DemoFragment';
import DemoFunctionComponent from './components/DemoFunctionComponent';
import Form from './components/form/Form';
import FormControlInput from './components/FormControllnput';
import FunctionComponentWithDefaultProps from './components/FunctionComponentWithDefaultProps';
import Signin from './pages/signin/Singin';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home/Home';
import Signup from './pages/signup/Signup';
import ListPerson from './components/Router&ContainerUI/ListPerson';
import PersonDetail from './components/Router&ContainerUI/PersonDetail';

function App() {
    const persons = [
        {
            id: 1,
            firstName: 'Nguyen Quang',
            lastName: "Hai",
            age: 25
        },
        {
            id: 2,
            firstName: 'Nguyen Tuan',
            lastName: "Anh",
            age: 27
        },
        {
            id: 3,
            firstName: 'Doan Van',
            lastName: "Hau",
            age: 23
        }
    ]
    return (
        <Router>
            <div className='App'>
                <Switch>
                    {/* <Route path='/' exact component={Home} />
                    <Route path='/signin' component={Signin} />
                    <Route path='/signup' component={Signup} /> */}

                    <Route path='/signin' component={Signin} />
                    <Route path='/signup' component={Signup} />
                    
                    {/* <Route path='/persons' component={ListPerson} /> */}

                    
                    <Route 
                        path='/persons/:id' 
                        render={
                            routeProps => 
                            <PersonDetail {...routeProps} persons={persons}/>
                        } 
                    />

                    <Route 
                        path='/persons' 
                        render={
                            routeProps => 
                            <ListPerson {...routeProps} persons={persons}/>
                        } 
                    />

                    <Route path='/' component={Home} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
