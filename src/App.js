import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    items: [],
    currentItemIndex: 0
  };

  myRef = [];
  isScrolling = null;

  componentDidMount() {
    const { items } = this.state;
    for (let i = 1; i <= 10; i++) {
      items.push({
        id: "i" + i,
        label: "item " + i,
      });
    }
    this.setState({ items });
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = e => {
    this.myRef.forEach((ref, i) => {
      if (ref) {
        if (ref.getBoundingClientRect().y < 300 && ref.getBoundingClientRect().y > -200) {
          this.setState({ currentItemIndex: i });
        }
      }
    })
    
  //   window.clearTimeout( this.isScrolling );

	// // Set a timeout to run after scrolling ends
	// this.isScrolling = setTimeout(() => {
	// }, 30);
    
  }

  _onLinkClick = (item, itemIndex) => {
    let { currentItem } = this.state;
    console.log('item :>> ', item);
    if (itemIndex === 4) {
    }
    this.scrollToMyRef(itemIndex);
    this.setState({ currentItemIndex: itemIndex });
  }

  scrollToMyRef = (itemIndex) => window.scrollTo(0, this.myRef[itemIndex].offsetTop-60)

  render() {
    const { items, currentItemIndex } = this.state;
    return (
      <>
        <div
          style={{
            padding: "20px 60px 20px 20px",
            border: "1px solid black",
            position: "fixed",
            top: 0,
            left: 0,
          }}
        >
          <ul>
            {items.map((item, itemIndex) => (
              <li onClick={() => this._onLinkClick(item, itemIndex)} key={item.id} className={itemIndex === currentItemIndex? "activeLink": ""}>{item.label}</li>
            ))}
          </ul>
        </div>
        <div
          style={{
            padding: "20px 60px 800px 300px",
          }}
        >
          {items.map((item, itemIndex) => (
            <div
              style={{
                height: 500,
                width: 700,
                backgroundColor: "yellow",
                margin: 20,
              }}
              key={item.id}
              ref={ (ref) => {
                this.myRef[itemIndex] = ref
              }}
            >
              {item.label}
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default App;
