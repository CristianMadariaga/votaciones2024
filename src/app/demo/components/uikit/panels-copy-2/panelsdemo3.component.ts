import { Component, OnInit } from '@angular/core';
import { MegaMenuItem, MenuItem } from 'primeng/api';

@Component({
    templateUrl: './panelsdemo3.component.html'
})
export class PanelsDemoComponent implements OnInit {

    selectedView: string = 'view1';

    items: MenuItem[] = [];

    listas: MenuItem[] = [];

    cardMenu: MenuItem[] = [];

    display: boolean = false;

    ngOnInit() {
        
        this.items = [
            { label: 'Izquierda Ecologista Popular', icon: 'pi pi-bookmark', command: () => {this.changeView('view1')} },
            { label: 'Todas y Todos por Chile', icon: 'pi pi-bookmark', command: () => {this.changeView('view2')} },
            { label: 'Chile Vamos', icon: 'pi pi-bookmark', command: () => {this.changeView('view3')} },
            { label: 'Tu Region Radical', icon: 'pi pi-bookmark', command: () => {this.changeView('view4')} },
            { label: 'Regiones Verdes Liberales', icon: 'pi pi-bookmark', command: () => {this.changeView('view5')} },
            { label: 'Lo Mejor para Chile', icon: 'pi pi-bookmark', command: () => {this.changeView('view6')} },
            { label: 'Por un Chile Mejor', icon: 'pi pi-bookmark', command: () => {this.changeView('view7')} },
            { label: 'Frente Amplio', icon: 'pi pi-bookmark', command: () => {this.changeView('view8')} },
            { label: 'Ecologistas, Animalistas e Independientes', icon: 'pi pi-bookmark', command: () => {this.changeView('view9')} },
            { label: 'Republicanos e Independientes', icon: 'pi pi-bookmark', command: () => {this.changeView('view10')} },
            
        ];

        this.cardMenu = [
            {
                label: 'Save', icon: 'pi pi-fw pi-check'
            },
            {
                label: 'Update', icon: 'pi pi-fw pi-refresh'
            },
            {
                label: 'Delete', icon: 'pi pi-fw pi-trash'
            },
        ];
    }

    changeView(view: string) {
        this.selectedView = view;
      }
    
}
