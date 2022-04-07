import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import MainRouter from 'containers/MainRouter/MainRouter';
import { BrowserRouter as Router } from 'react-router-dom';

import Layout from './components/Layout/Layout';

function App(): JSX.Element {
  return (
    <Router>
      <Layout footer={<Footer />} header={<Header />}>
        <MainRouter />
      </Layout>
    </Router>
  );
}

export default App;
