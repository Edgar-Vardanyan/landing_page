import { Component, HostListener, OnInit } from '@angular/core';
import { ResponsiveService } from 'src/app/shared/services/responsive.service';

@Component({
  selector: 'app-open-account',
  templateUrl: './open-account.component.html',
  styleUrls: ['./open-account.component.scss'],
})
export class OpenAccountComponent implements OnInit {
  screenWidth: string = '';

  currencyData: any[] = [
    {
      imgPath: '../../../assets/images/Forexeur.svg',
      innerText: 'EUR/USD',
    },
    {
      imgPath: '../../../assets/images/Forexcad.svg',
      innerText: 'CAD/JPY',
    },
    {
      imgPath: '../../../assets/images/Forexusd.svg',
      innerText: 'GBP/USD',
    },
    {
      imgPath: '../../../assets/images/Forexeurchf.svg',
      innerText: 'EUR/CHF',
    },
    {
      imgPath: '../../../assets/images/Forexaud.svg',
      innerText: 'AUD/USD',
    },
    {
      imgPath: '../../../assets/images/Forexnok.svg',
      innerText: 'NOK/JPY',
    },
  ];

  constructor(private responsiveService: ResponsiveService) {}

  ngOnInit(): void {
    this.screenWidth = this.responsiveService.mediaBreakpoint$.value;
    console.log(this.screenWidth);
  }
}
