import { Component, OnInit } from '@angular/core';
import { Tab } from '../shared/tab-enum';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  Tab = Tab; // Needed to get access to this enum type
  public selectedTab: Tab = Tab.Editor; // Editor is the default tab

  // Controls the nav-bars sub-nav
  subNavActive = false;

  constructor() { }

  ngOnInit() {
  }

  // Controls the switching of nav tabs
  tabsChanged(tab: Tab) {
    this.selectedTab = tab;
  }

  // Controls the nav's dropdown
  public onSubNavClick() {
    this.subNavActive = !this.subNavActive;
  }

}
