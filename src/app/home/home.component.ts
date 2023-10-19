import { Component } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  leftBarStatus:boolean = true;
  knowledgeBase:boolean = false;
  chatHistory:boolean = true;
  companyDocuments:boolean = false;
  searchResult:boolean = false
  snippetfullView:boolean = false;
  snippethalfView:boolean = false;
  snippethalfViewSummary:boolean = false;
  snippethalfViewSnippet:boolean = false;
  pdfViewStatus:boolean = false;
  summaryItemInactive:boolean = false;
  ngOnInit() {
    this.resetAll()
  }
  resetAll(){
    this.pdfViewClose();
    this.openLeftbar();
    this.snippetDeselected();
    this.snippethalfViewClose();
  }
  knowledgeBaseSelected(){
   this.knowledgeBase = !this.knowledgeBase; 
  //  this.chatHistory = false
  //  this.companyDocuments = false
  }
  knowledgeBaseReset(){
    this.knowledgeBase = false; 
  }
  chatHistorySelected(){
    this.chatHistory = true
    this.companyDocuments = false
  }
  companyDocumentsSelected(){
    this.chatHistory = false
    this.companyDocuments = true
  }
  closeLeftbar(){
    this.leftBarStatus = false
  }
  openLeftbar(){
    this.leftBarStatus = true;
    // document.body.classList.add('slide-left');
    // document.getElementsByClassName('left-sidebar')
    // // document.getElementById("loader_wrapper").classList.add("show");
  }
  toggleLeftbar(){
    this.leftBarStatus = !this.leftBarStatus
  }
  typedjs(){
    const options = {
      strings: [
        'In the last quarter, Microsofts cloud business performed strongly. According to CEO Satya Nadella, the Microsoft Cloud generated over $28 billion in quarterly revenue, representing a 22% growth (25% in constant currency). This demonstrates Microsofts continued leadership in the tech stack. Azure, Microsofts cloud computing platform, gained market share as customers chose their computing fabric for both cloud and edge applications. Azures success can be attributed to its ability to power AI-driven applications.'
      ],
      typeSpeed: 5,
      back:false,
      backSpeed: 20,
      showCursor: false,
      // cursorChar: '|',
      loop: false,
    };
    const typed = new Typed('.typed-element', options);
  }
  searchResultActive(){
    this.searchResult = true;
    this.typedjs();
  }
  snippetSelected(){
    this.snippetfullView = true;
    this.summaryItemInactive = true;
    this.closeLeftbar();
  }
  snippetDeselected(){
    this.snippetfullView = false;
    this.summaryItemInactive = false
    this.openLeftbar()
  }
  pdfViewOpen(){
    this.pdfViewStatus = true;
    this.snippethalfView = true;
    this.snippetfullView = false;
    this.summaryItemInactive = true
  }
  snippethalfViewOpen(){
    this.snippethalfView = true;
  }
  snippethalfViewClose(){
    this.snippethalfView = false;
  }
  snippetView(){
    this.snippethalfViewSummary = false
    // this.summaryHalfView = false
  }
  summaryView(){
    this.snippethalfViewSummary = true
  }
  pdfViewClose(){
    this.pdfViewStatus = false;
    this.snippethalfView = false;
    this.snippetfullView = true;
    this.summaryItemInactive = false
  }
}
