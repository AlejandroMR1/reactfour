const Content = () =>{
    return(

        <main>
        <div className="seccion">
            
            <aside className="aside">

            <br />
            <br />
            
            <h2 className="h2aside">Nuestros Servicios</h2>

            <br />

            <ul className="ulaside">

                <li><a href="#">Inicio</a></li>
                <br />
                <li><a href="#">Vuelos</a></li>
                <br />
                <li><a href="#">Hoteles</a></li>
                <br />
                <li><a href="#">Paquetes</a></li>

            </ul>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <h2 className="h2aside"><a href="#">¿Quiénes somos?</a></h2>

            </aside> 
           
        </div>

        <div className="principal">

        <h1 className="h1principal">¡Bienvenidos a Aviacol!</h1>
        <h1 className="h1texto">Aquí encontrarás los mejores servicios y vuelos que más se ajusten a tu bolsillo, desde lo más económico en el mercado hasta el último lujo de detalle</h1>

        <h1 className="h1principal">¡Los viajes más recomendados de este mes!</h1>
         
        <br />

        <div className="carrusel">

        <img src="Cancun.jpg" alt="Cancun" className="cancun" />

        <img src="Peru.jpg" alt="Perú" className="peru"/>

        <img src="Orlando.jpg" alt="Orlando" className="orlando"/>

        <img src="Italia.jpg" alt="Italia" className="italia"/>

        </div>          

        </div>

        </main>

    )
    
}

export default Content

