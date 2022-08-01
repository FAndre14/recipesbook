import React from "react";
import HTMLFlipBook from "react-pageflip";
import "./book.css";

const width = 300;
const height = 200;

const Page = React.forwardRef((props, ref) => {
    return (
      <div className="demoPage" ref={ref}>
        <h1>Page Header</h1>
        <p>{props.children}</p>
        <p>Page number: {props.number}</p>
      </div>
    );
  });

const Book = () => {
  return (
    <HTMLFlipBook width={width} height={height} maxHeight={2*height} maxWidth={2*width} className="RecipesBook" size="fixed">
        <Page number={1}>Page text 1 </Page>
        <Page number={2}>Page text 2 </Page>
        <Page number={3}>Page text 3 </Page>
        <Page number={4}>Page text 4 </Page>
        <Page number={5}>Page text 5 </Page>
    </HTMLFlipBook>
  )
}

export default Book;
