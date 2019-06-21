class Channel {

  static getAllChannels() {
    const channels = [
        {
          id: "sky1",
          title: "Sky 1",
          images: {
            logo: "https://mummyjobs.co.uk/wp-content/uploads/2018/01/Sky-Square.png"
          },
          schedules: [
            {
              title: "Cool Stuff",
              id: "sky1_program_1",
              start: "2018-10-26T00:00:00+02:00",
              end: "2018-10-26T00:40:00+02:00"
            },
            {
              title: "Cool Stuff",
              id: "sky1_program_2",
              start: "2018-10-26T00:40:00+02:00",
              end: "2018-10-26T01:00:00+02:00"
            },
            {
              title: "Interesting Show",
              id: "sky1_program_3",
              start: "2018-10-26T01:00:00+02:00",
              end: "2018-10-26T01:50:00+02:00"
            },
            {
              title: "Cool Stuff",
              id: "sky1_program_4",
              start: "2018-10-26T01:50:00+02:00",
              end: "2018-10-26T02:20:00+02:00"
            },
            {
              title: "Interesting Show",
              id: "sky1_program_5",
              start: "2018-10-26T02:20:00+02:00",
              end: "2018-10-26T02:50:00+02:00"
            },
            {
              title: "Awesome Program",
              id: "sky1_program_6",
              start: "2018-10-26T02:50:00+02:00",
              end: "2018-10-26T03:40:00+02:00"
            },
            {
              title: "Supernatural",
              id: "sky1_program_7",
              start: "2018-10-26T03:40:00+02:00",
              end: "2018-10-26T04:10:00+02:00"
            },
            {
              title: "Supernatural",
              id: "sky1_program_8",
              start: "2018-10-26T04:10:00+02:00",
              end: "2018-10-26T04:30:00+02:00"
            },
            {
              title: "Supernatural",
              id: "sky1_program_9",
              start: "2018-10-26T04:30:00+02:00",
              end: "2018-10-26T04:50:00+02:00"
            },
            {
              title: "Supernatural",
              id: "sky1_program_10",
              start: "2018-10-26T04:50:00+02:00",
              end: "2018-10-26T05:40:00+02:00"
            },
            {
              title: "Interesting Show",
              id: "sky1_program_11",
              start: "2018-10-26T05:40:00+02:00",
              end: "2018-10-26T06:00:00+02:00"
            },
            {
              title: "Interesting Show",
              id: "sky1_program_12",
              start: "2018-10-26T06:00:00+02:00",
              end: "2018-10-26T06:20:00+02:00"
            },
            {
              title: "Interesting Show",
              id: "sky1_program_13",
              start: "2018-10-26T06:20:00+02:00",
              end: "2018-10-26T07:00:00+02:00"
            },
            {
              title: "Supernatural",
              id: "sky1_program_14",
              start: "2018-10-26T07:00:00+02:00",
              end: "2018-10-26T07:50:00+02:00"
            },
            {
              title: "Supernatural",
              id: "sky1_program_15",
              start: "2018-10-26T07:50:00+02:00",
              end: "2018-10-26T08:40:00+02:00"
            },
            {
              title: "Awesome Program",
              id: "sky1_program_16",
              start: "2018-10-26T08:40:00+02:00",
              end: "2018-10-26T09:00:00+02:00"
            },
            {
              title: "Cool Stuff",
              id: "sky1_program_17",
              start: "2018-10-26T09:00:00+02:00",
              end: "2018-10-26T09:50:00+02:00"
            },
            {
              title: "Cool Stuff",
              id: "sky1_program_18",
              start: "2018-10-26T09:50:00+02:00",
              end: "2018-10-26T10:10:00+02:00"
            },
            {
              title: "Awesome Program",
              id: "sky1_program_19",
              start: "2018-10-26T10:10:00+02:00",
              end: "2018-10-26T10:40:00+02:00"
            },
            {
              title: "Game of Thrones",
              id: "sky1_program_20",
              start: "2018-10-26T10:40:00+02:00",
              end: "2018-10-26T11:00:00+02:00"
            },
            {
              title: "Cool Stuff",
              id: "sky1_program_21",
              start: "2018-10-26T11:00:00+02:00",
              end: "2018-10-26T11:20:00+02:00"
            },
            {
              title: "Supernatural",
              id: "sky1_program_22",
              start: "2018-10-26T11:20:00+02:00",
              end: "2018-10-26T11:40:00+02:00"
            },
            {
              title: "Vikings",
              id: "sky1_program_23",
              start: "2018-10-26T11:40:00+02:00",
              end: "2018-10-26T12:20:00+02:00"
            },
            {
              title: "Cool Stuff",
              id: "sky1_program_24",
              start: "2018-10-26T12:20:00+02:00",
              end: "2018-10-26T12:50:00+02:00"
            },
            {
              title: "Vikings",
              id: "sky1_program_25",
              start: "2018-10-26T12:50:00+02:00",
              end: "2018-10-26T13:30:00+02:00"
            },
            {
              title: "Interesting Show",
              id: "sky1_program_26",
              start: "2018-10-26T13:30:00+02:00",
              end: "2018-10-26T14:20:00+02:00"
            },
            {
              title: "Supernatural",
              id: "sky1_program_27",
              start: "2018-10-26T14:20:00+02:00",
              end: "2018-10-26T14:50:00+02:00"
            },
            {
              title: "Awesome Program",
              id: "sky1_program_28",
              start: "2018-10-26T14:50:00+02:00",
              end: "2018-10-26T15:40:00+02:00"
            },
            {
              title: "Supernatural",
              id: "sky1_program_29",
              start: "2018-10-26T15:40:00+02:00",
              end: "2018-10-26T16:10:00+02:00"
            },
            {
              title: "Supernatural",
              id: "sky1_program_30",
              start: "2018-10-26T16:10:00+02:00",
              end: "2018-10-26T16:50:00+02:00"
            },
            {
              title: "Interesting Show",
              id: "sky1_program_31",
              start: "2018-10-26T16:50:00+02:00",
              end: "2018-10-26T17:20:00+02:00"
            },
            {
              title: "Vikings",
              id: "sky1_program_32",
              start: "2018-10-26T17:20:00+02:00",
              end: "2018-10-26T18:00:00+02:00"
            },
            {
              title: "Vikings",
              id: "sky1_program_33",
              start: "2018-10-26T18:00:00+02:00",
              end: "2018-10-26T18:40:00+02:00"
            },
            {
              title: "Interesting Show",
              id: "sky1_program_34",
              start: "2018-10-26T18:40:00+02:00",
              end: "2018-10-26T19:20:00+02:00"
            },
            {
              title: "Supernatural",
              id: "sky1_program_35",
              start: "2018-10-26T19:20:00+02:00",
              end: "2018-10-26T20:00:00+02:00"
            },
            {
              title: "Vikings",
              id: "sky1_program_36",
              start: "2018-10-26T20:00:00+02:00",
              end: "2018-10-26T20:50:00+02:00"
            },
            {
              title: "Supernatural",
              id: "sky1_program_37",
              start: "2018-10-26T20:50:00+02:00",
              end: "2018-10-26T21:30:00+02:00"
            },
            {
              scheduletitle: "Cool Stuff",
              id: "sky1_program_38",
              start: "2018-10-26T21:30:00+02:00",
              end: "2018-10-26T21:50:00+02:00"
            },
            {
              title: "Vikings",
              id: "sky1_program_39",
              start: "2018-10-26T21:50:00+02:00",
              end: "2018-10-26T22:20:00+02:00"
            },
            {
              title: "Game of Thrones",
              id: "sky1_program_40",
              start: "2018-10-26T22:20:00+02:00",
              end: "2018-10-26T23:10:00+02:00"
            },
            {
              title: "Vikings",
              id: "sky1_program_41",
              start: "2018-10-26T23:10:00+02:00",
              end: "2018-10-26T23:50:00+02:00"
            }
          ]
        },
        {
          id: "silver",
          title: "Silver",
          images: {
            logo: "https://image.shutterstock.com/image-vector/tv-on-silver-square-button-600w-224517976.jpg"
          },
          schedules: [
            {
              title: "Vikings",
              id: "silver_program_1",
              start: "2018-10-26T00:00:00+02:00",
              end: "2018-10-26T00:20:00+02:00"
            },
            {
              title: "Supernatural",
              id: "silver_program_2",
              start: "2018-10-26T00:20:00+02:00",
              end: "2018-10-26T01:00:00+02:00"
            },
            {
              title: "Interesting Show",
              id: "silver_program_3",
              start: "2018-10-26T01:00:00+02:00",
              end: "2018-10-26T01:50:00+02:00"
            },
            {
              title: "Vikings",
              id: "silver_program_4",
              start: "2018-10-26T01:50:00+02:00",
              end: "2018-10-26T02:30:00+02:00"
            },
            {
              title: "Cool Stuff",
              id: "silver_program_5",
              start: "2018-10-26T02:30:00+02:00",
              end: "2018-10-26T03:10:00+02:00"
            },
            {
              title: "Cool Stuff",
              id: "silver_program_6",
              start: "2018-10-26T03:10:00+02:00",
              end: "2018-10-26T04:00:00+02:00"
            },
            {
              title: "Interesting Show",
              id: "silver_program_7",
              start: "2018-10-26T04:00:00+02:00",
              end: "2018-10-26T04:30:00+02:00"
            },
            {
              title: "Interesting Show",
              id: "silver_program_8",
              start: "2018-10-26T04:30:00+02:00",
              end: "2018-10-26T05:20:00+02:00"
            },
            {
              title: "Awesome Program",
              id: "silver_program_9",
              start: "2018-10-26T05:20:00+02:00",
              end: "2018-10-26T05:40:00+02:00"
            },
            {
              title: "Supernatural",
              id: "silver_program_10",
              start: "2018-10-26T05:40:00+02:00",
              end: "2018-10-26T06:10:00+02:00"
            },
            {
              title: "Vikings",
              id: "silver_program_11",
              start: "2018-10-26T06:10:00+02:00",
              end: "2018-10-26T06:40:00+02:00"
            },
            {
              title: "Game of Thrones",
              id: "silver_program_12",
              start: "2018-10-26T06:40:00+02:00",
              end: "2018-10-26T07:10:00+02:00"
            },
            {
              title: "Game of Thrones",
              id: "silver_program_13",
              start: "2018-10-26T07:10:00+02:00",
              end: "2018-10-26T08:00:00+02:00"
            },
            {
              title: "Game of Thrones",
              id: "silver_program_14",
              start: "2018-10-26T08:00:00+02:00",
              end: "2018-10-26T08:30:00+02:00"
            },
            {
              title: "Game of Thrones",
              id: "silver_program_15",
              start: "2018-10-26T08:30:00+02:00",
              end: "2018-10-26T08:50:00+02:00"
            },
            {
              title: "Awesome Program",
              id: "silver_program_16",
              start: "2018-10-26T08:50:00+02:00",
              end: "2018-10-26T09:10:00+02:00"
            },
            {
              title: "Awesome Program",
              id: "silver_program_17",
              start: "2018-10-26T09:10:00+02:00",
              end: "2018-10-26T10:00:00+02:00"
            },
            {
              title: "Awesome Program",
              id: "silver_program_18",
              start: "2018-10-26T10:00:00+02:00",
              end: "2018-10-26T10:40:00+02:00"
            },
            {
              title: "Awesome Program",
              id: "silver_program_19",
              start: "2018-10-26T10:40:00+02:00",
              end: "2018-10-26T11:30:00+02:00"
            },
            {
              title: "Game of Thrones",
              id: "silver_program_20",
              start: "2018-10-26T11:30:00+02:00",
              end: "2018-10-26T12:10:00+02:00"
            },
            {
              title: "Awesome Program",
              id: "silver_program_21",
              start: "2018-10-26T12:10:00+02:00",
              end: "2018-10-26T12:40:00+02:00"
            },
            {
              title: "Vikings",
              id: "silver_program_22",
              start: "2018-10-26T12:40:00+02:00",
              end: "2018-10-26T13:30:00+02:00"
            },
            {
              title: "Vikings",
              id: "silver_program_23",
              start: "2018-10-26T13:30:00+02:00",
              end: "2018-10-26T14:00:00+02:00"
            },
            {
              title: "Awesome Program",
              id: "silver_program_24",
              start: "2018-10-26T14:00:00+02:00",
              end: "2018-10-26T14:40:00+02:00"
            },
            {
              title: "Vikings",
              id: "silver_program_25",
              start: "2018-10-26T14:40:00+02:00",
              end: "2018-10-26T15:30:00+02:00"
            },
            {
              title: "Cool Stuff",
              id: "silver_program_26",
              start: "2018-10-26T15:30:00+02:00",
              end: "2018-10-26T15:50:00+02:00"
            },
            {
              title: "Interesting Show",
              id: "silver_program_27",
              start: "2018-10-26T15:50:00+02:00",
              end: "2018-10-26T16:30:00+02:00"
            },
            {
              title: "Vikings",
              id: "silver_program_28",
              start: "2018-10-26T16:30:00+02:00",
              end: "2018-10-26T17:20:00+02:00"
            },
            {
              title: "Game of Thrones",
              id: "silver_program_29",
              start: "2018-10-26T17:20:00+02:00",
              end: "2018-10-26T17:50:00+02:00"
            },
            {
              title: "Interesting Show",
              id: "silver_program_30",
              start: "2018-10-26T17:50:00+02:00",
              end: "2018-10-26T18:30:00+02:00"
            },
            {
              title: "Game of Thrones",
              id: "silver_program_31",
              start: "2018-10-26T18:30:00+02:00",
              end: "2018-10-26T19:20:00+02:00"
            },
            {
              title: "Game of Thrones",
              id: "silver_program_32",
              start: "2018-10-26T19:20:00+02:00",
              end: "2018-10-26T20:10:00+02:00"
            },
            {
              title: "Game of Thrones",
              id: "silver_program_33",
              start: "2018-10-26T20:10:00+02:00",
              end: "2018-10-26T20:50:00+02:00"
            },
            {
              title: "Supernatural",
              id: "silver_program_34",
              start: "2018-10-26T20:50:00+02:00",
              end: "2018-10-26T21:20:00+02:00"
            },
            {
              title: "Interesting Show",
              id: "silver_program_35",
              start: "2018-10-26T21:20:00+02:00",
              end: "2018-10-26T22:00:00+02:00"
            },
            {
              title: "Awesome Program",
              id: "silver_program_36",
              start: "2018-10-26T22:00:00+02:00",
              end: "2018-10-26T22:20:00+02:00"
            },
            {
              title: "Vikings",
              id: "silver_program_37",
              start: "2018-10-26T22:20:00+02:00",
              end: "2018-10-26T22:50:00+02:00"
            },
            {
              title: "Game of Thrones",
              id: "silver_program_38",
              start: "2018-10-26T22:50:00+02:00",
              end: "2018-10-26T23:40:00+02:00"
            }
          ]
        },
        {
          id: "hbo",
          title: "HBO",
          images: {
            logo: "http://www.tv-logo.com/pt-data/uploads/images/logo/hbo_ca_east.jpg"
          },
          schedules: [
            {
              title: "Interesting Show",
              id: "dummy_program_id",
              start: "2018-10-26T00:00:00+02:00",
              end: "2018-10-26T00:40:00+02:00"
            },
            {
              title: "Awesome Program",
              id: "dummy_program_id",
              start: "2018-10-26T00:40:00+02:00",
              end: "2018-10-26T01:00:00+02:00"
            },
            {
              title: "Vikings",
              id: "dummy_program_id",
              start: "2018-10-26T01:00:00+02:00",
              end: "2018-10-26T01:40:00+02:00"
            },
            {
              title: "Awesome Program",
              id: "dummy_program_id",
              start: "2018-10-26T01:40:00+02:00",
              end: "2018-10-26T02:00:00+02:00"
            },
            {
              title: "Cool Stuff",
              id: "dummy_program_id",
              start: "2018-10-26T02:00:00+02:00",
              end: "2018-10-26T02:20:00+02:00"
            },
            {
              title: "Game of Thrones",
              id: "dummy_program_id",
              start: "2018-10-26T02:20:00+02:00",
              end: "2018-10-26T03:10:00+02:00"
            },
            {
              title: "Interesting Show",
              id: "dummy_program_id",
              start: "2018-10-26T03:10:00+02:00",
              end: "2018-10-26T03:30:00+02:00"
            },
            {
              title: "Interesting Show",
              id: "dummy_program_id",
              start: "2018-10-26T03:30:00+02:00",
              end: "2018-10-26T03:50:00+02:00"
            },
            {
              title: "Interesting Show",
              id: "dummy_program_id",
              start: "2018-10-26T03:50:00+02:00",
              end: "2018-10-26T04:30:00+02:00"
            },
            {
              title: "Cool Stuff",
              id: "dummy_program_id",
              start: "2018-10-26T04:30:00+02:00",
              end: "2018-10-26T05:20:00+02:00"
            },
            {
              title: "Vikings",
              id: "dummy_program_id",
              start: "2018-10-26T05:20:00+02:00",
              end: "2018-10-26T06:00:00+02:00"
            },
            {
              title: "Vikings",
              id: "dummy_program_id",
              start: "2018-10-26T06:00:00+02:00",
              end: "2018-10-26T06:20:00+02:00"
            },
            {
              title: "Vikings",
              id: "dummy_program_id",
              start: "2018-10-26T06:20:00+02:00",
              end: "2018-10-26T06:40:00+02:00"
            },
            {
              title: "Vikings",
              id: "dummy_program_id",
              start: "2018-10-26T06:40:00+02:00",
              end: "2018-10-26T07:20:00+02:00"
            },
            {
              title: "Supernatural",
              id: "dummy_program_id",
              start: "2018-10-26T07:20:00+02:00",
              end: "2018-10-26T07:40:00+02:00"
            },
            {
              title: "Interesting Show",
              id: "dummy_program_id",
              start: "2018-10-26T07:40:00+02:00",
              end: "2018-10-26T08:30:00+02:00"
            },
            {
              title: "Interesting Show",
              id: "dummy_program_id",
              start: "2018-10-26T08:30:00+02:00",
              end: "2018-10-26T09:00:00+02:00"
            },
            {
              title: "Game of Thrones",
              id: "dummy_program_id",
              start: "2018-10-26T09:00:00+02:00",
              end: "2018-10-26T09:20:00+02:00"
            },
            {
              title: "Awesome Program",
              id: "dummy_program_id",
              start: "2018-10-26T09:20:00+02:00",
              end: "2018-10-26T10:00:00+02:00"
            },
            {
              title: "Interesting Show",
              id: "dummy_program_id",
              start: "2018-10-26T10:00:00+02:00",
              end: "2018-10-26T10:20:00+02:00"
            },
            {
              title: "Awesome Program",
              id: "dummy_program_id",
              start: "2018-10-26T10:20:00+02:00",
              end: "2018-10-26T10:40:00+02:00"
            },
            {
              title: "Supernatural",
              id: "dummy_program_id",
              start: "2018-10-26T10:40:00+02:00",
              end: "2018-10-26T11:10:00+02:00"
            },
            {
              title: "Awesome Program",
              id: "dummy_program_id",
              start: "2018-10-26T11:10:00+02:00",
              end: "2018-10-26T12:00:00+02:00"
            },
            {
              title: "Supernatural",
              id: "dummy_program_id",
              start: "2018-10-26T12:00:00+02:00",
              end: "2018-10-26T12:20:00+02:00"
            },
            {
              title: "Interesting Show",
              id: "dummy_program_id",
              start: "2018-10-26T12:20:00+02:00",
              end: "2018-10-26T13:10:00+02:00"
            },
            {
              title: "Game of Thrones",
              id: "dummy_program_id",
              start: "2018-10-26T13:10:00+02:00",
              end: "2018-10-26T14:00:00+02:00"
            },
            {
              title: "Cool Stuff",
              id: "dummy_program_id",
              start: "2018-10-26T14:00:00+02:00",
              end: "2018-10-26T14:50:00+02:00"
            },
            {
              title: "Supernatural",
              id: "dummy_program_id",
              start: "2018-10-26T14:50:00+02:00",
              end: "2018-10-26T15:20:00+02:00"
            },
            {
              title: "Interesting Show",
              id: "dummy_program_id",
              start: "2018-10-26T15:20:00+02:00",
              end: "2018-10-26T15:40:00+02:00"
            },
            {
              title: "Vikings",
              id: "dummy_program_id",
              start: "2018-10-26T15:40:00+02:00",
              end: "2018-10-26T16:10:00+02:00"
            },
            {
              title: "Interesting Show",
              id: "dummy_program_id",
              start: "2018-10-26T16:10:00+02:00",
              end: "2018-10-26T16:30:00+02:00"
            },
            {
              title: "Awesome Program",
              id: "dummy_program_id",
              start: "2018-10-26T16:30:00+02:00",
              end: "2018-10-26T17:20:00+02:00"
            },
            {
              title: "Vikings",
              id: "dummy_program_id",
              start: "2018-10-26T17:20:00+02:00",
              end: "2018-10-26T17:40:00+02:00"
            },
            {
              title: "Awesome Program",
              id: "dummy_program_id",
              start: "2018-10-26T17:40:00+02:00",
              end: "2018-10-26T18:20:00+02:00"
            },
            {
              title: "Interesting Show",
              id: "dummy_program_id",
              start: "2018-10-26T18:20:00+02:00",
              end: "2018-10-26T19:10:00+02:00"
            },
            {
              title: "Awesome Program",
              id: "dummy_program_id",
              start: "2018-10-26T19:10:00+02:00",
              end: "2018-10-26T19:30:00+02:00"
            },
            {
              title: "Cool Stuff",
              id: "dummy_program_id",
              start: "2018-10-26T19:30:00+02:00",
              end: "2018-10-26T20:00:00+02:00"
            },
            {
              title: "Awesome Program",
              id: "dummy_program_id",
              start: "2018-10-26T20:00:00+02:00",
              end: "2018-10-26T20:30:00+02:00"
            },
            {
              title: "Vikings",
              id: "dummy_program_id",
              start: "2018-10-26T20:30:00+02:00",
              end: "2018-10-26T21:10:00+02:00"
            },
            {
              title: "Game of Thrones",
              id: "dummy_program_id",
              start: "2018-10-26T21:10:00+02:00",
              end: "2018-10-26T21:50:00+02:00"
            },
            {
              title: "Game of Thrones",
              id: "dummy_program_id",
              start: "2018-10-26T21:50:00+02:00",
              end: "2018-10-26T22:40:00+02:00"
            },
            {
              title: "Cool Stuff",
              id: "dummy_program_id",
              start: "2018-10-26T22:40:00+02:00",
              end: "2018-10-26T23:20:00+02:00"
            }
          ]
        },
        {
          id: "cw",
          title: "The CW",
          images: {
            logo: "https://media.glassdoor.com/sql/42041/the-cw-squarelogo.png"
          },
          schedules: [
            {
              title: "Awesome Program",
              id: "dummy_program_id",
              start: "2018-10-26T00:00:00+02:00",
              end: "2018-10-26T00:50:00+02:00"
            },
            {
              title: "Cool Stuff",
              id: "dummy_program_id",
              start: "2018-10-26T00:50:00+02:00",
              end: "2018-10-26T01:40:00+02:00"
            },
            {
              title: "Interesting Show",
              id: "dummy_program_id",
              start: "2018-10-26T01:40:00+02:00",
              end: "2018-10-26T02:20:00+02:00"
            },
            {
              title: "Cool Stuff",
              id: "dummy_program_id",
              start: "2018-10-26T02:20:00+02:00",
              end: "2018-10-26T03:10:00+02:00"
            },
            {
              title: "Supernatural",
              id: "dummy_program_id",
              start: "2018-10-26T03:10:00+02:00",
              end: "2018-10-26T03:40:00+02:00"
            },
            {
              title: "Interesting Show",
              id: "dummy_program_id",
              start: "2018-10-26T03:40:00+02:00",
              end: "2018-10-26T04:20:00+02:00"
            },
            {
              title: "Supernatural",
              id: "dummy_program_id",
              start: "2018-10-26T04:20:00+02:00",
              end: "2018-10-26T05:00:00+02:00"
            },
            {
              title: "Game of Thrones",
              id: "dummy_program_id",
              start: "2018-10-26T05:00:00+02:00",
              end: "2018-10-26T05:50:00+02:00"
            },
            {
              title: "Awesome Program",
              id: "dummy_program_id",
              start: "2018-10-26T05:50:00+02:00",
              end: "2018-10-26T06:30:00+02:00"
            },
            {
              title: "Awesome Program",
              id: "dummy_program_id",
              start: "2018-10-26T06:30:00+02:00",
              end: "2018-10-26T07:10:00+02:00"
            },
            {
              title: "Cool Stuff",
              id: "dummy_program_id",
              start: "2018-10-26T07:10:00+02:00",
              end: "2018-10-26T08:00:00+02:00"
            },
            {
              title: "Cool Stuff",
              id: "dummy_program_id",
              start: "2018-10-26T08:00:00+02:00",
              end: "2018-10-26T08:30:00+02:00"
            },
            {
              title: "Vikings",
              id: "dummy_program_id",
              start: "2018-10-26T08:30:00+02:00",
              end: "2018-10-26T09:10:00+02:00"
            },
            {
              title: "Awesome Program",
              id: "dummy_program_id",
              start: "2018-10-26T09:10:00+02:00",
              end: "2018-10-26T09:50:00+02:00"
            },
            {
              title: "Interesting Show",
              id: "dummy_program_id",
              start: "2018-10-26T09:50:00+02:00",
              end: "2018-10-26T10:20:00+02:00"
            },
            {
              title: "Awesome Program",
              id: "dummy_program_id",
              start: "2018-10-26T10:20:00+02:00",
              end: "2018-10-26T10:50:00+02:00"
            },
            {
              title: "Game of Thrones",
              id: "dummy_program_id",
              start: "2018-10-26T10:50:00+02:00",
              end: "2018-10-26T11:40:00+02:00"
            },
            {
              title: "Awesome Program",
              id: "dummy_program_id",
              start: "2018-10-26T11:40:00+02:00",
              end: "2018-10-26T12:00:00+02:00"
            },
            {
              title: "Supernatural",
              id: "dummy_program_id",
              start: "2018-10-26T12:00:00+02:00",
              end: "2018-10-26T12:20:00+02:00"
            },
            {
              title: "Game of Thrones",
              id: "dummy_program_id",
              start: "2018-10-26T12:20:00+02:00",
              end: "2018-10-26T12:40:00+02:00"
            },
            {
              title: "Supernatural",
              id: "dummy_program_id",
              start: "2018-10-26T12:40:00+02:00",
              end: "2018-10-26T13:20:00+02:00"
            },
            {
              title: "Awesome Program",
              id: "dummy_program_id",
              start: "2018-10-26T13:20:00+02:00",
              end: "2018-10-26T13:40:00+02:00"
            },
            {
              title: "Cool Stuff",
              id: "dummy_program_id",
              start: "2018-10-26T13:40:00+02:00",
              end: "2018-10-26T14:20:00+02:00"
            },
            {
              title: "Awesome Program",
              id: "dummy_program_id",
              start: "2018-10-26T14:20:00+02:00",
              end: "2018-10-26T15:00:00+02:00"
            },
            {
              title: "Awesome Program",
              id: "dummy_program_id",
              start: "2018-10-26T15:00:00+02:00",
              end: "2018-10-26T15:30:00+02:00"
            },
            {
              title: "Game of Thrones",
              id: "dummy_program_id",
              start: "2018-10-26T15:30:00+02:00",
              end: "2018-10-26T16:20:00+02:00"
            },
            {
              title: "Awesome Program",
              id: "dummy_program_id",
              start: "2018-10-26T16:20:00+02:00",
              end: "2018-10-26T17:10:00+02:00"
            },
            {
              title: "Supernatural",
              id: "dummy_program_id",
              start: "2018-10-26T17:10:00+02:00",
              end: "2018-10-26T17:40:00+02:00"
            },
            {
              title: "Awesome Program",
              id: "dummy_program_id",
              start: "2018-10-26T17:40:00+02:00",
              end: "2018-10-26T18:20:00+02:00"
            },
            {
              title: "Interesting Show",
              id: "dummy_program_id",
              start: "2018-10-26T18:20:00+02:00",
              end: "2018-10-26T19:10:00+02:00"
            },
            {
              title: "Game of Thrones",
              id: "dummy_program_id",
              start: "2018-10-26T19:10:00+02:00",
              end: "2018-10-26T19:50:00+02:00"
            },
            {
              title: "Cool Stuff",
              id: "dummy_program_id",
              start: "2018-10-26T19:50:00+02:00",
              end: "2018-10-26T20:30:00+02:00"
            },
            {
              title: "Awesome Program",
              id: "dummy_program_id",
              start: "2018-10-26T20:30:00+02:00",
              end: "2018-10-26T20:50:00+02:00"
            },
            {
              title: "Supernatural",
              id: "dummy_program_id",
              start: "2018-10-26T20:50:00+02:00",
              end: "2018-10-26T21:40:00+02:00"
            },
            {
              title: "Cool Stuff",
              id: "dummy_program_id",
              start: "2018-10-26T21:40:00+02:00",
              end: "2018-10-26T22:20:00+02:00"
            },
            {
              title: "Cool Stuff",
              id: "dummy_program_id",
              start: "2018-10-26T22:20:00+02:00",
              end: "2018-10-26T23:00:00+02:00"
            },
            {
              title: "Vikings",
              id: "dummy_program_id",
              start: "2018-10-26T23:00:00+02:00",
              end: "2018-10-26T23:20:00+02:00"
            },
            {
              title: "Supernatural",
              id: "dummy_program_id",
              start: "2018-10-26T23:20:00+02:00",
              end: "2018-10-26T23:40:00+02:00"
            }
          ]
        },
        {
          id: "vox",
          title: "Vox",
          images: {
            logo: "https://openserve.co.za/open/media/photologue/photos/cache/Vox---Green-logo-272x272_image_3_lg.png"
          },
          schedules: [
            {
              title: "Supernatural",
              id: "dummy_program_id",
              start: "2018-10-26T00:00:00+02:00",
              end: "2018-10-26T00:50:00+02:00"
            },
            {
              title: "Supernatural",
              id: "dummy_program_id",
              start: "2018-10-26T00:50:00+02:00",
              end: "2018-10-26T01:20:00+02:00"
            },
            {
              title: "Cool Stuff",
              id: "dummy_program_id",
              start: "2018-10-26T01:20:00+02:00",
              end: "2018-10-26T02:00:00+02:00"
            },
            {
              title: "Cool Stuff",
              id: "dummy_program_id",
              start: "2018-10-26T02:00:00+02:00",
              end: "2018-10-26T02:20:00+02:00"
            },
            {
              title: "Supernatural",
              id: "dummy_program_id",
              start: "2018-10-26T02:20:00+02:00",
              end: "2018-10-26T02:40:00+02:00"
            },
            {
              title: "Interesting Show",
              id: "dummy_program_id",
              start: "2018-10-26T02:40:00+02:00",
              end: "2018-10-26T03:30:00+02:00"
            },
            {
              title: "Vikings",
              id: "dummy_program_id",
              start: "2018-10-26T03:30:00+02:00",
              end: "2018-10-26T04:10:00+02:00"
            },
            {
              title: "Cool Stuff",
              id: "dummy_program_id",
              start: "2018-10-26T04:10:00+02:00",
              end: "2018-10-26T04:30:00+02:00"
            },
            {
              title: "Awesome Program",
              id: "dummy_program_id",
              start: "2018-10-26T04:30:00+02:00",
              end: "2018-10-26T05:10:00+02:00"
            },
            {
              title: "Game of Thrones",
              id: "dummy_program_id",
              start: "2018-10-26T05:10:00+02:00",
              end: "2018-10-26T05:30:00+02:00"
            },
            {
              title: "Supernatural",
              id: "dummy_program_id",
              start: "2018-10-26T05:30:00+02:00",
              end: "2018-10-26T06:00:00+02:00"
            },
            {
              title: "Vikings",
              id: "dummy_program_id",
              start: "2018-10-26T06:00:00+02:00",
              end: "2018-10-26T06:30:00+02:00"
            },
            {
              title: "Vikings",
              id: "dummy_program_id",
              start: "2018-10-26T06:30:00+02:00",
              end: "2018-10-26T07:20:00+02:00"
            },
            {
              title: "Interesting Show",
              id: "dummy_program_id",
              start: "2018-10-26T07:20:00+02:00",
              end: "2018-10-26T07:50:00+02:00"
            },
            {
              title: "Game of Thrones",
              id: "dummy_program_id",
              start: "2018-10-26T07:50:00+02:00",
              end: "2018-10-26T08:30:00+02:00"
            },
            {
              title: "Interesting Show",
              id: "dummy_program_id",
              start: "2018-10-26T08:30:00+02:00",
              end: "2018-10-26T09:00:00+02:00"
            },
            {
              title: "Awesome Program",
              id: "dummy_program_id",
              start: "2018-10-26T09:00:00+02:00",
              end: "2018-10-26T09:40:00+02:00"
            },
            {
              title: "Vikings",
              id: "dummy_program_id",
              start: "2018-10-26T09:40:00+02:00",
              end: "2018-10-26T10:00:00+02:00"
            },
            {
              title: "Supernatural",
              id: "dummy_program_id",
              start: "2018-10-26T10:00:00+02:00",
              end: "2018-10-26T10:40:00+02:00"
            },
            {
              title: "Interesting Show",
              id: "dummy_program_id",
              start: "2018-10-26T10:40:00+02:00",
              end: "2018-10-26T11:10:00+02:00"
            },
            {
              title: "Vikings",
              id: "dummy_program_id",
              start: "2018-10-26T11:10:00+02:00",
              end: "2018-10-26T11:50:00+02:00"
            },
            {
              title: "Supernatural",
              id: "dummy_program_id",
              start: "2018-10-26T11:50:00+02:00",
              end: "2018-10-26T12:40:00+02:00"
            },
            {
              title: "Vikings",
              id: "dummy_program_id",
              start: "2018-10-26T12:40:00+02:00",
              end: "2018-10-26T13:20:00+02:00"
            },
            {
              title: "Awesome Program",
              id: "dummy_program_id",
              start: "2018-10-26T13:20:00+02:00",
              end: "2018-10-26T14:00:00+02:00"
            },
            {
              title: "Interesting Show",
              id: "dummy_program_id",
              start: "2018-10-26T14:00:00+02:00",
              end: "2018-10-26T14:20:00+02:00"
            },
            {
              title: "Vikings",
              id: "dummy_program_id",
              start: "2018-10-26T14:20:00+02:00",
              end: "2018-10-26T15:00:00+02:00"
            },
            {
              title: "Supernatural",
              id: "dummy_program_id",
              start: "2018-10-26T15:00:00+02:00",
              end: "2018-10-26T15:20:00+02:00"
            },
            {
              title: "Vikings",
              id: "dummy_program_id",
              start: "2018-10-26T15:20:00+02:00",
              end: "2018-10-26T16:00:00+02:00"
            },
            {
              title: "Cool Stuff",
              id: "dummy_program_id",
              start: "2018-10-26T16:00:00+02:00",
              end: "2018-10-26T16:20:00+02:00"
            },
            {
              title: "Interesting Show",
              id: "dummy_program_id",
              start: "2018-10-26T16:20:00+02:00",
              end: "2018-10-26T16:50:00+02:00"
            },
            {
              title: "Awesome Program",
              id: "dummy_program_id",
              start: "2018-10-26T16:50:00+02:00",
              end: "2018-10-26T17:20:00+02:00"
            },
            {
              title: "Cool Stuff",
              id: "dummy_program_id",
              start: "2018-10-26T17:20:00+02:00",
              end: "2018-10-26T17:40:00+02:00"
            },
            {
              title: "Interesting Show",
              id: "dummy_program_id",
              start: "2018-10-26T17:40:00+02:00",
              end: "2018-10-26T18:00:00+02:00"
            },
            {
              title: "Supernatural",
              id: "dummy_program_id",
              start: "2018-10-26T18:00:00+02:00",
              end: "2018-10-26T18:30:00+02:00"
            },
            {
              title: "Awesome Program",
              id: "dummy_program_id",
              start: "2018-10-26T18:30:00+02:00",
              end: "2018-10-26T19:20:00+02:00"
            },
            {
              title: "Vikings",
              id: "dummy_program_id",
              start: "2018-10-26T19:20:00+02:00",
              end: "2018-10-26T19:50:00+02:00"
            },
            {
              title: "Interesting Show",
              id: "dummy_program_id",
              start: "2018-10-26T19:50:00+02:00",
              end: "2018-10-26T20:40:00+02:00"
            },
            {
              title: "Interesting Show",
              id: "dummy_program_id",
              start: "2018-10-26T20:40:00+02:00",
              end: "2018-10-26T21:20:00+02:00"
            },
            {
              title: "Cool Stuff",
              id: "dummy_program_id",
              start: "2018-10-26T21:20:00+02:00",
              end: "2018-10-26T22:10:00+02:00"
            },
            {
              title: "Game of Thrones",
              id: "dummy_program_id",
              start: "2018-10-26T22:10:00+02:00",
              end: "2018-10-26T23:00:00+02:00"
            },
            {
              title: "Game of Thrones",
              id: "dummy_program_id",
              start: "2018-10-26T23:00:00+02:00",
              end: "2018-10-26T23:40:00+02:00"
            }
          ]
        },
        {
          id: "history",
          title: "History",
          images: {
            logo: "https://openserve.co.za/open/media/photologue/photos/cache/Vox---Green-logo-272x272_image_3_lg.png"
          },
          schedules: [
            {
              title: "Cool Stuff",
              id: "dummy_program_id",
              start: "2018-10-26T00:00:00+02:00",
              end: "2018-10-26T00:20:00+02:00"
            },
            {
              title: "Vikings",
              id: "dummy_program_id",
              start: "2018-10-26T00:20:00+02:00",
              end: "2018-10-26T01:00:00+02:00"
            },
            {
              title: "Game of Thrones",
              id: "dummy_program_id",
              start: "2018-10-26T01:00:00+02:00",
              end: "2018-10-26T01:20:00+02:00"
            },
            {
              title: "Awesome Program",
              id: "dummy_program_id",
              start: "2018-10-26T01:20:00+02:00",
              end: "2018-10-26T02:10:00+02:00"
            },
            {
              title: "Supernatural",
              id: "dummy_program_id",
              start: "2018-10-26T02:10:00+02:00",
              end: "2018-10-26T03:00:00+02:00"
            },
            {
              title: "Supernatural",
              id: "dummy_program_id",
              start: "2018-10-26T03:00:00+02:00",
              end: "2018-10-26T03:30:00+02:00"
            },
            {
              title: "Vikings",
              id: "dummy_program_id",
              start: "2018-10-26T03:30:00+02:00",
              end: "2018-10-26T04:10:00+02:00"
            },
            {
              title: "Cool Stuff",
              id: "dummy_program_id",
              start: "2018-10-26T04:10:00+02:00",
              end: "2018-10-26T05:00:00+02:00"
            },
            {
              title: "Awesome Program",
              id: "dummy_program_id",
              start: "2018-10-26T05:00:00+02:00",
              end: "2018-10-26T05:50:00+02:00"
            },
            {
              title: "Cool Stuff",
              id: "dummy_program_id",
              start: "2018-10-26T05:50:00+02:00",
              end: "2018-10-26T06:10:00+02:00"
            },
            {
              title: "Awesome Program",
              id: "dummy_program_id",
              start: "2018-10-26T06:10:00+02:00",
              end: "2018-10-26T06:30:00+02:00"
            },
            {
              title: "Cool Stuff",
              id: "dummy_program_id",
              start: "2018-10-26T06:30:00+02:00",
              end: "2018-10-26T06:50:00+02:00"
            },
            {
              title: "Supernatural",
              id: "dummy_program_id",
              start: "2018-10-26T06:50:00+02:00",
              end: "2018-10-26T07:20:00+02:00"
            },
            {
              title: "Supernatural",
              id: "dummy_program_id",
              start: "2018-10-26T07:20:00+02:00",
              end: "2018-10-26T08:10:00+02:00"
            },
            {
              title: "Game of Thrones",
              id: "dummy_program_id",
              start: "2018-10-26T08:10:00+02:00",
              end: "2018-10-26T09:00:00+02:00"
            },
            {
              title: "Game of Thrones",
              id: "dummy_program_id",
              start: "2018-10-26T09:00:00+02:00",
              end: "2018-10-26T09:30:00+02:00"
            },
            {
              title: "Game of Thrones",
              id: "dummy_program_id",
              start: "2018-10-26T09:30:00+02:00",
              end: "2018-10-26T10:20:00+02:00"
            },
            {
              title: "Interesting Show",
              id: "dummy_program_id",
              start: "2018-10-26T10:20:00+02:00",
              end: "2018-10-26T10:50:00+02:00"
            },
            {
              title: "Vikings",
              id: "dummy_program_id",
              start: "2018-10-26T10:50:00+02:00",
              end: "2018-10-26T11:20:00+02:00"
            },
            {
              title: "Game of Thrones",
              id: "dummy_program_id",
              start: "2018-10-26T11:20:00+02:00",
              end: "2018-10-26T11:40:00+02:00"
            },
            {
              title: "Game of Thrones",
              id: "dummy_program_id",
              start: "2018-10-26T11:40:00+02:00",
              end: "2018-10-26T12:30:00+02:00"
            },
            {
              title: "Awesome Program",
              id: "dummy_program_id",
              start: "2018-10-26T12:30:00+02:00",
              end: "2018-10-26T13:20:00+02:00"
            },
            {
              title: "Cool Stuff",
              id: "dummy_program_id",
              start: "2018-10-26T13:20:00+02:00",
              end: "2018-10-26T14:00:00+02:00"
            },
            {
              title: "Game of Thrones",
              id: "dummy_program_id",
              start: "2018-10-26T14:00:00+02:00",
              end: "2018-10-26T14:20:00+02:00"
            },
            {
              title: "Interesting Show",
              id: "dummy_program_id",
              start: "2018-10-26T14:20:00+02:00",
              end: "2018-10-26T14:50:00+02:00"
            },
            {
              title: "Supernatural",
              id: "dummy_program_id",
              start: "2018-10-26T14:50:00+02:00",
              end: "2018-10-26T15:10:00+02:00"
            },
            {
              title: "Awesome Program",
              id: "dummy_program_id",
              start: "2018-10-26T15:10:00+02:00",
              end: "2018-10-26T16:00:00+02:00"
            },
            {
              title: "Awesome Program",
              id: "dummy_program_id",
              start: "2018-10-26T16:00:00+02:00",
              end: "2018-10-26T16:40:00+02:00"
            },
            {
              title: "Interesting Show",
              id: "dummy_program_id",
              start: "2018-10-26T16:40:00+02:00",
              end: "2018-10-26T17:00:00+02:00"
            },
            {
              title: "Supernatural",
              id: "dummy_program_id",
              start: "2018-10-26T17:00:00+02:00",
              end: "2018-10-26T17:30:00+02:00"
            },
            {
              title: "Cool Stuff",
              id: "dummy_program_id",
              start: "2018-10-26T17:30:00+02:00",
              end: "2018-10-26T17:50:00+02:00"
            },
            {
              title: "Interesting Show",
              id: "dummy_program_id",
              start: "2018-10-26T17:50:00+02:00",
              end: "2018-10-26T18:10:00+02:00"
            },
            {
              title: "Cool Stuff",
              id: "dummy_program_id",
              start: "2018-10-26T18:10:00+02:00",
              end: "2018-10-26T18:50:00+02:00"
            },
            {
              title: "Vikings",
              id: "dummy_program_id",
              start: "2018-10-26T18:50:00+02:00",
              end: "2018-10-26T19:40:00+02:00"
            },
            {
              title: "Cool Stuff",
              id: "dummy_program_id",
              start: "2018-10-26T19:40:00+02:00",
              end: "2018-10-26T20:20:00+02:00"
            },
            {
              title: "Awesome Program",
              id: "dummy_program_id",
              start: "2018-10-26T20:20:00+02:00",
              end: "2018-10-26T21:10:00+02:00"
            },
            {
              title: "Interesting Show",
              id: "dummy_program_id",
              start: "2018-10-26T21:10:00+02:00",
              end: "2018-10-26T21:50:00+02:00"
            },
            {
              title: "Supernatural",
              id: "dummy_program_id",
              start: "2018-10-26T21:50:00+02:00",
              end: "2018-10-26T22:10:00+02:00"
            },
            {
              title: "Game of Thrones",
              id: "dummy_program_id",
              start: "2018-10-26T22:10:00+02:00",
              end: "2018-10-26T23:00:00+02:00"
            },
            {
              title: "Game of Thrones",
              id: "dummy_program_id",
              start: "2018-10-26T23:00:00+02:00",
              end: "2018-10-26T23:30:00+02:00"
            },
            {
              title: "Cool Stuff",
              id: "dummy_program_id",
              start: "2018-10-26T23:30:00+02:00",
              end: "2018-10-26T23:50:00+02:00"
            }
          ]
        },
        {
          id: "sixx",
          title: "Sixx",
          images: {
            logo: "https://openserve.co.za/open/media/photologue/photos/cache/Vox---Green-logo-272x272_image_3_lg.png"
          },
          schedules: [
            {
              title: "Vikings",
              id: "dummy_program_id",
              start: "2018-10-26T00:00:00+02:00",
              end: "2018-10-26T00:50:00+02:00"
            },
            {
              title: "Game of Thrones",
              id: "dummy_program_id",
              start: "2018-10-26T00:50:00+02:00",
              end: "2018-10-26T01:40:00+02:00"
            },
            {
              title: "Supernatural",
              id: "dummy_program_id",
              start: "2018-10-26T01:40:00+02:00",
              end: "2018-10-26T02:10:00+02:00"
            },
            {
              title: "Cool Stuff",
              id: "dummy_program_id",
              start: "2018-10-26T02:10:00+02:00",
              end: "2018-10-26T02:30:00+02:00"
            },
            {
              title: "Interesting Show",
              id: "dummy_program_id",
              start: "2018-10-26T02:30:00+02:00",
              end: "2018-10-26T03:10:00+02:00"
            },
            {
              title: "Vikings",
              id: "dummy_program_id",
              start: "2018-10-26T03:10:00+02:00",
              end: "2018-10-26T03:50:00+02:00"
            },
            {
              title: "Interesting Show",
              id: "dummy_program_id",
              start: "2018-10-26T03:50:00+02:00",
              end: "2018-10-26T04:30:00+02:00"
            },
            {
              title: "Cool Stuff",
              id: "dummy_program_id",
              start: "2018-10-26T04:30:00+02:00",
              end: "2018-10-26T05:00:00+02:00"
            },
            {
              title: "Game of Thrones",
              id: "dummy_program_id",
              start: "2018-10-26T05:00:00+02:00",
              end: "2018-10-26T05:40:00+02:00"
            },
            {
              title: "Awesome Program",
              id: "dummy_program_id",
              start: "2018-10-26T05:40:00+02:00",
              end: "2018-10-26T06:10:00+02:00"
            },
            {
              title: "Vikings",
              id: "dummy_program_id",
              start: "2018-10-26T06:10:00+02:00",
              end: "2018-10-26T06:40:00+02:00"
            },
            {
              title: "Supernatural",
              id: "dummy_program_id",
              start: "2018-10-26T06:40:00+02:00",
              end: "2018-10-26T07:20:00+02:00"
            },
            {
              title: "Supernatural",
              id: "dummy_program_id",
              start: "2018-10-26T07:20:00+02:00",
              end: "2018-10-26T07:40:00+02:00"
            },
            {
              title: "Vikings",
              id: "dummy_program_id",
              start: "2018-10-26T07:40:00+02:00",
              end: "2018-10-26T08:20:00+02:00"
            },
            {
              title: "Awesome Program",
              id: "dummy_program_id",
              start: "2018-10-26T08:20:00+02:00",
              end: "2018-10-26T08:50:00+02:00"
            },
            {
              title: "Awesome Program",
              id: "dummy_program_id",
              start: "2018-10-26T08:50:00+02:00",
              end: "2018-10-26T09:10:00+02:00"
            },
            {
              title: "Awesome Program",
              id: "dummy_program_id",
              start: "2018-10-26T09:10:00+02:00",
              end: "2018-10-26T09:40:00+02:00"
            },
            {
              title: "Vikings",
              id: "dummy_program_id",
              start: "2018-10-26T09:40:00+02:00",
              end: "2018-10-26T10:30:00+02:00"
            },
            {
              title: "Interesting Show",
              id: "dummy_program_id",
              start: "2018-10-26T10:30:00+02:00",
              end: "2018-10-26T11:20:00+02:00"
            },
            {
              title: "Supernatural",
              id: "dummy_program_id",
              start: "2018-10-26T11:20:00+02:00",
              end: "2018-10-26T11:50:00+02:00"
            },
            {
              title: "Cool Stuff",
              id: "dummy_program_id",
              start: "2018-10-26T11:50:00+02:00",
              end: "2018-10-26T12:40:00+02:00"
            },
            {
              title: "Cool Stuff",
              id: "dummy_program_id",
              start: "2018-10-26T12:40:00+02:00",
              end: "2018-10-26T13:20:00+02:00"
            },
            {
              title: "Vikings",
              id: "dummy_program_id",
              start: "2018-10-26T13:20:00+02:00",
              end: "2018-10-26T14:00:00+02:00"
            },
            {
              title: "Game of Thrones",
              id: "dummy_program_id",
              start: "2018-10-26T14:00:00+02:00",
              end: "2018-10-26T14:50:00+02:00"
            },
            {
              title: "Cool Stuff",
              id: "dummy_program_id",
              start: "2018-10-26T14:50:00+02:00",
              end: "2018-10-26T15:10:00+02:00"
            },
            {
              title: "Awesome Program",
              id: "dummy_program_id",
              start: "2018-10-26T15:10:00+02:00",
              end: "2018-10-26T15:50:00+02:00"
            },
            {
              title: "Awesome Program",
              id: "dummy_program_id",
              start: "2018-10-26T15:50:00+02:00",
              end: "2018-10-26T16:30:00+02:00"
            },
            {
              title: "Supernatural",
              id: "dummy_program_id",
              start: "2018-10-26T16:30:00+02:00",
              end: "2018-10-26T17:20:00+02:00"
            },
            {
              title: "Game of Thrones",
              id: "dummy_program_id",
              start: "2018-10-26T17:20:00+02:00",
              end: "2018-10-26T17:40:00+02:00"
            },
            {
              title: "Interesting Show",
              id: "dummy_program_id",
              start: "2018-10-26T17:40:00+02:00",
              end: "2018-10-26T18:30:00+02:00"
            },
            {
              title: "Game of Thrones",
              id: "dummy_program_id",
              start: "2018-10-26T18:30:00+02:00",
              end: "2018-10-26T18:50:00+02:00"
            },
            {
              title: "Interesting Show",
              id: "dummy_program_id",
              start: "2018-10-26T18:50:00+02:00",
              end: "2018-10-26T19:40:00+02:00"
            },
            {
              title: "Vikings",
              id: "dummy_program_id",
              start: "2018-10-26T19:40:00+02:00",
              end: "2018-10-26T20:20:00+02:00"
            },
            {
              title: "Vikings",
              id: "dummy_program_id",
              start: "2018-10-26T20:20:00+02:00",
              end: "2018-10-26T20:40:00+02:00"
            },
            {
              title: "Vikings",
              id: "dummy_program_id",
              start: "2018-10-26T20:40:00+02:00",
              end: "2018-10-26T21:30:00+02:00"
            },
            {
              title: "Vikings",
              id: "dummy_program_id",
              start: "2018-10-26T21:30:00+02:00",
              end: "2018-10-26T22:00:00+02:00"
            },
            {
              title: "Game of Thrones",
              id: "dummy_program_id",
              start: "2018-10-26T22:00:00+02:00",
              end: "2018-10-26T22:30:00+02:00"
            },
            {
              title: "Interesting Show",
              id: "dummy_program_id",
              start: "2018-10-26T22:30:00+02:00",
              end: "2018-10-26T23:20:00+02:00"
            },
            {
              title: "Supernatural",
              id: "dummy_program_id",
              start: "2018-10-26T23:20:00+02:00",
              end: "2018-10-26T23:40:00+02:00"
            }
          ]
        },
        {
          id: "tv2norway",
          title: "TV 2 Norway",
          images: {
            logo: "https://openserve.co.za/open/media/photologue/photos/cache/Vox---Green-logo-272x272_image_3_lg.png"
          },
          schedules: [
            {
              title: "Game of Thrones",
              id: "dummy_program_id",
              start: "2018-10-26T00:00:00+02:00",
              end: "2018-10-26T00:30:00+02:00"
            },
            {
              title: "Supernatural",
              id: "dummy_program_id",
              start: "2018-10-26T00:30:00+02:00",
              end: "2018-10-26T01:10:00+02:00"
            },
            {
              title: "Interesting Show",
              id: "dummy_program_id",
              start: "2018-10-26T01:10:00+02:00",
              end: "2018-10-26T02:00:00+02:00"
            },
            {
              title: "Interesting Show",
              id: "dummy_program_id",
              start: "2018-10-26T02:00:00+02:00",
              end: "2018-10-26T02:30:00+02:00"
            },
            {
              title: "Cool Stuff",
              id: "dummy_program_id",
              start: "2018-10-26T02:30:00+02:00",
              end: "2018-10-26T02:50:00+02:00"
            },
            {
              title: "Interesting Show",
              id: "dummy_program_id",
              start: "2018-10-26T02:50:00+02:00",
              end: "2018-10-26T03:10:00+02:00"
            },
            {
              title: "Vikings",
              id: "dummy_program_id",
              start: "2018-10-26T03:10:00+02:00",
              end: "2018-10-26T03:40:00+02:00"
            },
            {
              title: "Awesome Program",
              id: "dummy_program_id",
              start: "2018-10-26T03:40:00+02:00",
              end: "2018-10-26T04:20:00+02:00"
            },
            {
              title: "Supernatural",
              id: "dummy_program_id",
              start: "2018-10-26T04:20:00+02:00",
              end: "2018-10-26T04:40:00+02:00"
            },
            {
              title: "Awesome Program",
              id: "dummy_program_id",
              start: "2018-10-26T04:40:00+02:00",
              end: "2018-10-26T05:10:00+02:00"
            },
            {
              title: "Vikings",
              id: "dummy_program_id",
              start: "2018-10-26T05:10:00+02:00",
              end: "2018-10-26T05:50:00+02:00"
            },
            {
              title: "Awesome Program",
              id: "dummy_program_id",
              start: "2018-10-26T05:50:00+02:00",
              end: "2018-10-26T06:10:00+02:00"
            },
            {
              title: "Interesting Show",
              id: "dummy_program_id",
              start: "2018-10-26T06:10:00+02:00",
              end: "2018-10-26T06:40:00+02:00"
            },
            {
              title: "Game of Thrones",
              id: "dummy_program_id",
              start: "2018-10-26T06:40:00+02:00",
              end: "2018-10-26T07:20:00+02:00"
            },
            {
              title: "Cool Stuff",
              id: "dummy_program_id",
              start: "2018-10-26T07:20:00+02:00",
              end: "2018-10-26T08:10:00+02:00"
            },
            {
              title: "Cool Stuff",
              id: "dummy_program_id",
              start: "2018-10-26T08:10:00+02:00",
              end: "2018-10-26T08:50:00+02:00"
            },
            {
              title: "Supernatural",
              id: "dummy_program_id",
              start: "2018-10-26T08:50:00+02:00",
              end: "2018-10-26T09:20:00+02:00"
            },
            {
              title: "Supernatural",
              id: "dummy_program_id",
              start: "2018-10-26T09:20:00+02:00",
              end: "2018-10-26T09:50:00+02:00"
            },
            {
              title: "Vikings",
              id: "dummy_program_id",
              start: "2018-10-26T09:50:00+02:00",
              end: "2018-10-26T10:40:00+02:00"
            },
            {
              title: "Game of Thrones",
              id: "dummy_program_id",
              start: "2018-10-26T10:40:00+02:00",
              end: "2018-10-26T11:20:00+02:00"
            },
            {
              title: "Interesting Show",
              id: "dummy_program_id",
              start: "2018-10-26T11:20:00+02:00",
              end: "2018-10-26T12:10:00+02:00"
            },
            {
              title: "Interesting Show",
              id: "dummy_program_id",
              start: "2018-10-26T12:10:00+02:00",
              end: "2018-10-26T12:30:00+02:00"
            },
            {
              title: "Vikings",
              id: "dummy_program_id",
              start: "2018-10-26T12:30:00+02:00",
              end: "2018-10-26T13:10:00+02:00"
            },
            {
              title: "Interesting Show",
              id: "dummy_program_id",
              start: "2018-10-26T13:10:00+02:00",
              end: "2018-10-26T13:50:00+02:00"
            },
            {
              title: "Supernatural",
              id: "dummy_program_id",
              start: "2018-10-26T13:50:00+02:00",
              end: "2018-10-26T14:10:00+02:00"
            },
            {
              title: "Game of Thrones",
              id: "dummy_program_id",
              start: "2018-10-26T14:10:00+02:00",
              end: "2018-10-26T14:30:00+02:00"
            },
            {
              title: "Awesome Program",
              id: "dummy_program_id",
              start: "2018-10-26T14:30:00+02:00",
              end: "2018-10-26T15:10:00+02:00"
            },
            {
              title: "Vikings",
              id: "dummy_program_id",
              start: "2018-10-26T15:10:00+02:00",
              end: "2018-10-26T16:00:00+02:00"
            },
            {
              title: "Vikings",
              id: "dummy_program_id",
              start: "2018-10-26T16:00:00+02:00",
              end: "2018-10-26T16:30:00+02:00"
            },
            {
              title: "Game of Thrones",
              id: "dummy_program_id",
              start: "2018-10-26T16:30:00+02:00",
              end: "2018-10-26T17:00:00+02:00"
            },
            {
              title: "Interesting Show",
              id: "dummy_program_id",
              start: "2018-10-26T17:00:00+02:00",
              end: "2018-10-26T17:50:00+02:00"
            },
            {
              title: "Interesting Show",
              id: "dummy_program_id",
              start: "2018-10-26T17:50:00+02:00",
              end: "2018-10-26T18:40:00+02:00"
            },
            {
              title: "Vikings",
              id: "dummy_program_id",
              start: "2018-10-26T18:40:00+02:00",
              end: "2018-10-26T19:20:00+02:00"
            },
            {
              title: "Interesting Show",
              id: "dummy_program_id",
              start: "2018-10-26T19:20:00+02:00",
              end: "2018-10-26T20:10:00+02:00"
            },
            {
              title: "Supernatural",
              id: "dummy_program_id",
              start: "2018-10-26T20:10:00+02:00",
              end: "2018-10-26T21:00:00+02:00"
            },
            {
              title: "Supernatural",
              id: "dummy_program_id",
              start: "2018-10-26T21:00:00+02:00",
              end: "2018-10-26T21:40:00+02:00"
            },
            {
              title: "Supernatural",
              id: "dummy_program_id",
              start: "2018-10-26T21:40:00+02:00",
              end: "2018-10-26T22:10:00+02:00"
            },
            {
              title: "Game of Thrones",
              id: "dummy_program_id",
              start: "2018-10-26T22:10:00+02:00",
              end: "2018-10-26T22:30:00+02:00"
            },
            {
              title: "Interesting Show",
              id: "dummy_program_id",
              start: "2018-10-26T22:30:00+02:00",
              end: "2018-10-26T23:20:00+02:00"
            }
          ]
        },
        {
          id: "channel5",
          title: "Channel 5",
          images: {
            logo: "https://openserve.co.za/open/media/photologue/photos/cache/Vox---Green-logo-272x272_image_3_lg.png"
          },
          schedules: [
            {
              title: "Game of Thrones",
              id: "dummy_program_id",
              start: "2018-10-26T00:00:00+02:00",
              end: "2018-10-26T00:50:00+02:00"
            },
            {
              title: "Interesting Show",
              id: "dummy_program_id",
              start: "2018-10-26T00:50:00+02:00",
              end: "2018-10-26T01:20:00+02:00"
            },
            {
              title: "Cool Stuff",
              id: "dummy_program_id",
              start: "2018-10-26T01:20:00+02:00",
              end: "2018-10-26T01:40:00+02:00"
            },
            {
              title: "Vikings",
              id: "dummy_program_id",
              start: "2018-10-26T01:40:00+02:00",
              end: "2018-10-26T02:20:00+02:00"
            },
            {
              title: "Vikings",
              id: "dummy_program_id",
              start: "2018-10-26T02:20:00+02:00",
              end: "2018-10-26T02:40:00+02:00"
            },
            {
              title: "Awesome Program",
              id: "dummy_program_id",
              start: "2018-10-26T02:40:00+02:00",
              end: "2018-10-26T03:30:00+02:00"
            },
            {
              title: "Supernatural",
              id: "dummy_program_id",
              start: "2018-10-26T03:30:00+02:00",
              end: "2018-10-26T03:50:00+02:00"
            },
            {
              title: "Cool Stuff",
              id: "dummy_program_id",
              start: "2018-10-26T03:50:00+02:00",
              end: "2018-10-26T04:10:00+02:00"
            },
            {
              title: "Interesting Show",
              id: "dummy_program_id",
              start: "2018-10-26T04:10:00+02:00",
              end: "2018-10-26T04:30:00+02:00"
            },
            {
              title: "Interesting Show",
              id: "dummy_program_id",
              start: "2018-10-26T04:30:00+02:00",
              end: "2018-10-26T05:00:00+02:00"
            },
            {
              title: "Cool Stuff",
              id: "dummy_program_id",
              start: "2018-10-26T05:00:00+02:00",
              end: "2018-10-26T05:30:00+02:00"
            },
            {
              title: "Vikings",
              id: "dummy_program_id",
              start: "2018-10-26T05:30:00+02:00",
              end: "2018-10-26T06:00:00+02:00"
            },
            {
              title: "Supernatural",
              id: "dummy_program_id",
              start: "2018-10-26T06:00:00+02:00",
              end: "2018-10-26T06:20:00+02:00"
            },
            {
              title: "Cool Stuff",
              id: "dummy_program_id",
              start: "2018-10-26T06:20:00+02:00",
              end: "2018-10-26T06:40:00+02:00"
            },
            {
              title: "Interesting Show",
              id: "dummy_program_id",
              start: "2018-10-26T06:40:00+02:00",
              end: "2018-10-26T07:00:00+02:00"
            },
            {
              title: "Awesome Program",
              id: "dummy_program_id",
              start: "2018-10-26T07:00:00+02:00",
              end: "2018-10-26T07:20:00+02:00"
            },
            {
              title: "Supernatural",
              id: "dummy_program_id",
              start: "2018-10-26T07:20:00+02:00",
              end: "2018-10-26T08:10:00+02:00"
            },
            {
              title: "Vikings",
              id: "dummy_program_id",
              start: "2018-10-26T08:10:00+02:00",
              end: "2018-10-26T09:00:00+02:00"
            },
            {
              title: "Awesome Program",
              id: "dummy_program_id",
              start: "2018-10-26T09:00:00+02:00",
              end: "2018-10-26T09:50:00+02:00"
            },
            {
              title: "Vikings",
              id: "dummy_program_id",
              start: "2018-10-26T09:50:00+02:00",
              end: "2018-10-26T10:30:00+02:00"
            },
            {
              title: "Supernatural",
              id: "dummy_program_id",
              start: "2018-10-26T10:30:00+02:00",
              end: "2018-10-26T11:20:00+02:00"
            },
            {
              title: "Game of Thrones",
              id: "dummy_program_id",
              start: "2018-10-26T11:20:00+02:00",
              end: "2018-10-26T12:00:00+02:00"
            },
            {
              title: "Game of Thrones",
              id: "dummy_program_id",
              start: "2018-10-26T12:00:00+02:00",
              end: "2018-10-26T12:40:00+02:00"
            },
            {
              title: "Game of Thrones",
              id: "dummy_program_id",
              start: "2018-10-26T12:40:00+02:00",
              end: "2018-10-26T13:20:00+02:00"
            },
            {
              title: "Cool Stuff",
              id: "dummy_program_id",
              start: "2018-10-26T13:20:00+02:00",
              end: "2018-10-26T13:50:00+02:00"
            },
            {
              title: "Vikings",
              id: "dummy_program_id",
              start: "2018-10-26T13:50:00+02:00",
              end: "2018-10-26T14:10:00+02:00"
            },
            {
              title: "Vikings",
              id: "dummy_program_id",
              start: "2018-10-26T14:10:00+02:00",
              end: "2018-10-26T15:00:00+02:00"
            },
            {
              title: "Interesting Show",
              id: "dummy_program_id",
              start: "2018-10-26T15:00:00+02:00",
              end: "2018-10-26T15:30:00+02:00"
            },
            {
              title: "Game of Thrones",
              id: "dummy_program_id",
              start: "2018-10-26T15:30:00+02:00",
              end: "2018-10-26T15:50:00+02:00"
            },
            {
              title: "Interesting Show",
              id: "dummy_program_id",
              start: "2018-10-26T15:50:00+02:00",
              end: "2018-10-26T16:40:00+02:00"
            },
            {
              title: "Vikings",
              id: "dummy_program_id",
              start: "2018-10-26T16:40:00+02:00",
              end: "2018-10-26T17:10:00+02:00"
            },
            {
              title: "Cool Stuff",
              id: "dummy_program_id",
              start: "2018-10-26T17:10:00+02:00",
              end: "2018-10-26T17:50:00+02:00"
            },
            {
              title: "Interesting Show",
              id: "dummy_program_id",
              start: "2018-10-26T17:50:00+02:00",
              end: "2018-10-26T18:30:00+02:00"
            },
            {
              title: "Supernatural",
              id: "dummy_program_id",
              start: "2018-10-26T18:30:00+02:00",
              end: "2018-10-26T18:50:00+02:00"
            },
            {
              title: "Vikings",
              id: "dummy_program_id",
              start: "2018-10-26T18:50:00+02:00",
              end: "2018-10-26T19:30:00+02:00"
            },
            {
              title: "Game of Thrones",
              id: "dummy_program_id",
              start: "2018-10-26T19:30:00+02:00",
              end: "2018-10-26T20:10:00+02:00"
            },
            {
              title: "Cool Stuff",
              id: "dummy_program_id",
              start: "2018-10-26T20:10:00+02:00",
              end: "2018-10-26T21:00:00+02:00"
            },
            {
              title: "Cool Stuff",
              id: "dummy_program_id",
              start: "2018-10-26T21:00:00+02:00",
              end: "2018-10-26T21:40:00+02:00"
            },
            {
              title: "Awesome Program",
              id: "dummy_program_id",
              start: "2018-10-26T21:40:00+02:00",
              end: "2018-10-26T22:20:00+02:00"
            },
            {
              title: "Supernatural",
              id: "dummy_program_id",
              start: "2018-10-26T22:20:00+02:00",
              end: "2018-10-26T22:40:00+02:00"
            },
            {
              title: "Vikings",
              id: "dummy_program_id",
              start: "2018-10-26T22:40:00+02:00",
              end: "2018-10-26T23:10:00+02:00"
            },
            {
              title: "Interesting Show",
              id: "dummy_program_id",
              start: "2018-10-26T23:10:00+02:00",
              end: "2018-10-26T23:50:00+02:00"
            }
          ]
        }
      ];

    return channels;
  }
}

export default Channel;