import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { AngularMaterialModule } from 'src/shared/angular-material.module';
import { QuestlistComponent } from './questlist/questlist.component';
import { StatisticsComponent } from './statistics/statistics.component';

@NgModule({
  declarations: [HomeComponent, QuestlistComponent, StatisticsComponent],
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule,
  ],
})
export class HomeModule {}
