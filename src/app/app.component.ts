import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  players$ = new BehaviorSubject(['Virat', 'Dhoni', 'Sharma']);

  onAddNewPlayer(ipRef) {
    //this.players.push(ipRef.value);
    const newPlayers = [...this.players$.value, ipRef.value];
    this.players$.next(newPlayers);
    ipRef.value = '';
  }
}
