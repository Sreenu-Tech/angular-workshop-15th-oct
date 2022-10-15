import { Component, ElementRef, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {

  value: string = '';
  nonSanitizeHTML: any;

  youtubeUrl:any;

  constructor(private sanitize: DomSanitizer) { }

  ngOnInit(): void {
  }

  showValue() {
    this.nonSanitizeHTML = this.sanitize.bypassSecurityTrustHtml(this.value);
  }

  showVideo(){
   const txtVideo=  document.getElementById('txtVideo') as any;
   eval(txtVideo.value)
    //this.youtubeUrl= this.sanitize.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.value}`);
  }

}
