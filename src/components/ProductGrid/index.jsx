import React, { Component } from 'react'
import { Card, List, Image } from 'antd';
import './index.css';

export class ProductGrid extends Component {

  render() {
    const { Meta } = Card;
    const data = [
      {
        title: "Weekday THURSDAY Jeans Slim Fit black",
        gtin: 2001007926858,
        gender: "female",
        sale_price: "39.95 EUR",
        price: "39.95 EUR",
        image_link: "https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@12.4.jpg",
        additional_image_link: [
          "https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@22.jpg",
          "https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@21.jpg",
          "https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@20.jpg",
          "https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@19.jpg",
          "https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@18.jpg",
        ],
      },
      {
        title: "Weekday THURSDAY Jeans Slim Fit black",
        gtin: 2001007926858,
        gender: "female",
        sale_price: "39.95 EUR",
        price: "39.95 EUR",
        image_link: "https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@12.4.jpg",
        additional_image_link: [
          "https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@22.jpg",
          "https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@21.jpg",
          "https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@20.jpg",
          "https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@19.jpg",
          "https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@18.jpg",
        ],
      },
      {
        title: "Weekday THURSDAY Jeans Slim Fit black",
        gtin: 2001007926858,
        gender: "female",
        sale_price: "39.95 EUR",
        price: "39.95 EUR",
        image_link: "https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@12.4.jpg",
        additional_image_link: [
          "https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@22.jpg",
          "https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@21.jpg",
          "https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@20.jpg",
          "https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@19.jpg",
          "https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@18.jpg",
        ],
      },
      {
        title: "Weekday THURSDAY Jeans Slim Fit black",
        gtin: 2001007926858,
        gender: "female",
        sale_price: "39.95 EUR",
        price: "39.95 EUR",
        image_link: "https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@12.4.jpg",
        additional_image_link: [
          "https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@22.jpg",
          "https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@21.jpg",
          "https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@20.jpg",
          "https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@19.jpg",
          "https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@18.jpg",
        ],
      },
      {
        title: "Weekday THURSDAY Jeans Slim Fit black",
        gtin: 2001007926858,
        gender: "female",
        sale_price: "39.95 EUR",
        price: "39.95 EUR",
        image_link: "https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@12.4.jpg",
        additional_image_link: [
          "https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@22.jpg",
          "https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@21.jpg",
          "https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@20.jpg",
          "https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@19.jpg",
          "https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@18.jpg",
        ],
      },
      {
        title: "Weekday THURSDAY Jeans Slim Fit black",
        gtin: 2001007926858,
        gender: "female",
        sale_price: "39.95 EUR",
        price: "39.95 EUR",
        image_link: "https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@12.4.jpg",
        additional_image_link: [
          "https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@22.jpg",
          "https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@21.jpg",
          "https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@20.jpg",
          "https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@19.jpg",
          "https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@18.jpg",
        ],
      },
      {
        title: "Weekday THURSDAY Jeans Slim Fit black",
        gtin: 2001007926858,
        gender: "female",
        sale_price: "39.95 EUR",
        price: "39.95 EUR",
        image_link: "https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@12.4.jpg",
        additional_image_link: [
          "https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@22.jpg",
          "https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@21.jpg",
          "https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@20.jpg",
          "https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@19.jpg",
          "https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@18.jpg",
        ],
      },
    ];
    return (
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <Card
              style={{ width: 300 }}
              cover={
                <Image
                  alt={item.title}
                  src={item.image_link}
                />
              }
            >
              <Meta
                title={item.title}
              />
              <div>GTIN: {item.gtin}</div>
              <div>Gender: {item.gender}</div>
              <div>Price: {item.price}</div>
              <div>Sale Price: {item.sale_price}</div>
            </Card>
          </List.Item>
        )}
      />
    )
  }
}

export default ProductGrid
