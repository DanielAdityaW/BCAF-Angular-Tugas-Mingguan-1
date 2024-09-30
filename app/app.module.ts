import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BerkasComponent } from './berkas/berkas.component';
import { NgbModule, NgbTimepicker, NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductDetailComponent } from './feature/products/components/product-detail/product-detail.component';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { TodoFormComponent } from './feature/todos/components/todo-form/todo-form.component';
import { TodoListComponent } from './feature/todos/components/todo-list/todo-list.component';
import { TodoTotalComponent } from './feature/todos/components/todo-total/todo-total.component';
import { TodoComponent } from './feature/todos/components/todo/todo.component';
import { TodoDetailComponent } from './feature/todos/components/todo-detail/todo-detail.component';
import { AttrDirective } from './attr.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TodoService } from './cores/services/todo.services';
import { IndodatePipe } from './indodate.pipe';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { UserService } from './cores/services/user.service';
import { CustomerChoiceComponent } from './feature/customer/components/customer-choice/customer-choice.component';
import { CustomerDetailComponent } from './feature/customer/components/customer-detail/customer-detail.component';
import { CustomerListComponent } from './feature/customer/components/customer-list/customer-list.component';
import { CustomerSearchComponent } from './feature/customer/components/customer-search/customer-search.component';
import { ReservasiCreateComponent } from './feature/reservasi/componets/reservasi-create/reservasi-create.component';
import { ReservasiDetailComponent } from './feature/reservasi/componets/reservasi-detail/reservasi-detail.component';
import { ReservasiListComponent } from './feature/reservasi/componets/reservasi-list/reservasi-list.component';
import { ReservasiSearchComponent } from './feature/reservasi/componets/reservasi-search/reservasi-search.component';
import { ReservasiChoiceComponent } from './feature/reservasi/componets/reservasi-choice/reservasi-choice.component';
import { ReservasiSisaComponent } from './feature/reservasi/componets/reservasi-sisa/reservasi-sisa.component';


@NgModule({
  declarations: [
    AppComponent,
    BerkasComponent,
    ProductDetailComponent,
    NavigationComponent,
    TodoFormComponent,
    TodoListComponent,
    TodoTotalComponent,
    TodoComponent,
    TodoDetailComponent,
    AttrDirective,
    IndodatePipe,
    CustomerChoiceComponent,
    CustomerDetailComponent,
    CustomerListComponent,
    CustomerSearchComponent,
    ReservasiCreateComponent,
    ReservasiDetailComponent,
    ReservasiListComponent,
    ReservasiSearchComponent,
    ReservasiChoiceComponent,
    ReservasiSisaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    FontAwesomeModule,
    NgbTimepickerModule,
  ],
  providers: [
    provideHttpClient(),
    TodoService, 
    //{ provide: LOCALE_ID, useValue: 'id-ID' },
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
