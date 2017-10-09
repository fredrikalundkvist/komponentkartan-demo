import { InputfieldsComponent } from './inputfields/inputfields.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { MonthpickerComponent } from './monthpicker/monthpicker.component';
import { ColoursComponent } from './colours/colours.component';
import { CheckboxComponent } from './checkbox/checkbox.component'
import { DropdownmultiselectComponent } from './dropdownmultiselect/dropdownmultiselect.component';
import { DropdownsComponent } from './dropdowns/dropdowns.component';
import { FormattemplateComponent } from './formattemplate/formattemplate.component';
import { HeadersComponent } from './headers/headers.component';
import { ListsComponent } from './lists/lists.component';
import { LoaderComponent } from './loader/loader.component';
import { LockbuttonComponent } from './lockbutton/lockbutton.component';
import { ModaldialogComponent } from './modaldialog/modaldialog.component';
import { PanelsComponent } from './panels/panels.component';
import { RadiobuttonsComponent } from './radiobuttons/radiobuttons.component';
import { TextbuttonsComponent } from './textbuttons/textbuttons.component';
import { SavecancelComponent } from './savecancel/savecancel.component';
import { BacktotopComponent } from './backtotop/backtotop.component';
import { Routes } from '@angular/router';
export const appRoutes: Routes = [
<<<<<<< HEAD

    { path: 'inputfields', component: InputfieldsComponent }
=======
    { path: 'inputFields', component: InputfieldsComponent },
    { path: 'textButtons', component: TextbuttonsComponent },
    { path: 'radioButtons', component: RadiobuttonsComponent },
    { path: 'checkbox', component: CheckboxComponent },
    { path: 'colours', component: ColoursComponent },
    { path: 'dropdownmultiselect', component: DropdownmultiselectComponent },
    { path: 'dropdowns', component: DropdownsComponent },
    { path: 'datepicker', component: DatepickerComponent },
    { path: 'monthpicker', component: MonthpickerComponent },
    { path: 'formattemplate', component: FormattemplateComponent },
    { path: 'headers', component: HeadersComponent },
    { path: 'loader', component: LoaderComponent },
    { path: 'lists', component: ListsComponent },
    { path: 'lockbutton', component: LockbuttonComponent },
    { path: 'panels', component: PanelsComponent },
    { path: 'modaldialog', component: ModaldialogComponent },
    { path: 'savecancel', component: SavecancelComponent },
    { path: 'backtotop', component: SavecancelComponent },
    { path: '**', component: FormattemplateComponent }
>>>>>>> Förberett meny med samtliga komponentalternativ

];
