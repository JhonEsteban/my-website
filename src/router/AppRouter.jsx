import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter,
  Redirect,
} from 'react-router-dom';

import Layout from '../components/layout/Layout';
import AboutMe from '../pages/aboutMe/AboutMe';
import Projects from '../pages/projects/Projects';
import ContactMe from '../pages/contactMe/ContactMe';

const AppRouter = () => {
  return (
    <Router>
      <HashRouter>
        <Layout>
          <Switch>
            <Route exact path='/about-me' component={AboutMe} />
            <Route exact path='/projects' component={Projects} />
            <Route exact path='/contact-me' component={ContactMe} />
            <Redirect to='/about-me' />
          </Switch>
        </Layout>
      </HashRouter>
    </Router>
  );
};

export default AppRouter;
