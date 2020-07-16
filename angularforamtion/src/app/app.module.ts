import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { RecipeComponent } from './recipe/recipe.component';
import { CustomMaterialModule } from "./custom-material/custom-material.module";
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { AppRoutingModule } from './app-routing.module';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';

@NgModule({
    declarations: [
	AppComponent,
	HeaderComponent,
	RecipeComponent,
	RecipeListComponent,
	RecipeDetailComponent,
    ],
    imports: [
	BrowserModule,
	HttpClientModule,
	CustomMaterialModule,
	AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
