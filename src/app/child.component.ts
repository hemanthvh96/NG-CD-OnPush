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
export class ChildComponent implements DoCheck {
  @Input() players$;
  players;

  constructor(private cdr: ChangeDetectorRef) {}

  ngDoCheck() {
    this.players$.subscribe((data) => {
      this.players = data;
      this.cdr.markForCheck();
    });
  }
}
