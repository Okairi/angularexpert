import { Component } from '@angular/core';
import { optionsMenu } from '../../../helpers/menusOptions';
import { MenuOption } from '../../../interfaces/menuOptions.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  optionsMenu: MenuOption[] = optionsMenu;
}
