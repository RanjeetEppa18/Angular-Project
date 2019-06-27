import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Udemy'
  text = 'Hello World'
  showDetails = true
  username = 'Ranjeet Eppakayala'
  constructor() { }

  ngOnInit() {
  }

  getClasses(){
    let classes = {
      'btn' : true,
      'btn-primary': true
    }

    return classes
  }

  toogleDetails(){
    this.showDetails = !this.showDetails
  }

}
