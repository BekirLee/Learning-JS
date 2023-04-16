

let order1 = {

    "sipariş id": 101,
    "sipariş tarihi": "31.12.2022",
    "ödeme şekli": "kredi karti",
    "kargo adresi": "Yahya kaptan mah. Kocaeli İzmit",
    "satin alinan ürünler": [
        {
            "ürün id": 5,
            "zrün başliği": "IPhone 13 Pro",
            "ürün url": " http://abc.com/iphone-13-pro",
            "ürün_fiyati1": 22000,
            "ürün id": 6,
            "ürün başliği": "IPhone 13 Pro Max",
            "ürün url": " http://abc.com/iphone-13-pro-max",
            "ürün_fiyati2": 25000
        }
    ]
}

let order2 = {
    "sipariş id": 102,
    "sipariş tarihi": "31.12.2022",
    "ödeme şekli": "kredi karti",
    "kargo adresi": "Yahya kaptan mah. Kocaeli İzmit",
    "satin alinan ürünler": {
        "ürün id": 5,
        "zrün başliği": "IPhone 13 Pro",
        "ürün url": " http://abc.com/iphone-13-pro",
        "ürün fiyati": 22000,
        "ürün id": 6,
        "ürün başliği": "IPhone 13 Pro Max",
        "ürün url": " http://abc.com/iphone-13-pro-max",
        "ürün fiyati2": 25000
    }
}
let orders = [
    order1, 
    order2
]


orders= order1["satin alinan ürünler"][0].ürün_fiyati1 

console.log("Ilk xerc: " + order1["satin alinan ürünler"][0].ürün_fiyati1);
console.log("Toplam xerc:" + orders);
