export const mintDataChar = ({ data, id }: any) => {
  // console.log('image array', data.imageSrc[1])

  return {
    seriesInfo: {
      series: Number(data.series) * 10,
      ticketType: 2,
      title: data.title.toString(),
      benefit: data.benefit.toString(),
      owner: data.owner.toString(),
      useWhere: data.useWhere.toString(),
      useWhenFrom: data.useWhenFrom.toString(),
      useWhenTo: data.useWhenTo.toString(),
      description: data.description.toString(),
      quantity: data.quantity,
    },
    data: [
      {
        name: `Series ${data.series} Level 1`,
        image: data.imageSrc[0],
        description: data.stampBoardDesc.toString(),
        attributes: [
          {
            trait_type: 'Series',
            value: data.series,
          },
        ],
      },
      {
        name: `Series ${data.series} Level 2`,
        image: data.imageSrc[1],
        description: data.firstStampDesc.toString(),
        attributes: [
          {
            trait_type: 'Latitude',
            value: data.firstStampLat,
          },
          {
            trait_type: 'Longitude',
            value: data.firstStampLot,
          },
          {
            trait_type: 'Address',
            value: data.firstStampAddress,
          },
          {
            trait_type: 'Series',
            value: data.series,
          },
        ],
      },
      {
        name: `Series ${data.series} Level 3`,
        image: data.imageSrc[2],
        description: data.secondStampDesc.toString(),
        attributes: [
          {
            trait_type: 'Latitude',
            value: data.secondStampLat,
          },
          {
            trait_type: 'Longitude',
            value: data.secondStampLot,
          },
          {
            trait_type: 'Address',
            value: data.secondStampAddress,
          },
          {
            trait_type: 'Series',
            value: data.series,
          },
        ],
      },
      {
        name: `Series ${data.series} Level 4`,
        image: data.imageSrc[3],
        description: data.thirdStampDesc.toString(),
        attributes: [
          {
            trait_type: 'Latitude',
            value: data.thirdStampLat,
          },
          {
            trait_type: 'Longitude',
            value: data.thirdStampLot,
          },
          {
            trait_type: 'Address',
            value: data.thirdStampAddress,
          },
          {
            trait_type: 'Series',
            value: data.series,
          },
        ],
      },
      {
        name: `Series ${data.series} Level 5`,
        image: data.imageSrc[4],
        description: data.fourthStampDesc.toString(),
        attributes: [
          {
            trait_type: 'Latitude',
            value: data.fourthStampLat,
          },
          {
            trait_type: 'Longitude',
            value: data.fourthStampLot,
          },
          {
            trait_type: 'Address',
            value: data.fourthStampAddress,
          },
          {
            trait_type: 'Series',
            value: data.series,
          },
        ],
      },
    ],
  };
};

// lat: data.thirdStampLat,
// lng: data.thirdStampLot,
// place: data.thirdStampAddress,
// series: data.series,
