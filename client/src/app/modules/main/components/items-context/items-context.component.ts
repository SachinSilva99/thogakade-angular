import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ItemsService} from "../../../share/service/item/items.service";
import Swal from 'sweetalert2'
import {MatTableDataSource} from "@angular/material/table";
import {PageEvent} from "@angular/material/paginator";

export interface Item {
  id: string,
  description: string,
  qty: number,
  price: number,
}

@Component({
  selector: 'app-items-context',
  templateUrl: './items-context.component.html',
  styleUrls: ['./items-context.component.scss']
})
export class ItemsContextComponent implements OnInit {
  dataSource: MatTableDataSource<Item>;
  itemAddonsList: Item[] = [];

  constructor(private itemService: ItemsService) {
    this.dataSource = new MatTableDataSource<Item>(this.itemAddonsList);

  }

  displayedColumns = ['Id', 'Description', 'Quantity', 'Price', 'Actions'];
  itemForm = new FormGroup({
    id: new FormControl('',),
    description: new FormControl('',Validators.required),
    qty: new FormControl(0,[Validators.required, Validators.min(1)]),
    price: new FormControl(0,[Validators.required, Validators.min(1)]),
  });

  ngOnInit() {
    this.loadData(10);
  }

  itemOnSubmit() {
    if (this.itemForm.valid) {
      const {description, price, qty, id} = this.itemForm.value;
      const item: Item = {
        description: description as string,
        price: price as number,
        qty: qty as number,
        id: id as string
      };

      if (id) {
        /**
         * update item
         */
        this.updateItem(item);
      } else {
        /**
         * create item
         */
        this.createItem(item);
      }
    }else {
      Swal.fire({
        position: "center",
        icon: "info",
        title: "Fields cannot be empty",
        showConfirmButton: false,
        timer: 2000
      });
    }
  }

  private createItem(item: Item) {
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
        this.loadData(10);
        this.itemForm.reset()
      }
    });
  }

  private updateItem(item: Item) {
    this.itemService.updateItem(item.id, item).subscribe(res => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Item update successfully",
        showConfirmButton: false,
        timer: 2000
      });
      this.loadData(10);
      this.itemForm.reset()
    });
  }

  private loadData(pageSize: number) {
    const observable = this.itemService.findAll(0, pageSize);
    observable.subscribe((response) => {
      const items = response.data.content;
      this.dataSource = new MatTableDataSource<Item>(items);
    });
  }

  tblRowOnClick(element: any) {
    this.itemForm.patchValue({
      id: element.id,
      description: element.description,
      qty: element.qty,
      price: element.price
    });
  }

  Filterchange(event: KeyboardEvent) {
    const value = (event.target as HTMLInputElement).value;
    this.dataSource.filter = value.trim().toLowerCase();
  }

  handlePage($event: PageEvent) {

  }

  resetBtnOnClick() {
    this.itemForm.reset();
  }

  deleteItem(item:Item) {
    Swal.fire({
      title: `
          <p>
                 Are you sure you want to delete
                    Id : ${item.id}
                   Description : ${item.description}
          </p>`,
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        const observable = this.itemService.deleteItem(item.id);
        observable.subscribe(() => {
          Swal.fire("Deleted!", "", "success");
          this.loadData(10);
        });
      }
    });
  }
}
