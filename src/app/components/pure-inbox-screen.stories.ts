
import { moduleMetadata } from '@storybook/angular';
import {CommonModule} from '@angular/common';
import { Store, NgxsModule } from '@ngxs/store';
import { TaskModule } from './task.module';

import { PureInboxScreenComponent } from './pure-inbox-screen.component';
import { TasksState } from '../state/task.state';
import {PureTaskListComponent} from './pure-task-list.component';
import {TaskComponent} from './task.component';

export default {
  title: 'PureInboxScreen',
  decorators: [
    moduleMetadata({
      imports: [CommonModule, NgxsModule.forRoot([TasksState]), TaskModule],
      providers: [Store]
    })
  ]
};
// inbox screen default state
export const Default = () => ({
  component: PureInboxScreenComponent
});

// inbox screen error state
export const error = () => ({
  component: PureInboxScreenComponent,
  props: {
    error: true
  }
});
