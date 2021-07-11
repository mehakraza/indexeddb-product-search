import { Layout } from 'antd';
import SearchBar from '../SearchBar';
import ProductGrid from '../ProductGrid';
import './index.css';


const { Header, Content } = Layout;

function App() {
  return (
    <div className="app">
      <Layout>
        <Header className="app__header">Crealytics</Header>
        <Content className="app__content">
          <SearchBar />
          <ProductGrid />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
