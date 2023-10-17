import { Component } from '@angular/core';
import Typed from 'typed.js';
// import TypeIt from "typeit";
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {

  leftBarStatus:boolean = true;
  knowledgeBase:boolean = false;
  chatHistory:boolean = true;
  companyDocuments:boolean = false;
  searchResult:boolean = false
  snipetStatus:boolean = false;
  ngOnInit() {
    
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
    this.knowledgeBase = false; 
    this.chatHistory = true
    this.companyDocuments = false
  }
  companyDocumentsSelected(){
    this.knowledgeBase = false; 
    this.chatHistory = false
    this.companyDocuments = true
  }
  closeLeftbar(){
    this.leftBarStatus = false
  }
  openLeftbar(){
    this.leftBarStatus = true
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
    this.snipetStatus = true;
    this.closeLeftbar();
  }
  snippetDeselected(){
    this.snipetStatus = false;
    this.openLeftbar()
  }
}
