import React, { useState } from 'react';
import styled from 'styled-components';

import { FaDolly, FaRedo, FaDollarSign } from 'react-icons/fa';

const servicesData = [
  {
    id: 1,
    icon: <FaDolly className='icon' />,
    title: 'free shipping',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus eligendi amet magnam distinctio quod molestiae!',
  },
  {
    id: 2,
    icon: <FaRedo className='icon' />,
    title: '30 days return policy',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus eligendi amet magnam distinctio quod molestiae!',
  },
  {
    id: 3,
    icon: <FaDollarSign className='icon' />,
    title: 'secured payment',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus eligendi amet magnam distinctio quod molestiae!',
  },
];

const Services = () => {
  const [services, setServices] = useState(servicesData);
  return (
    <ServicesWrapper className='py-5'>
      <div className='container'>
        <div className='row'>
          {services.map((service) => (
            <div
              className='col-10 mx-auto col-sm-6 col-md-4 text-center my-3'
              key={service.id}
            >
              {service.icon}
              <h5 className='mt-4 text-capitalize text-title'>
                {service.title}
              </h5>
              <p className='text-muted mt-3'>{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </ServicesWrapper>
  );
};

const ServicesWrapper = styled.section`
  background: rgba(95, 183, 234, 0.5);

  .icon {
    font-size: 2.5rem;
    color: var(--primaryColor);
  }
`;

export default Services;
