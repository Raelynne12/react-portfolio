import Header from "./components/Header";
import Main from "./components/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import GlobalStyle from "./components/GlobalStyle";
import AboutMe from "./components/AboutMe";
import MyPortfolio from "./components/MyPortfolio";
import List from "./components/Movie-app/List";
import Detail from "./components/Movie-app/Detail";
import ProfileDetail from "./components/Movie-app/ProfileDetail";
import SearchResult from "./components/Movie-app/SearchResult";
import NowPlaying from "./components/Movie-app/NowPlaying";
import YoutubeMain from "./components/Youtube-app/YoutubeMain";
import MainCenter from "./components/Netflix-app/MainCenter";
import Home from "./components/Mbti-app/Home";
import Question from "./components/Mbti-app/Question";
import Result from "./components/Mbti-app/Result";

function App() {
  return (
    <BrowserRouter>
      <div className="App" style={{ width: "100%" }}>
        <GlobalStyle></GlobalStyle>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Main></Main>}></Route>
          <Route path="/about" element={<AboutMe></AboutMe>} />
          <Route path="/my" element={<MyPortfolio></MyPortfolio>} />
          <Route path="/movie/popular" element={<List></List>} />
          <Route path="/detail/:id" element={<Detail></Detail>} />
          <Route path="/youtube" element={<YoutubeMain></YoutubeMain>} />
          <Route
            path="/profile/:id"
            element={<ProfileDetail></ProfileDetail>}
          />
          <Route path="/search" element={<SearchResult></SearchResult>} />
          <Route path="/movie/now" element={<NowPlaying></NowPlaying>} />
          <Route path="/netflix" element={<MainCenter></MainCenter>} />
          <Route path="/mbti" element={<Home></Home>} />
          <Route path="/mbti/question" element={<Question></Question>} />
          <Route path="/mbti/result" element={<Result></Result>} />
        </Routes>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
