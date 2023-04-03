import React, { PureComponent } from 'react';
import jsPDF from 'jspdf';

export default class GenerateReport extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    jsPdfGenerator = () => {
        var doc = new jsPDF();
        doc.text(20, 20, 'Default');
        doc.setFont("courier")
        doc.setFontSize(50)
        doc.text("There is more text", 10, 50);
        doc.save("Document.pdf");
    }
    render() {
        return (
            <button onClick={this.jsPdfGenerator}>Generate PDF</button>
        )
    }
}