import React, { Component } from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

import { PDFDownloadLink } from "@react-pdf/renderer";

class PdfExample2 extends Component {
  constructor() {
    super();
    this.state = {
      styles: {}, // all styles here
    };
  }

  MyDocument = () => (
    <Document>
      <Page style={this.state.styles.body}>
        <Text style={this.state.styles.header} fixed>
          ~ Created with react-pdf ~
        </Text>
      </Page>
    </Document>
  );

  render() {
    return (
      <>
        <button onClick={() => (this.MyDocument, `${__dirname}/example.pdf`)}>
          Print PDF
        </button>

        <PDFDownloadLink document={() => this.MyDocument} fileName={"FileName"}>
          <button> Download pdf </button>
        </PDFDownloadLink>
      </>
    );
  }
}
// export default CreatePdf;

export default PdfExample2;
