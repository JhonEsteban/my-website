import {
  BrowserRouter,
  HashRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Layout from '../components/Layout';

import AboutMe from '../pages/AboutMe';
import Projects from '../pages/Projects';
import Project from '../pages/Project';
import ContactMe from '../pages/ContactMe';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <HashRouter>
        <Layout>
          <Switch>
            <Route exact path='/about-me' component={AboutMe} />
            <Route exact path='/projects' component={Projects} />
            <Route exact path='/projects/:projectId' component={Project} />
            <Route exact path='/contact-me' component={ContactMe} />
            <Redirect to='/about-me' />
          </Switch>
        </Layout>
      </HashRouter>
    </BrowserRouter>
  );
};

export default AppRouter;
