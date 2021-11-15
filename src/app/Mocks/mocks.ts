import { New, NewFiltered } from "../interface/new.interface";

export const itemMock: NewFiltered = {
    content: "La Raspadita se viste de gala en su<br><b>15º aniversario. </b><br><br>Para festejarlos, se lanzó al mercado un nuevo juego denominado<br>“Raspadita 15 Años”, con el cual podés ganar <b>premios en efectivo de hasta<br>$ 2.000.000!!! </b>Además, te ofrece la posibilidad de ganar <b>TELEVISORES PUNKTAL LED HD al instante!!! </b><br><br>Podés adquirirla en los locales de la Red “Hoy Juega” y festejá junto a nosotros los 15 años de la Raspadita!!!<br><br><a target=\"_blank\" title=\"\" href=\"http://www3.labanca.com.uy/pages/juegos/15_anios_34\">Como jugar</a>",
    fecha: "2015-07-31",
    id: 38,
    imagen_titulo: {
        url: "https://labanca-production.s3.amazonaws.com/uploads/notice/38/imagen_titulo/logo_15_a_os.png",
        normal: {
            url: "https://labanca-production.s3.amazonaws.com/uploads/notice/38/imagen_titulo/normal_logo_15_a_os.png"
        }
    },
    titulo: "RASPADITA|NUEVO JUEGO: RASPADITA 15 AÑOS"
};

export const respServiceMock: New[] = [
    {
        content: "Para los cosmopolitas, llegó la nueva Raspadita “Ciudades del Mundo”.<br>Vale $ 30 y tiene 8 destinos diferentes para elegir y ganar hasta $ 2.000.000!!!<br><br>Ya se encuentra en la Red Hoy Juega.<br><br>Raspadita. Tu suerte al instante!",
        fecha: "2021-08-09",
        id: 174,
        imagen_titulo: {
            url: "https://labanca-production.s3.amazonaws.com/uploads/notice/174/imagen_titulo/logo2.png",
            normal: {
                url: "https://labanca-production.s3.amazonaws.com/uploads/notice/174/imagen_titulo/normal_logo2.png"
            }
        },
        titulo: "NUEVA RASPADITA | CIUDADES DEL MUNDO"
    },
    {
        content: "Por resolución de la Dirección Nacional de Loterías y Quinielas, de acuerdo a las medidas establecidas por el Poder Ejecutivo y en función de la comunicación realizada con fecha 17 de diciembre de 2020 acerca de que todos los premios de Pozo del 5 de Oro con Revancha (Oro, Revancha y Plata) así como los premios de Quiniela, Tómbola, Supermatch y Raspadita mayores a $ 717.000 deberán ser autorizados por el Organismo, se podrán realizar unicamente los días <b>Martes 20 de Abril, Lunes 26 de Abril y Lunes 3 de Mayo de 2021 en el horario de 10.30 a 14.30 hs.</b>",
        fecha: "2021-04-12",
        id: 167,
        imagen_titulo: {
            url: "https://labanca-production.s3.amazonaws.com/uploads/notice/167/imagen_titulo/normal_normal_normal_2.png",
            normal: {
                url: "https://labanca-production.s3.amazonaws.com/uploads/notice/167/imagen_titulo/normal_normal_normal_normal_2.png"
            }
        },
        titulo: "Cobro de aciertos mayores a $ 717.000"
    }
]