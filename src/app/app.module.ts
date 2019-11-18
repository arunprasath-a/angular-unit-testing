import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';

import { UserService } from './user/user.service';
import { UserAsyncComponent } from './user-async/user-async.component';
import { GitTestComponentComponent } from './git-test-component/git-test-component.component';

@NgModule({
  declarations: [AppComponent, UserComponent, UserAsyncComponent, GitTestComponentComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
