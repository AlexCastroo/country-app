export default class Product
{

    constructor(id, name, price, description, category, station, stock, image)
    {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.category = category;
        this.station = station;
        this.stock = stock;
        this.image = image;
    }
    

    // MÉTODOS setter's y getter's
    setId (id) { this.id = id; }
    getId () { return this.id; }

    setName (name) { this.name = name; }
    getName () { return this.name; }

    setPrice (price) { this.price = price; }
    getPrice () { return this.price; }

    setDescription (description) { this.description = description; }
    getDescription () { return this.description; }

    setCategory (category) { this.category = category; }
    getCategory () { return this.category; }

    setStation (station) { this.station = station; }
    getStation () { return this.station; }

    setStock (stock) { this.stock = stock; }
    getStock () { return this.stock; }

    setImagen (imagen) { this.imagen = imagen; }
    getImagen () { return this.imagen; }

}