import { Component, OnInit } from '@angular/core';
import { Tab } from '../../shared/tab-enum';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  Tab = Tab;
  public selectedTab: Tab = Tab.Editor;

  subNavActive = true;

  constructor() { }

  ngOnInit() {
  }

  tabsChanged(tab: Tab) {
    this.selectedTab = tab;
  }

  public onSubNavClick() {
    this.subNavActive = !this.subNavActive;
  }

}
