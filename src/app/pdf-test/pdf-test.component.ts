import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import jspdf from 'jspdf';

@Component({
  selector: 'app-pdf-test',
  templateUrl: './pdf-test.component.html',
  styleUrls: ['./pdf-test.component.css']
})
export class PdfTestComponent implements OnInit {

  USERS = [
    {
      "id": 1,
      "name": "Ahmed",
      "email": "sahmed@ahmed",
      "phone": "12345679"
    },
    {
      "id": 2,
      "name": "Angular",
      "email": "angular@angular",
      "phone": "46987613"
    },
    {
      "id": 3,
      "name": "PDF",
      "email": "pdf@pdf",
      "phone": "59798413",
    },
    {
      "id": 4,
      "name": "Test",
      "email": "test@test",
      "phone": "498743"
    }
  ];


  constructor() { }

  ngOnInit() {
  }

  openPDF(){
    let DATA: any = document.getElementById('htmlData');
    html2canvas(DATA).then((canvas) => {
    let fileWidth = 208;
    let fileHeight = (canvas.height * fileWidth) / canvas.width;
    const FILEURI = canvas.toDataURL('image/png');
    let PDF = new jsPDF('p', 'mm', 'a4');
    let position = 0;
    PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
    window.open(PDF.output('bloburl'))
  });
  }


  downoldPDF(): void {
    let DATA: any = document.getElementById('htmlData');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('angular-demo.pdf');
    });

  }

}
