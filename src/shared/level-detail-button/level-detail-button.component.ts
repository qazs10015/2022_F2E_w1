import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-level-detail-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './level-detail-button.component.html',
  styleUrls: ['./level-detail-button.component.scss']
})
export class LevelDetailButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
