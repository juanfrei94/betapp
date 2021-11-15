export interface New {
    content: string;
    created_at?: string;
    fecha: string;
    gallery_id?: string;
    id: number;
    imagen_content?: Images;
    imagen_titulo: Images;
    order_view?: number;
    subtitulo?: string;
    titulo: string;
    updated_at?: string;
    visible?: boolean;
}

export interface NewFiltered {
    content: string;
    fecha: string;
    id: number;
    titulo: string;
    imagen_titulo: Images;
}

export interface NewsServicesResp {
    noticias: New[];
}

interface Images {
    url: string;
    normal: UrlImg;
}

interface UrlImg {
    url: string;
}