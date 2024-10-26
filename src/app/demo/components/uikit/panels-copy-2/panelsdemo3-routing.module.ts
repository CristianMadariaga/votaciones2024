import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PanelsDemoComponent } from './panelsdemo3.component';
import { MediaDemoComponent } from '../media/mediademo.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: PanelsDemoComponent },
		{ path: '', component: MediaDemoComponent}
	])],
	exports: [RouterModule]
})
export class PanelsDemoRoutingModule { }
