export interface IVehicle {
    "id": number,
    "user_id": number,
    "company_id": number,
    "angles_count": number,
    "vin": string,
    "vin_postfix": null | string,
    "vehicle_name": string,
    "brand": null | string,
    "model": null | string,
    "body_type": null | string,
    "fuel_type": null | string,
    "hp": null | number | string,
    "ccm": null | number | string,
    "description": null | string,
    "moderated": boolean,
    "defect_state": string,
    "placeholder": string,
    "preview": string,
    "photo": {
        "id": number,
        "car_id": number,
        "angle_id": number,
        "url": string,
        "processed_url": string,
        "status": number,
        "status_name": string,
        "defect_state": string,
        "in_process_by_admin": number,
        "created_at": Date | number
    },
    "photos_count": number,
    "uploads": number,
    "created_at": Date | number
}

export interface IMetaLink {
    "url": null | string,
    "label": string,
    "active": boolean
}

export interface IVehicles {
    "data": IVehicle[],
    "links": {
        "first": string
        "last": string,
        "prev": null | string,
        "next": string
    },
    "meta": {
        "current_page": number,
        "from": number,
        "last_page": number,
        "links": IMetaLink[],
        "path": string,
        "per_page": string,
        "to": number,
        "total": number
    }
}