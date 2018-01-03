import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { Pagination } from './components/home/home.component';
import { CounterComponent } from './components/counter/counter.component';
//import { EServices } from './Services/services';

export const sharedConfig: NgModule = {
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        Pagination
    ],
    //providers: [EServices],
    imports: [
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: Pagination },
            { path: 'counter', component: CounterComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
};
