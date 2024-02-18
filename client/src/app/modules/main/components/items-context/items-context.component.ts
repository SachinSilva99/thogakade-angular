import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ItemsService} from "../../../share/service/item/items.service";
import Swal from 'sweetalert2'

@Component({
  selector: 'app-items-context',
  templateUrl: './items-context.component.html',
  styleUrls: ['./items-context.component.scss']
})
export class ItemsContextComponent implements OnInit {
  constructor(private itemService: ItemsService) {
  }

  itemForm = new FormGroup({
    id: new FormControl(''),
    description: new FormControl(''),
    qty: new FormControl(0),
    price: new FormControl(0),
  });

  ngOnInit() {
    this.loadData(10);
  }

  itemOnSubmit() {
    if (this.itemForm.valid) {
      const {description, price, qty} = this.itemForm.value;
      const item = {description, price, qty};
      console.log(item);
      this.itemService.createItem(item).subscribe(res => {
        if (res.statusCode === 201) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Item added successfully",
            text: `Item Id : ${res.data}`,
            showConfirmButton: false,
            timer: 2000
          });
        }
      })
    }
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
