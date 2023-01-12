import { Component, OnInit, Renderer2 } from '@angular/core';
import { ApiService } from '../api.service';

declare var window: any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  ipAddress!: string;
  constructor(private api: ApiService,private renderer: Renderer2) { }

    // this.getIP();
  
  // getIP() {
  //   this.api.getIPAddress().subscribe((res: any) => {
  //     this.ipAddress = res.ip;
  //   });
  // }
  
  ngOnInit() {

    // var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();

    //   const script = this.render.createElement('script');
    //   this.render.setAttribute(script, 'async', 'true');
    //   this.render.setAttribute(script, 'src', 'https://embed.tawk.to/5c7969f6a726ff2eea5a2752/default');
    //   this.render.setAttribute(script, 'charset', 'UTF-8');
    //   this.render.setAttribute(script, 'crossorigin', '*');

    //   console.log(script);


    const script = `
    var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = 'https://embed.tawk.to/5c7969f6a726ff2eea5a2752/default';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      s0.parentNode.insertBefore(s1, s0);
    })();`;
    const el = this.renderer.createElement('script');
    el.text = script;
    this.renderer.appendChild(document.body, el);
  }


}
