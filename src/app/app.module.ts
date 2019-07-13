import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';

import{HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AddEmployeeComponent} from './app.addemployement';
import {ShowEmployeeComponent} from './app.showemployee';
import {SearchEmployeeComponent} from './app.searchemployee';
import {Routes,RouterModule} from '@angular/router';
import{MyPipe} from './app.myownpipe'

const routes:Routes=[
    { path: '', redirectTo: 'show', pathMatch: 'full' },
    {path:'add',component:AddEmployeeComponent},
    {path:'show',component:ShowEmployeeComponent},
    {path:'show/:id',component:ShowEmployeeComponent},
    {path:'search',component:SearchEmployeeComponent}
]


@NgModule({
    imports: [
        BrowserModule,FormsModule,RouterModule.forRoot(routes),HttpClientModule
        
    ],
    declarations: [
        ShowEmployeeComponent,AppComponent,AddEmployeeComponent,SearchEmployeeComponent,MyPipe
        
		],
    providers: [ ],
    bootstrap: [AppComponent]
})

export class AppModule { }