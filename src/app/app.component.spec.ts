import { TestBed, async } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';

import {CommonModule} from '@angular/common';
import {TaskModule} from './components/task.module';
import {TasksState} from './state/task.state';


import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [CommonModule, TaskModule, NgxsModule.forRoot([TasksState])],
      providers: [Store]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
