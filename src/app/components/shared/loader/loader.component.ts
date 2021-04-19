import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  constructor(private _globalService: GlobalService) { }
  isLoading: BehaviorSubject<any> = this._globalService.isLoading;
  ngOnInit(): void {
  }

}
