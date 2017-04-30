import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, Routes, Router } from '@angular/router';
import { MaterialModule, MdInputModule } from '@angular/material';
import 'hammerjs';

// Components
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SplashComponent } from './components/splash/splash.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PageNotFoundComponent } from './components/404/pagenotfound.component';
import { TreeNodeComponent, DeleteLocationDialog } from './components/locationtree/tree.component';
import { DeviceListComponent } from './components/devices/devicelist.component';
import { NewLocationComponent } from './components/locations/newlocation.component';
import { DeviceComponent } from './components/devices/device.component';
import { NewDeviceComponent } from './components/devices/newdevice.component';
import { DashboardMainComponent } from './components/dashboard/dashboard-main.component';
import { DeviceTemplatesComponent } from './components/devices/devicetemplates.component';
import { DeviceTemplateComponent } from './components/devices/devicetemplate.component';
import { NewTemplateComponent } from './components/devices/newtemplate.component';

// Services
import { LocationService } from './services/location.service';
import { DeviceService } from './services/device.service';

@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    DashboardComponent,
    DashboardMainComponent,
    PageNotFoundComponent,
    TreeNodeComponent,
    DeviceListComponent,
    DeviceComponent,
    NewDeviceComponent,
    NewLocationComponent,
    DeleteLocationDialog,
    DeviceTemplatesComponent,
    DeviceTemplateComponent,
    NewTemplateComponent,
    DeleteLocationDialog
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    MaterialModule.forRoot(),
    MdInputModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [
    LocationService,
    DeviceService
  ],
  entryComponents: [
    DeleteLocationDialog
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
