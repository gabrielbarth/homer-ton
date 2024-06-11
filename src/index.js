const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/v1/products', (req, res) => {
    res.json({
        data: [
            {
                "buttonId": "transactionFlow",
                "order": 1
            },
            {
                "buttonId": "salesHistory",
                "order": 2
            },
            {
                "buttonId": "mobileRecharge",
                "order": 3
            },
            {
                "buttonId": "bankingPix",
                "order": 4
            },
            {
                "buttonId": "transfer",
                "order": 5
            },
            {
                "buttonId": "calculator",
                "order": 6
            },
            {
                "buttonId": "paymentLinks",
                "order": 7
            },
            {
                "buttonId": "myCards",
                "order": 8
            },
            {
                "buttonId": "productCatalog",
                "order": 9
            },
            {
                "buttonId": "payBills",
                "order": 10
            },
            {
                "buttonId": "bankingDeposit",
                "order": 11
            },
            {
                "buttonId": "mgm",
                "order": 12
            },
            {
                "buttonId": "shopton",
                "order": 13
            },
            {
                "buttonId": "insurance",
                "order": 14
            }
        ]
    });
});

app.get('/v1/banners', (req, res) => {
    res.json({
        data: [
            {
                "id": "tapTonWidget",
                "image": "https://assets.sdx.ton.com.br/bannerton/banners/tapTonWidget@3x.png?updated_at=1716927536416",
                "action": {
                    "type": "navigate",
                    "data": "App.TapTon.WidgetOnboarding"
                },
                "visibility": {
                    "type": "experiment",
                    "data": "sdx-ton-vender-and-conquistar-tap-widget-home-banner",
                    "show_on_fallback": false
                },
                "priority": 0.15304142723470027
            },
            {
                "id": "canva",
                "image": "https://assets.sdx.ton.com.br/bannerton/banners/canva@3x.png?updated_at=1706823236647",
                "action": {
                    "type": "url",
                    "data": "https://partner.canva.com/c/3197864/1268413/10068"
                },
                "visibility": {
                    "type": "default",
                    "data": false
                },
                "priority": 0.13041382582540642
            },
            {
                "id": "celular",
                "image": "https://assets.sdx.ton.com.br/bannerton/banners/celular@3x.png?updated_at=1706823236628",
                "action": {
                    "type": "url",
                    "data": "https://www.ton.com.br/seucelularvaivirarmaquininha/"
                },
                "visibility": {
                    "type": "default",
                    "data": false
                },
                "priority": 0.12431956005653944
            },
            {
                "id": "insurance",
                "image": "https://assets.sdx.ton.com.br/bannerton/banners/insurance-banner@3x.png?updated_at=1706823236645",
                "action": {
                    "type": "navigate",
                    "data": "App.Insurance"
                },
                "visibility": {
                    "type": "default",
                    "data": false
                },
                "priority": 0.058510046508394864
            },
            {
                "id": "tonUniversity",
                "image": "https://assets.sdx.ton.com.br/bannerton/banners/ton-university@3x.png?updated_at=1706823236632",
                "action": {
                    "type": "url",
                    "data": "https://www.vendamaispelasredessociais.com.br/"
                },
                "visibility": {
                    "type": "default",
                    "data": false
                },
                "priority": 0
            }
        ]
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
