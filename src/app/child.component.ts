import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: 'child.component.html',
  styleUrls: ['child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent implements DoCheck, OnInit {
  @Input() players$;
  players;

  constructor(private cdr: ChangeDetectorRef) {}

  // Both the below implementations works !!!

  ngDoCheck() {
    // this.players$.subscribe((data) => {
    //   this.players = data;
    //   this.cdr.markForCheck();
    // });
  }

  ngOnInit() {
    this.players$.subscribe((data) => {
      this.players = data;
      this.cdr.markForCheck();
    });
  }
}
