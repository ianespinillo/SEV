import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Noticias',
  templateUrl: './Noticias.component.html',
  styleUrls: ['./Noticias.component.css']
})
export class NoticiasComponent {

  noticias = [
    {
      imgUrl: 'https://www.clarin.com/img/2024/06/02/-MvXrWFRO_1256x620__2.jpg#1717369633325',
      link: 'https://www.clarin.com/sociedad/choque-ruta-40-tragedia-hermanos-hijos-enluta-sur_0_M5vlimPHLD.html',
      titulo: 'Choque en la Ruta 40: la tragedia de dos hermanos y sus hijos que enluta al Sur'
    },
    {
      imgUrl: 'https://www.lanacion.com.ar/resizer/v2/un-joven-de-18-anos-choco-y-murio-en-la-BSYZSB4SZJBVZOUTKGT44TV5CU.jpeg?auth=3546086d9915df96bbb15f04e0fceb9d64d1f4abec0393b6c2eb8b8f5fccca7a&width=880&height=586&quality=70&smart=true',
      link: 'https://www.lanacion.com.ar/sociedad/la-plata-un-joven-de-18-anos-perdio-el-control-de-su-auto-se-incrusto-en-una-casa-y-murio-nid24082024/',
      titulo: 'La Plata: un joven de 18 años perdió el control de su auto, se incrustó en una casa y murió'
    },
    {
      imgUrl: 'https://www.lanacion.com.ar/resizer/v2/encontraron-un-auto-en-un-canadon-en-la-ruta-32-62BLEB2CVNEOFNPLXBD3METJOQ.png?auth=012d034e3e9c4888a45b61afac6a50f9fbc39a69a2c4e9c3910c0e67a59b7327&width=880&height=586&quality=70&smart=true',
      link: 'https://www.lanacion.com.ar/seguridad/entre-rios-habian-perdido-su-rastro-y-lo-hallaron-muerto-dentro-de-su-auto-volcado-en-una-zanja-nid22082024/',
      titulo: 'Entre Ríos: habían perdido su rastro y lo hallaron muerto dentro de su auto volcado en una zanja'
    },
    {
      imgUrl: 'https://www.lanacion.com.ar/resizer/v2/asi-quedo-el-colectivo-de-la-linea-2LUEJRJJ7RAO3MN6JHD46DQ32Y.jpeg?auth=846526cca699b5e1fa742abb97914e51734cf5be8a884a17a9fa15922d0d7e65&width=880&height=586&quality=70&smart=true',
      link: 'https://www.lanacion.com.ar/seguridad/villa-luro-un-fuerte-choque-entre-dos-colectivos-en-medio-de-la-lluvia-dejo-ocho-heridos-nid21082024/',
      titulo: 'Villa Luro: un fuerte choque entre dos colectivos en medio de la lluvia dejó ocho heridos'
    },
    {
      imgUrl: 'https://www.lanacion.com.ar/resizer/v2/el-auto-que-choco-contra-un-camion-en-la-RYY5BXAR5BCYBOJHEN4CRFERAI.JPG?auth=9fe45b7f322519a5bb8a7422ee985de50019fe991bdf8f971c5510509ca961bb&width=880&height=586&quality=70&smart=true',
      link: 'https://www.lanacion.com.ar/seguridad/santa-fe-un-auto-perdio-el-control-se-incrusto-debajo-de-un-camion-y-fallecieron-dos-personas-nid15082024/',
      titulo: 'Un conductor perdió el control del auto en la 25 de Mayo, se incrustó debajo de un camión y murió'
    },
    {
      imgUrl: 'https://www.lanacion.com.ar/resizer/v2/daiana-pintos-y-camila-rodriguez-las-dos-victimas-VF2CJORO6RGYZIUOT5Y6Y5FGKE.jpeg?auth=e1c0aa7a463fcc1d4c235bf85665d53de88a290537f3107e5e6a4b91217239a5&width=880&height=586&quality=70&smart=true',
      link: 'https://www.lanacion.com.ar/seguridad/quienes-eran-las-dos-amigas-que-murieron-tras-un-choque-en-una-ruta-de-misiones-nid19082024/',
      titulo:'Quiénes eran las dos amigas que murieron tras un choque en una ruta de Misiones',
    },
    {
      imgUrl: 'https://www.lanacion.com.ar/resizer/v2/asi-quedo-la-moto-involucrada-en-el-VXM5CNUAFJFZ3D2ZXJI4KPZD5E.jpg?auth=63a5e23644a4f6b96d1eed59e7b100083a32e1d2de579062c801e190dda3237b&width=880&height=586&quality=70&smart=true',
      link: 'https://www.lanacion.com.ar/seguridad/una-camioneta-choco-de-atras-a-una-moto-en-cordoba-murio-una-mujer-de-30-anos-nid08082024/',
      titulo: 'Una camioneta chocó de atrás a una moto en Córdoba: murió una mujer de 30 años'
    },
    {
      imgUrl: 'https://tn.com.ar/resizer/v2/brutal-accidente-en-san-andres-de-giles-murieron-cuatro-personas-tras-evadir-un-control-policial-foto-gentileza-el-civismo-BHX4OKJUMZBD5K2HWXKLHKCYZA.jpg?auth=35d753c5ca2f64155c6bf84895a577cc5ca439b2e017a98bc21872e984b973cd&width=1440',
      link: 'https://tn.com.ar/policiales/2024/04/03/brutal-accidente-en-san-andres-de-giles-intento-evadir-un-control-policial-choco-y-murio-con-toda-su-familia/',
      titulo: 'Brutal accidente en San Andrés de Giles: intentó evadir un control policial, chocó y murió con toda su familia'
    },
    {
      imgUrl: 'https://tn.com.ar/resizer/v2/tragedia-en-misiones-siete-jovenes-volvian-de-un-camping-en-camioneta-volcaron-en-la-ruta-y-dos-murieron-foto-gentileza-clarin-2UTRG5ZHEBCEJBAWRI747CPS2Q.JPG?auth=eb8469d56441975091c6d7310856beb8fff267534d91b58120e070fd31953c8d&width=1440',
      link: 'https://tn.com.ar/policiales/2024/03/19/tragedia-en-misiones-siete-jovenes-volvian-de-un-camping-en-camioneta-volcaron-en-la-ruta-y-dos-murieron/',
      titulo: 'Tragedia en Misiones: siete jóvenes volvían de un camping en camioneta, volcaron en la ruta y dos murieron'
    }

  ]
}
