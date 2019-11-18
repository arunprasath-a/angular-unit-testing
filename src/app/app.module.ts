import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';

import { UserService } from './user/user.service';
import { UserAsyncComponent } from './user-async/user-async.component';
import { GitTestComponentComponent } from './git-test-component/git-test-component.component';
import { Git2Component } from './git2/git2.component';
import { AxiosFetchComponent } from './axios-fetch/axios-fetch.component';

@NgModule({
  declarations: [AppComponent, UserComponent, UserAsyncComponent, GitTestComponentComponent, Git2Component, AxiosFetchComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
