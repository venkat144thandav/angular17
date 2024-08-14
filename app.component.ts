import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {  
  title = 'signals';
  readonly name = signal('World');

  readonly version = signal('check');
  readonly message = computed(() => {
    return `Hello ${this.name()}! and the ${this.version()}`;
  });
  constructor(public router:Router){}
  versionChange(){
    this.version.set('changed')
  }
  navigate(){
    this.router.navigate(['users'])
  }
}
