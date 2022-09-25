import { Component, OnInit } from '@angular/core';
import { LayoutObserverService } from '../../services/layout/layout-observer.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  constructor(private layoutObserverService:LayoutObserverService) { }

  ngOnInit(): void {

  }
  toggleMenu(){
    this.layoutObserverService.toogleShow()
  }
}
