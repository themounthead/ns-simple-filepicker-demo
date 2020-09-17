import { Component, OnInit } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";

import { openFilePicker } from 'nativescript-simple-filepicker';

@Component({
    selector: "ns-items",
    templateUrl: "./items.component.html"
})
export class ItemsComponent implements OnInit {
    items: Array<Item>;

    constructor(private itemService: ItemService) { }

    ngOnInit(): void {
        this.items = this.itemService.getItems();
    }

    launchFilePicker() {
        openFilePicker({
            extensions: ['application/pdf', 'application/doc'],  // not ok
            // extensions: ['audio/*'],  // ok
            multipleSelection: true,
        }).then((data) => {
            console.log(data.files);
        });
    }

}
