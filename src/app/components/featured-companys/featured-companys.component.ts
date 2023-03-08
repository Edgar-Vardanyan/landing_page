import { Component, OnInit } from '@angular/core';
import { ResponsiveService } from 'src/app/shared/services/responsive.service';

@Component({
  selector: 'app-featured-companys',
  templateUrl: './featured-companys.component.html',
  styleUrls: ['./featured-companys.component.scss'],
})
export class FeaturedCompanysComponent implements OnInit {
  companyData: any[] = [
    {
      imgPath: '../../../assets/images/Reuters_Logo.png',
    },
    {
      imgPath: '../../../assets/images/Yahoo_Finance_Logo.png',
    },
    {
      imgPath: '../../../assets/images/FXStreet_logo.png',
    },
    {
      imgPath: '../../../assets/images/NASDAQ_Logo.png',
    },
    {
      imgPath: '../../../assets/images/FXEmpire_logo.png',
    },
    {
      imgPath: '../../../assets/images/Investing_Logo.png',
    },
  ];

  screenWidth: string = '';

  constructor(private responsiveService: ResponsiveService) {}

  ngOnInit(): void {
    this.screenWidth = this.responsiveService.mediaBreakpoint$.value;
  }
}
