class Storage {
    constructor(items) {
        this._items = items;
    }

    getItems() {
        return this._items;
    }

    addItem(item) {
        // if(this._items.includes(item)) return;
        for(const elm of this._items) {
            if(elm === item) return;
        }
        this._items.push(item);
    }

    removeItem(item) {
        const itemIndex = this._items.indexOf(item);
        // if(itemIndex == -1) return;
        //     this._items.splice(itemIndex, 1);
        for(const elm of items) {
            if(elm === item) {
                this._items.splice(itemIndex, 1);
            }
        }
    }

};

const storage = new Storage([
    'Нанитоиды',
    'Пролонгер',
    'Железные жупи',
    'Антигравитатор',
  ]);

  console.log(storage);
  
  const items = storage.getItems();
  console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]
  
  storage.addItem('Дроид');
  storage.addItem('Дроид');
  console.table(storage.getItems()); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]
  
  storage.removeItem('Пролонгер');
  console.table(storage.getItems()); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]