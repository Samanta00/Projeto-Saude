import React from 'react';
import TextSlider from './slideShow';

const ShowSlider = () => {
  const slides = [
    {
      title: 'Até 2-3x mais barato que os serviços de reconhecimento manual',
      text: 'Descrição da Oferta 1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque et asperiores optio magnam officiis eaque inventore, perferendis nulla cum fuga quis quisquam ducimus commodi impedit dicta aliquam est maiores numquam.',
    },
    {
      title: 'Slide 2',
      text: 'Texto do Slide 2',
    },
    {
      title: 'Slide 3',
      text: 'Texto do Slide 3',
    },
  ];

  return (
    <div className="App">
      <TextSlider slides={slides} />
    </div>
  );
};

export default ShowSlider;
