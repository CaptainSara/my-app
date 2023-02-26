 import { BrowserRouter, Routes, Route } from "react-router-dom";
 import {ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client"

 import HomePage from "./pages/HomePage"
 import InfoPage from "./pages/InfoPage"
 import Header from "./components/Header";

 //Apolo client
 const client = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache()
 })

function App() {
  return (
    <div className="App">   
    
      <BrowserRouter>
        <ApolloProvider client={client}>
          <Header/>
            <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/info-page" element={<InfoPage/>}/>
            </Routes>
        </ApolloProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
