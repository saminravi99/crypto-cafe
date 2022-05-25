import React from 'react';
import { Accordion } from 'react-bootstrap';

const FAQ = () => {
    return (
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h6>
              <strong>What Kind Of Products Do You Supply?</strong>
            </h6>
          </Accordion.Header>
          <Accordion.Body>
            We provide the best tools in Bangladesh for small business and
            entrepreneurs. We're community-powered software for social media
            marketing and analytics. Stop struggling to get better at social
            media and get great results now. It's easy to get started at
            BoldTap!Build a presence in LinkedIn Marketing. Instant growth and
            ROI by using the BoldTap Social Analytics Platform.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <h6>
              <strong>Do You Supply Products Outside Bangladesh?</strong>
            </h6>
          </Accordion.Header>
          <Accordion.Body>
            Yes. We supply outside Bangladesh for the making of quality tools,
            so our first product is by far and away our own product, which we
            pride ourselves in. And the sourcing of the factories to make these
            and obviously the manufacturing are in the hands of JW Boston. So
            that's where the quality and the high-quality of this product is,
            and we are very, very proud of the quality of the material we use. I
            think we've talked about this before but most T-shirts you can buy
            in the shop this year have been made in America, in a factory. A lot
            of them are made in China.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <h6>
              <strong>Do You Supply in All Over Bangladesh?</strong>
            </h6>
          </Accordion.Header>
          <Accordion.Body>
            Yes we supply our tools all over Bangladesh and are planning on all
            over the world, but the real win is that we do it for less than we
            could.Today we sold our screws for 7E and then sold them again for
            $3.What a steal and we even have more.The barber pole and welder are
            for the boy.It's a tote where we can put everything together so he
            doesn't have to go digging for anything he needs.It's been a great
            system for keeping him busy.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <h6>
              <strong>Do You Sell In Retail System?</strong>
            </h6>
          </Accordion.Header>
          <Accordion.Body>
            We sell in a wholesale system to grow our business all over the
            world. Our tools are best in quality in the industry, and our
            passion is in customer service. We take a lot of pride in our
            products and brand.It's a great feeling to think that our brand and
            products are such an important part of the foundation of the
            business world today. At the same time, my most rewarding moments
            are when our customers tell me they can't live without our
            product.We've been on an amazing journey.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );
};

export default FAQ;