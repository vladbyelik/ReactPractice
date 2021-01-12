import React, { useRef } from "react";
import Pdf from "react-to-pdf";

const PdfExample1 = () => {
  const ref = useRef("");

  return (
    <div className="container">
      <h2>React-PDF</h2>

      <div className="post" ref={ref}>
        <h3>Hi!</h3>

        <p className="post-text">
          lorem работает с текстом, но если контент центрировать его не будет
          видно в pdf файле. И еще библа не хочет работать с картинками
        </p>

        <a href="https://www.npmjs.com/package/react-to-pdf">
          LEARN how to use react-to-pdf!
        </a>

        <table className="table">
          <tbody>
            <tr>
              <td>tab1</td>
              <td>tab1</td>
              <td>tab1</td>
              <td>tab1</td>
              <td>tab1</td>
            </tr>
            <tr>
              <td>tab2</td>
              <td>tab2</td>
              <td>tab2</td>
              <td>tab2</td>
              <td>tab2</td>
            </tr>
          </tbody>
        </table>

        <img
          src="https://blog.matcharesident.com/wp-content/uploads/2019/07/iStock-944453634.jpg"
          alt="img-giod"
          style={{ width: "100px" }}
        />

        <div style={{ width: 500, height: 500, background: "blue" }} ref={ref}>
          zzz
        </div>
      </div>

      <Pdf targetRef={ref} filename="post.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Save as PDF</button>}
      </Pdf>
    </div>
  );
};

export default PdfExample1;
