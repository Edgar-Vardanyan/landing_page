import { Component, OnInit } from '@angular/core';
import { ResponsiveService } from 'src/app/shared/services/responsive.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  screenWidth: string = '';

  constructor(private responsiveService: ResponsiveService) {}

  ngOnInit(): void {
    this.screenWidth = this.responsiveService.mediaBreakpoint$.value;
  }
}
