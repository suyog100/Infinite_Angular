import { Component, Renderer2, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  template: '', 
  styles: []    
})
export class Navbar implements OnInit {
  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private router: Router // ✅ Inject Router
  ) {}

  ngOnInit(): void {
    const nav = this.renderer.createElement('nav');
    this.renderer.setStyle(nav, 'display', 'flex');
    this.renderer.setStyle(nav, 'justify-content', 'space-between');
    this.renderer.setStyle(nav, 'align-items', 'center');
    this.renderer.setStyle(nav, 'backgroundColor', '#2c3e50');
    this.renderer.setStyle(nav, 'padding', '10px 20px');
    this.renderer.setStyle(nav, 'color', 'white');

    const logo = this.renderer.createElement('div');
    this.renderer.setStyle(logo, 'fontSize', '24px');
    this.renderer.setStyle(logo, 'fontWeight', 'bold');
    const logoText = this.renderer.createText('MyApp');
    this.renderer.appendChild(logo, logoText);

    const ul = this.renderer.createElement('ul');
    this.renderer.setStyle(ul, 'listStyle', 'none');
    this.renderer.setStyle(ul, 'display', 'flex');
    this.renderer.setStyle(ul, 'gap', '20px');

    const links = ['Home', 'Login', 'Services', 'Contact'];
    links.forEach(text => {
      const li = this.renderer.createElement('li');
      const a = this.renderer.createElement('a');
      this.renderer.setStyle(a, 'color', 'white');
      this.renderer.setStyle(a, 'textDecoration', 'none');
      this.renderer.setStyle(a, 'fontWeight', '500');
      this.renderer.setStyle(a, 'cursor', 'pointer');

      const linkText = this.renderer.createText(text);
      this.renderer.appendChild(a, linkText);
      this.renderer.appendChild(li, a);
      this.renderer.appendChild(ul, li);

      // ✅ Add click event for Login
      if (text === 'Login') {
        this.renderer.listen(a, 'click', () => {
          this.router.navigate(['users/addUser']);
        });
      }
      if (text === 'Home'){
        this.renderer.listen(a,'click',()=>{
          this.router.navigate(['/']);
        });
      }
    });

    this.renderer.appendChild(nav, logo);
    this.renderer.appendChild(nav, ul);
    this.renderer.appendChild(this.el.nativeElement, nav);
  }
}
