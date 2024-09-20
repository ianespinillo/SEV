import { Component, Input, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

import { Signal } from '../../interface/signal.interface';
import { SignalService } from '../../services/api.service';


@Component({
  selector: 'app-ManualSeñales',
  templateUrl: './ManualSeñales.component.html',
  styleUrls: ['./ManualSeñales.component.css']
})
export class ManualSeñalesComponent implements OnInit {


  public signals: Signal[] = [];

  constructor(private SignalService: SignalService) { }

  ngOnInit(): void
  {
    this.loadSignal();
  }

  private loadSignal(): void {
    this.SignalService.getAllSignals().subscribe
      (
        (signals: Signal[]) => { this.signals = signals; },
        error => {
          console.log('Error fetching signals', error);
        }
      )
  }

}
