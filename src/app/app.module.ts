import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatTabsModule} from '@angular/material/tabs';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TodayWeatherComponent } from './components/today-weather/today-weather.component';
import { FivedaysWeatherComponent } from './components/fivedays-weather/fivedays-weather.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptor } from './interceptors/loader.interceptor';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { LoaderComponent } from './components/shared/loader/loader.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { FormsModule } from '@angular/forms';
import { ChartsExampleComponent } from './components/charts-example/charts-example.component';
import { Ng2ChartsExampleComponent } from './components/ng2-charts-example/ng2-charts-example.component';
import { HighChartsComponent } from './components/high-charts/high-charts/high-charts.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { LineChartComponent } from './components/high-charts/line-chart/line-chart.component';
import { AreaChartsComponent } from './components/high-charts/area-charts/area-charts.component';



@NgModule({
  declarations: [
    AppComponent,
    TodayWeatherComponent,
    FivedaysWeatherComponent,
    LoaderComponent,
    ChartsExampleComponent,
    Ng2ChartsExampleComponent,
    HighChartsComponent,
    LineChartComponent,
    AreaChartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    NoopAnimationsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    FormsModule,
    HighchartsChartModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
