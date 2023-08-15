import { BrowserRouter, Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routes";
import MainLayout, { MainLayoutProps } from "./layout/components/MainLayout/MainLayout";


function App() {
  return (
    <div className="App ">
      <BrowserRouter>
        <Routes>
        {
          publicRoutes.map((route, index) =>{
            let Layout = MainLayout;
            if(route.layout){
              Layout=route.layout;

            }else if(route.layout ===null){
              Layout = (props: MainLayoutProps)=> <>{props.children}</>

            }
            const Page = route.component
            return(
              <Route key={index} path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
              />
            )

          })
        }
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
