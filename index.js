const http = require ('http')
const express = require ('express')
const fs = require ('fs')

const app = express()
const PORT = 8080


 

 // CLASE CONTENEDOR

 class Contenedor {
    constructor(title, price, thumbnail, id){
        this.title = title
        this.price = price
        this.thumbnail = thumbnail 
        this.id = id 
    }

    //METODOS
    save(objeto){
        fs.promises.appendFile('./productos.txt', objeto)
        .then( contenido => {
            console.log((contenido.id) )
        })
        .catch (err => {
            console.log("Error", err)
        })
    }

    getById(id){
        fs.promises.readFile('./productos.txt', 'utf-8', (error, contenido) => {
            if(contenido.id == id){
                console.log(contenido)
            } else {
                console.log('Error: '+ error)
            }
        })
    }

    getAll(){
        fs.promises.readFile('./productos.txt', 'utf-8', (error, contenido) => {
            if(error){
                console.log(error)
            } else{
                const todo = [contenido]
                console.log(todo)
            }
        } )
    }

    deleteById(id){
        fs.promises.readFile('./productos.txt', 'uf-8', (error, contenido) => {
            if(contenido.id == id){
                fs.unlink('./archivo.txt')
            } else{
                console.log(error)
            }
        })
    }

    deleteAll(){
        return fs.unlink('./productos.txt', error => {
            if(error){
                console.log(error)
            } else {
                console.log('Eliminado')
            }
        })
    }

}

//EXPRESS

app.listen(PORT, () => {
    console.log(`Puerto N°: ${PORT}`)
})

app.get('/', (_, respuesta) => {
    respuesta.send('<h1>Hola Mundo</h1>' )
 })

app.get('/productos', (_, respuesta) => {
    respuesta.send(producto.getAll() )
 })
 
app.get('/productoRandom', (_, respuesta) => {
    respuesta.send('producto Random' )
 })

const producto = new Contenedor ("tomas", 10, "prueba", 8)

