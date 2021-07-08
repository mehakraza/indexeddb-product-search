import { Layout } from 'antd';
import SearchBar from '../SearchBar';
import ProductGrid from '../ProductGrid';
import './index.css';


const { Header, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header>Crealytics</Header>
      <Content>
        <SearchBar />
        <ProductGrid />
      </Content>
    </Layout>
  );
}

export default App;
