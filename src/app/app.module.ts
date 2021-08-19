import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/** Wizard */
import { NgWizardModule, NgWizardConfig, THEME } from 'ng-wizard';
import { FormularioComponent } from './componentes/formulario/formulario.component';

/** Formularios */
import {ReactiveFormsModule} from '@angular/forms';

/** Servicios */
import {ClubesService} from './Servicios/clubes.service';
import { GenericoService } from './Servicios/generico.service';
import { FichaComponent } from './componentes/ficha/ficha.component';
import { WizardComponent } from './componentes/wizard/wizard.component';
import { PdfComponent } from './componentes/pdf/pdf.component';

const ngWizardConfig: NgWizardConfig = {
  theme: THEME.default
};

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    FichaComponent,
    WizardComponent,
    PdfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgWizardModule.forRoot(ngWizardConfig),
    ReactiveFormsModule
  ],
  providers: [
    ClubesService,
    GenericoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
