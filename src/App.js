import logo from './logo.svg';
import './App.css';
import Header from "./myComponent/header";
import Banner from './myComponent/banner';
import reactDom from 'react-dom';
import React from 'react';
import Widget from "./myComponent/widget";
import Footer from "./myComponent/footer";

function App() {
  let widget=[
    {
      title: "Free to download",
      desc: "As always, Start Bootstrap has a powerful collectin of free templates."
    },
    {
      title: "Jumbotron hero header",
      desc: "The heroic part of this template is the jumbotron hero header!" 
    },
    {
      title: "Feature boxes",
      desc: "We've created some custom feature boxes using Bootstrap icons!" 
    },
  ]
  return (
    <React.Fragment>
      <Header />
      <Banner />
      <section className="pt-4">
        <div className="container px-lg-5">
          <div className="row gx-lg-5">
           {widget.map(function(ele,index){
              return <Widget title={ele.title} desc={ele.desc} key={index} />
           })} 
            {/* <Widget title={"Free to download"} desc={"As always, Start Bootstrap has a powerful collectin of free templates."}  />
            <Widget title={"Jumbotron hero header"} desc={"The heroic part of this template is the jumbotron hero header!"} />
            <Widget title={"Feature boxes"} desc={"We've created some custom feature boxes using Bootstrap icons!"} />
            <Widget title={"Simple clean code"} desc={"We keep our dependencies up to date and squash bugs as they come!"} /> */}
            <Footer/>
          </div>
        </div>
      </section>
    </React.Fragment>

  );
}

export default App;
