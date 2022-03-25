import {Route, Routes} from "react-router-dom"
import { AddProductPanel, EditProductPanel, AllProductsPanel } from "./components/panels";
import {LoginPage, DashboardPage, PageNotFound} from './pages';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="dashboard" element={<DashboardPage/>}>
          <Route index element={<AllProductsPanel title="All Products"/>}/>
          <Route path="add" element={<AddProductPanel title="Add Product"/>}/>
          <Route path="edit" element={<EditProductPanel title="Edit Product"/>}/>
        </Route>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </> 
  );
}

export default App;