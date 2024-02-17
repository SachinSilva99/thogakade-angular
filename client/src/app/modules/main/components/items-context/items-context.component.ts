import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ItemsService} from "../../../share/service/item/items.service";

@Component({
  selector: 'app-items-context',
  templateUrl: './items-context.component.html',
  styleUrls: ['./items-context.component.scss']
})
export class ItemsContextComponent implements OnInit{
  constructor(private itemService : ItemsService) {
  }
  itemForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    description: new FormControl(''),
    qty: new FormControl(0),
    price: new FormControl(0),
  });

  ngOnInit() {
    this.loadData(10);
  }
  itemOnSubmit() {
    console.log(this.itemForm);
  }


  private loadData(pageSize: number) {
    const observable = this.itemService.findAll(0, pageSize);
    observable.subscribe((response) => {
      const items = response.data.content;
      console.log(items)
      // this.dataSource = new MatTableDataSource<Customer>(customers);
    });
  }
}
