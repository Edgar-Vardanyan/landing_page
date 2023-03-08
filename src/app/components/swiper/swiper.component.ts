import { Component, OnInit, ViewChild } from '@angular/core';
import { delay, of, Subscription } from 'rxjs';
import { SwiperData } from 'src/app/shared/interfaces/swiper-data.model';
import { ResponsiveService } from 'src/app/shared/services/responsive.service';
import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from 'swiper';

SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss'],
})
export class SwiperComponent implements OnInit {
  @ViewChild('swiper', { static: false }) swiper?: any;

  slideIndex: number = 0;
  subscribtion: Subscription;

  dekstopImages: string[] = [
    '../../../assets/images/Screen_Seasonaxlaptop_content.png',
    '../../../assets/images/Screen_FS_1440.png',
    '../../../assets/images/Screen_Seasonax_1440.png',
  ];

  swiperData: SwiperData[] = [
    {
      header: 'Trading Central',
      description:
        'Gain free access to Trading Central and its trading signals, indicators, and risk management tools!',
      price: '$97 per month',
      account: 'with active HYCM Account',
      desktop: '../../../assets/images/Screen_Seasonaxlaptop_content.png',
    },
    {
      header: 'Financial Source',
      description:
        'Track market moving events in real time with Financial Source! Stay tuned into what’s moving the markets and uncover the reasons why.',
      price: '$149 per month',
      account: 'with active HYCM Account',
      desktop: '../../../assets/images/Screen_FS_1440.png',
    },
    {
      header: 'Seasonax',
      description:
        'Identify seasonal investment opportunities for more than 20,000 instruments with Seasonax!',
      price: '$97 per month',
      account: 'with active HYCM Account',
      desktop: '../../../assets/images/Screen_Seasonax_1440.png',
    },
  ];

  swiperRef: any;

  constructor(private responsiveService: ResponsiveService) {}

  ngOnInit(): void {
    if (this.responsiveService.mediaBreakpoint$.value === 'xl') {
      this.dekstopImages = [
        '../../../assets/images/1280_img/Screen_Seasonax1280_1.png',
        '../../../assets/images/1280_img/Screen_Seasonax1280_2.png',
        '../../../assets/images/1280_img/Screen_Seasonax1280_3.png',
      ];
    }
  }

  slideNext(): void {
    this.swiper.swiperRef.slideNext(1000);

    this.subscribtion = of([])
      .pipe(delay(500))
      .subscribe((results) => {
        this.slideIndex =
          this.swiper.elementRef.nativeElement.swiper.activeIndex;
      });
  }

  slidePrev(): void {
    this.swiper.swiperRef.slidePrev(1000);
    this.subscribtion = of([])
      .pipe(delay(500))
      .subscribe((results) => {
        this.slideIndex =
          this.swiper.elementRef.nativeElement.swiper.activeIndex;
      });
  }

  onSlideChange(): void {
    console.log(this.swiper.elementRef.nativeElement.swiper.activeIndex);
    this.slideIndex = this.swiper.elementRef.nativeElement.swiper.activeIndex;
  }

  ngOnDestroy(): void {
    this.subscribtion.unsubscribe();
  }
}
