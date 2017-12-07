import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Home } from './home/app.home';
import { Vac } from './vac/app.vac';
import { Blog } from './blog/app.blog';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/product1',
        pathMatch: 'full'
    },
    {path: 'Home', component: Home },
    {path: 'Vac', component: Vac },
    {path: 'Blog', component: Blog },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }